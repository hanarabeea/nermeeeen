import "dotenv/config";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

// Deployment writes credentials to .env.local; dotenv only reads .env on its own.
dotenv.config({ path: ".env.local" });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// `pnpm start --port 3004` passes the flag through to this script.
const portFlagIndex = process.argv.indexOf("--port");
const portFromFlag = portFlagIndex !== -1 ? process.argv[portFlagIndex + 1] : undefined;
const PORT = portFromFlag || process.env.PORT || 3001;

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

app.post("/api/send-email", async (req, res) => {
  const { type, name, attending, guests, guestNames, message, imageDataUrl } = req.body || {};

  const smtpUser = process.env.SMTP_USER || "";
  const smtpPass = process.env.SMTP_PASS || "";
  const toEmail = process.env.CONTACT_EMAIL || smtpUser;

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      success: false,
      message: "Email service not configured. Missing SMTP credentials in .env.",
    });
  }
  if (!toEmail) {
    return res.status(500).json({
      success: false,
      message: "Email service not configured. Missing CONTACT_EMAIL in .env.",
    });
  }

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Please enter your name." });
  }

  const transporter = getTransporter();
  try {
    await transporter.verify();
  } catch (err) {
    console.error("SMTP verify error:", err);
    return res.status(500).json({
      success: false,
      message: `Email service error: ${err instanceof Error ? err.message : "SMTP verification failed"}`,
    });
  }

  try {
    if (type === "rsvp") {
      const isAttending = attending === "yes";
      const guestsNumber = parseInt(guests || "0", 10) || 0;

      const info = await transporter.sendMail({
        from: `"Wedding Website" <${smtpUser}>`,
        to: toEmail,
        subject: `New RSVP from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #b48c3d;">New RSVP Received!</h2>
            <div style="margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Attendance:</strong> ${isAttending ? "Attending" : "Not attending"}</p>
              ${isAttending && guestsNumber > 0 ? `<p><strong>Number of Guests:</strong> ${guestsNumber}</p>` : ""}
              ${isAttending && guestNames ? `<p><strong>Guest Names:</strong> ${guestNames}</p>` : ""}
            </div>
          </div>
        `,
      });
      return res.json({ success: true, message: "RSVP submitted successfully!", messageId: info.messageId });
    }

    // Default: "message" type — a note left for the couple (written or drawn)
    const attachments = [];
    let bodyHtml;

    if (imageDataUrl) {
      const base64 = imageDataUrl.split(",")[1] || "";
      attachments.push({
        filename: "handwritten-message.png",
        content: Buffer.from(base64, "base64"),
        cid: "handwritten-message",
      });
      bodyHtml = `
        <p>Here's the handwritten message:</p>
        <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px;">
          <img src="cid:handwritten-message" alt="Handwritten message" style="max-width: 100%; height: auto;" />
        </div>
      `;
    } else {
      bodyHtml = `
        <div style="margin: 20px 0; padding: 15px; background: #f9fafb; border-radius: 8px; white-space: pre-wrap; line-height: 1.6;">
          ${(message || "").replace(/\n/g, "<br>")}
        </div>
      `;
    }

    const info = await transporter.sendMail({
      from: `"Wedding Website" <${smtpUser}>`,
      to: toEmail,
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #b48c3d;">You've received a new message!</h2>
          <p><strong>From:</strong> ${name}</p>
          ${bodyHtml}
        </div>
      `,
      attachments,
    });
    return res.json({ success: true, message: "Message sent successfully!", messageId: info.messageId });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : "Unknown email error",
    });
  }
});

// Serve the built invitation from the same process, so one PM2 app on one port
// covers both the site and /api behind a single nginx proxy_pass.
app.use(express.static(distDir));
app.get("*", (req, res) => res.sendFile(path.join(distDir, "index.html")));

app.listen(PORT, () => {
  console.log(`Invitation running on http://localhost:${PORT}`);
});
