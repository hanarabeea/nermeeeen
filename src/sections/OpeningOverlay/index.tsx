import { useEffect, useRef, useState } from "react";
import { MapPin, Volume2, VolumeX } from "lucide-react";

const WEDDING_DATE = new Date("2026-09-17T20:00:00");
const MAP_LINK = "https://maps.app.goo.gl/vawjKKWHYxJEYfQv8";

const getCountdown = () => {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const pad = (value: number) => value.toString().padStart(2, "0");

const translations = {
  invitationFrom: { en: "You have received an invitation from", ar: "لقد تلقيتم دعوة من" },
  groomName: { en: "Mohamed", ar: "محمد" },
  brideName: { en: "Nermen", ar: "نيرمين" },
  coupleNames: { en: "Nermen & Mohamed", ar: "نيرمين ومحمد" },
  tapToOpen: { en: "Tap to open", ar: "اضغط للفتح" },
  gettingMarried: { en: "We are getting married", ar: "نحن على وشك الزواج" },
  weddingDateShort: { en: "17 . 09 . 2026", ar: "١٧ . ٠٩ . ٢٠٢٦" },
  introText: {
    en: "Some moments become memories we carry forever. Today is one of them, and we would love to share it with the people who make our lives more meaningful.",
    ar: "بعض اللحظات تصبح ذكريات نحملها إلى الأبد. اليوم واحدة منها، ويسعدنا أن نشاركها مع من يجعلون حياتنا أكثر معنى.",
  },
  ourMonth: { en: "our September", ar: "سبتمبر لنا" },
  weddingTime: { en: "8:00 PM", ar: "٨:٠٠ مساءً" },
  weddingCeremony: { en: "The Wedding", ar: "حفل الزفاف" },
  weddingCeremonyText: {
    en: "Our celebration begins at 8:00 PM. Come early, stay late, and celebrate with us.",
    ar: "يبدأ احتفالنا في الثامنة مساءً. تعالوا مبكرًا وابقوا معنا حتى النهاية.",
  },
  loveQuote: {
    en: "Love is finding a home in someone else's heart.",
    ar: "الحب أن تجد وطنًا في قلب شخص آخر.",
  },
  inDots: { en: "in...", ar: "بعد..." },
  days: { en: "Days", ar: "أيام" },
  hours: { en: "Hours", ar: "ساعات" },
  minutes: { en: "Minutes", ar: "دقائق" },
  seconds: { en: "Seconds", ar: "ثواني" },
  locationLabel: { en: "Location", ar: "الموقع" },
  weAwaitYou: { en: "we await you", ar: "بانتظاركم" },
  venueName: { en: "Jumeira Hall", ar: "قاعة جميرا" },
  venueAddress: { en: "Ras El Bar · Egypt", ar: "رأس البر · مصر" },
  openMap: { en: "Open Map", ar: "افتح الخريطة" },
  rsvpLabel: { en: "Attendance", ar: "الحضور" },
  confirmAttendance: { en: "will you join us", ar: "هل ستنضمون إلينا" },
  confirmAttendanceText: {
    en: "To help us prepare for a joyful celebration, kindly confirm your attendance.",
    ar: "لمساعدتنا في التحضير لاحتفال سعيد، يرجى تأكيد حضوركم.",
  },
  clickToOpen: { en: "Click to open", ar: "اضغط للفتح" },
  clickToClose: { en: "Click to close", ar: "اضغط للإغلاق" },
  willYouAttend: { en: "Will you attend?", ar: "هل ستحضرون؟" },
  joyfullyAccept: { en: "Joyfully Accept", ar: "نقبل بكل سرور" },
  regretfullyDecline: { en: "Regretfully Decline", ar: "نعتذر عن الحضور" },
  numberOfGuests: { en: "Number of Guests", ar: "عدد الضيوف" },
  guest: { en: "Guest", ar: "ضيف" },
  guests: { en: "Guests", ar: "ضيوف" },
  submitRsvp: { en: "Submit RSVP", ar: "إرسال التأكيد" },
  submitting: { en: "Submitting...", ar: "جارٍ الإرسال..." },
  rsvpFieldsError: { en: "Please fill in your name and attendance.", ar: "يرجى إدخال اسمك وتأكيد الحضور." },
  rsvpSuccess: { en: "Thank you! Your RSVP has been received.", ar: "شكرًا لكم! تم استلام تأكيد حضوركم." },
  rsvpFailure: { en: "Failed to submit RSVP.", ar: "فشل إرسال تأكيد الحضور." },
  wishesLabel: { en: "Wishes", ar: "أمنيات" },
  leaveMessage: { en: "leave us a note", ar: "اتركوا لنا رسالة" },
  leaveMessageText: {
    en: "Write or draw a few words for us — we will keep every one of them.",
    ar: "اكتبوا أو ارسموا لنا بضع كلمات — سنحتفظ بها جميعًا.",
  },
  writeMessage: { en: "Write a Message", ar: "اكتب رسالة" },
  drawMessage: { en: "Draw a Message", ar: "ارسم رسالة" },
  yourName: { en: "Your Name", ar: "اسمك" },
  fullName: { en: "Full name", ar: "الاسم الكامل" },
  yourMessage: { en: "Your Message", ar: "رسالتك" },
  writeYourWishes: { en: "Write your wishes for the couple...", ar: "اكتب أمنياتك للعروسين..." },
  drawYourMessage: { en: "Draw Your Message", ar: "ارسم رسالتك" },
  clear: { en: "Clear", ar: "مسح" },
  sendMessage: { en: "Send Message", ar: "إرسال الرسالة" },
  sending: { en: "Sending...", ar: "جارٍ الإرسال..." },
  messageNameError: { en: "Please enter your name.", ar: "يرجى إدخال اسمك." },
  messageWrittenError: { en: "Please write a message.", ar: "يرجى كتابة رسالة." },
  messageDrawnError: { en: "Please draw a message.", ar: "يرجى رسم رسالة." },
  messageSuccess: { en: "Thank you! Your message has been sent.", ar: "شكرًا لكم! تم إرسال رسالتكم." },
  messageFailure: { en: "Failed to send message.", ar: "فشل إرسال الرسالة." },
  closingLine: {
    en: "We can't wait to celebrate this special day with you",
    ar: "لا يسعنا الانتظار للاحتفال بهذا اليوم المميز معكم",
  },
  muteMusic: { en: "Mute music", ar: "كتم الصوت" },
  unmuteMusic: { en: "Unmute music", ar: "تشغيل الصوت" },
  madeBy: { en: "Made by ", ar: "صُنع بواسطة " },
} as const;

type TranslationKey = keyof typeof translations;

type SendStatus = { text: string; type: "success" | "error" | "info" | "" };

async function submitToServer(payload: Record<string, string>) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.success) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

const Heart = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-1.5 -1.5 35 32.6" fill="currentColor" className={className} aria-hidden>
    <path d="M23.6,0c-2.9,0-5.6,1.4-7.6,3.7C14,1.4,11.3,0,8.4,0C3.8,0,0,3.8,0,8.4c0,7.6,7.9,11.8,14.9,18.6c0.6,0.6,1.6,0.6,2.2,0C24.1,20.2,32,16,32,8.4C32,3.8,28.2,0,23.6,0z" />
  </svg>
);

const RIBBON_PATH = `M50 0 C 14 125, 86 250, 50 375 C 14 500, 86 625, 50 750 C 14 875, 86 950, 50 1000`;

// A single ribbon pinned to the viewport — it stays exactly where it is while the
// invitation scrolls past it. A dark copy is drawn on top of the faint one and
// revealed from the top down in step with the scroll, so the line fills in bit by
// bit like a loading bar and is fully drawn once the guest reaches the end.
const RibbonLine = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    let target = 0;
    let current = 0;
    let frame = 0;

    const readTarget = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      target = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    };

    // Ease toward the scroll target each frame rather than writing straight from the
    // scroll event — otherwise the fill advances in visible steps.
    const tick = () => {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0005) current = target;
      path.style.strokeDashoffset = `${length * (1 - current)}`;
      frame = window.requestAnimationFrame(tick);
    };

    readTarget();
    current = target;
    frame = window.requestAnimationFrame(tick);
    window.addEventListener("scroll", readTarget, { passive: true });
    window.addEventListener("resize", readTarget);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", readTarget);
      window.removeEventListener("resize", readTarget);
    };
  }, []);

  return (
    <svg
      className="pointer-events-none fixed left-1/2 top-0 z-[30] h-[100svh] w-full max-w-[440px] -translate-x-1/2"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={RIBBON_PATH}
        fill="none"
        stroke="#7E8B52"
        strokeOpacity="0.14"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        ref={pathRef}
        d={RIBBON_PATH}
        fill="none"
        stroke="#7E8B52"
        strokeOpacity="0.6"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[11px] uppercase tracking-[0.42em] text-[#6B6249] font-newfonts font-thin">
    {children}
  </div>
);

const ScriptHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[46px] leading-[1.15] text-[#7E8B52] font-webgency">{children}</div>
);

export const OpeningOverlay = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const t = (key: TranslationKey) => translations[key][language];
  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "ar" : "en"));

  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [countdown, setCountdown] = useState(getCountdown);

  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [rsvpFormOpen, setRsvpFormOpen] = useState(false);
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpAttending, setRsvpAttending] = useState<"yes" | "no" | "">("");
  const [rsvpGuests, setRsvpGuests] = useState("1");
  const [rsvpSubmitting, setRsvpSubmitting] = useState(false);
  const [rsvpStatus, setRsvpStatus] = useState<SendStatus>({ text: "", type: "" });

  const [messageName, setMessageName] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageSubmitting, setMessageSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState<SendStatus>({ text: "", type: "" });
  const [messageType, setMessageType] = useState<"written" | "drawn">("written");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawingRef = useRef(false);
  const [hasDrawing, setHasDrawing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startAudio = () => {
      if (isPlaying) return;
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    document.addEventListener("touchstart", startAudio, { once: true, passive: true });
    document.addEventListener("click", startAudio, { once: true });

    return () => {
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("click", startAudio);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!isPlaying && audio) {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    setIsMuted((prev) => !prev);
  };

  const openInvitation = () => {
    if (isClosing || isOpened) return;

    const audio = audioRef.current;
    if (audio) {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpened(true);
      setIsClosing(false);
    }, 700);
  };

  const handleRsvpSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!rsvpName.trim() || (rsvpAttending !== "yes" && rsvpAttending !== "no")) {
      setRsvpStatus({ text: t("rsvpFieldsError"), type: "error" });
      return;
    }

    setRsvpSubmitting(true);
    setRsvpStatus({ text: t("submitting"), type: "info" });

    try {
      await submitToServer({
        type: "rsvp",
        name: rsvpName.trim(),
        attending: rsvpAttending,
        guests: rsvpAttending === "yes" ? rsvpGuests : "0",
      });
      setRsvpStatus({ text: t("rsvpSuccess"), type: "success" });
      setRsvpName("");
      setRsvpAttending("");
      setRsvpGuests("1");
    } catch (err) {
      setRsvpStatus({ text: err instanceof Error ? err.message : t("rsvpFailure"), type: "error" });
    } finally {
      setRsvpSubmitting(false);
    }
  };

  const getCanvasPoint = (event: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const point = "touches" in event ? event.touches[0] : event;
    return {
      x: ((point.clientX - rect.left) / rect.width) * canvas.width,
      y: ((point.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    const point = getCanvasPoint(event);
    if (!canvas || !point) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    isDrawingRef.current = true;
    ctx.beginPath();
    ctx.moveTo(point.x, point.y);
  };

  const drawStroke = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawingRef.current) return;
    const canvas = canvasRef.current;
    const point = getCanvasPoint(event);
    if (!canvas || !point) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#7E8B52";
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    setHasDrawing(true);
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasDrawing(false);
  };

  useEffect(() => {
    if (messageType !== "drawn") return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, [messageType]);

  const handleMessageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!messageName.trim()) {
      setMessageStatus({ text: t("messageNameError"), type: "error" });
      return;
    }
    if (messageType === "written" && !messageText.trim()) {
      setMessageStatus({ text: t("messageWrittenError"), type: "error" });
      return;
    }
    if (messageType === "drawn" && !hasDrawing) {
      setMessageStatus({ text: t("messageDrawnError"), type: "error" });
      return;
    }

    setMessageSubmitting(true);
    setMessageStatus({ text: t("sending"), type: "info" });

    try {
      const payload: Record<string, string> = {
        type: "message",
        name: messageName.trim(),
      };
      if (messageType === "drawn") {
        payload.imageDataUrl = canvasRef.current?.toDataURL("image/png") || "";
      } else {
        payload.message = messageText.trim();
      }

      await submitToServer(payload);
      setMessageStatus({ text: t("messageSuccess"), type: "success" });
      setMessageName("");
      setMessageText("");
      clearCanvas();
    } catch (err) {
      setMessageStatus({ text: err instanceof Error ? err.message : t("messageFailure"), type: "error" });
    } finally {
      setMessageSubmitting(false);
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-[#7E8B52]/20 bg-[#F7F1E3]/70 text-[#4F4A3A] font-newfonts font-thin text-[17px] focus:outline-none focus:ring-2 focus:ring-[#7E8B52]/25";
  const labelClass = "block text-[13px] uppercase tracking-[0.2em] text-[#6B6249] mb-2 font-newfonts font-thin";

  return (
    <div lang={language} className={`bg-[#EDE3D1] ${language === "ar" ? "lang-ar" : ""}`}>
      <audio ref={audioRef} src="/wedding-song.mp3" loop playsInline preload="auto" muted={isMuted} className="hidden" />

      {!isOpened && (
        <div
          role="button"
          tabIndex={0}
          onClick={openInvitation}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openInvitation();
            }
          }}
          className={`fixed inset-0 z-[99999] flex cursor-pointer flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_45%,#96A461_0%,#7E8B52_45%,#4A5430_100%)] px-8 text-center transition-all duration-700 ease-in-out ${
            isClosing ? "pointer-events-none scale-105 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <Heart className="mb-6 h-11 w-11 animate-heartbeat text-[#B9CC85] stroke-[#EDE3D1] stroke-[0.9]" />
          <div className="text-[12px] uppercase leading-[2] tracking-[0.35em] text-[#F7F1E3] font-newfonts font-thin">
            {t("invitationFrom")}
          </div>
          <div className="mt-3 text-[54px] leading-[1.1] text-[#F7F1E3] font-webgency">
            {t("brideName")} <span className="text-[42px]">&amp;</span> {t("groomName")}
          </div>
          <div className="mt-10 text-[13px] uppercase tracking-[0.3em] text-[#F7F1E3] font-newfonts font-thin">
            {t("tapToOpen")}
          </div>
        </div>
      )}

      {isOpened && (
        <>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? t("unmuteMusic") : t("muteMusic")}
            className="fixed bottom-4 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#7E8B52] text-[#EDE3D1] shadow-lg transition-colors hover:bg-[#96A461]"
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            className="fixed top-4 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#7E8B52] text-[#EDE3D1] text-sm shadow-lg transition-colors hover:bg-[#96A461] font-newfonts font-thin"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>
        </>
      )}

      <div className="relative mx-auto w-full max-w-[440px] overflow-hidden bg-[#EDE3D1]">
        <RibbonLine />

        <div className="relative">
          {/* Hero */}
          <section className="flex min-h-[100svh] flex-col items-center justify-center px-8 text-center">
            <div className="text-[19px] italic text-[#5E6A3B] font-newfonts font-thin">
              – {t("gettingMarried")} –
            </div>
            <div className="mt-6 text-[62px] leading-[1.05] text-[#7E8B52] font-webgency">{t("brideName")}</div>
            <div className="my-2 text-[30px] text-[#5E6A3B] font-webgency">&amp;</div>
            <div className="text-[62px] leading-[1.05] text-[#7E8B52] font-webgency">{t("groomName")}</div>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#7E8B52]/40" />
              <span className="text-[19px] tracking-[0.22em] text-[#4A432E] font-newfonts font-medium">
                {t("weddingDateShort")}
              </span>
              <span className="h-px w-10 bg-[#7E8B52]/40" />
            </div>
            <Heart className="mt-16 h-5 w-5 text-[#A3B072]" />
          </section>

          {/* Photos */}
          <section className="px-6 pb-4">
            <div className="relative h-[340px]">
              <img
                src="/couple-1.jpg"
                alt=""
                className="absolute left-0 top-0 z-[40] h-[230px] w-[165px] rounded-2xl object-cover shadow-[0_18px_40px_-20px_rgba(107,15,31,0.5)]"
              />
              <img
                src="/couple-2.jpg"
                alt=""
                className="absolute right-0 top-[60px] z-[40] h-[230px] w-[165px] rounded-2xl object-cover shadow-[0_18px_40px_-20px_rgba(107,15,31,0.5)]"
              />
            </div>
            <p className="mt-6 px-2 text-center text-[19px] italic leading-[1.7] text-[#4F4A3A] font-newfonts font-thin">
              {t("introText")}
            </p>
          </section>

          {/* Date */}
          <section className="px-8 py-20 text-center">
            <ScriptHeading>{t("ourMonth")}</ScriptHeading>
            <div className="mt-2 text-[12px] tracking-[0.4em] text-[#6B6249] font-newfonts font-thin">2026</div>
            <div className="mt-8 flex items-center justify-center gap-2">
              {[15, 16, 17, 18, 19].map((day) =>
                day === 17 ? (
                  <div key={day} className="relative flex h-12 w-12 items-center justify-center">
                    <Heart className="h-12 w-12 text-[#7E8B52]" />
                    {/* The heart tapers to a point, so its visual centre sits above the box centre. */}
                    <span className="absolute -translate-y-[3px] text-[16px] leading-none text-[#EDE3D1] font-newfonts font-thin">
                      {day}
                    </span>
                  </div>
                ) : (
                  <div
                    key={day}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7E8B52]/20 text-[17px] text-[#6B6249] font-newfonts font-thin"
                  >
                    {day}
                  </div>
                ),
              )}
            </div>
          </section>

          {/* Time */}
          <section className="px-8 pb-20 text-center">
            <div className="text-[36px] leading-tight text-[#7E8B52] font-newfonts font-thin">{t("weddingTime")}</div>
            <ScriptHeading>{t("weddingCeremony")}</ScriptHeading>
            <p className="mx-auto mt-4 max-w-[300px] text-[17px] leading-[1.7] text-[#4F4A3A] font-newfonts font-thin">
              {t("weddingCeremonyText")}
            </p>
          </section>

          {/* Countdown */}
          <section className="px-8 pb-24 text-center">
            <p className="text-[19px] italic leading-[1.6] text-[#5E6A3B] font-newfonts font-thin">{t("loveQuote")}</p>
            <div className="mt-3 text-[34px] text-[#7E8B52] font-webgency">{t("inDots")}</div>
            <div className="mt-8 flex items-center justify-center gap-2">
              {[
                { value: countdown.days, label: t("days") },
                { value: countdown.hours, label: t("hours") },
                { value: countdown.minutes, label: t("minutes") },
                { value: countdown.seconds, label: t("seconds") },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex h-[74px] w-[74px] flex-col items-center justify-center rounded-2xl bg-[#F7F1E3]/70 shadow-[0_10px_30px_-18px_rgba(107,15,31,0.6)]"
                >
                  <div className="text-[24px] leading-none text-[#7E8B52] font-newfonts font-thin">
                    {pad(unit.value)}
                  </div>
                  <div className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-[#6B6249] font-newfonts font-thin">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* RSVP */}
          <section className="px-8 pb-24 text-center">
            <SectionLabel>{t("rsvpLabel")}</SectionLabel>
            <div className="mt-2">
              <ScriptHeading>{t("confirmAttendance")}</ScriptHeading>
            </div>
            <p className="mx-auto mt-4 max-w-[310px] text-[17px] leading-[1.7] text-[#4F4A3A] font-newfonts font-thin">
              {t("confirmAttendanceText")}
            </p>
            <button
              type="button"
              onClick={() => setRsvpFormOpen((prev) => !prev)}
              className="mt-7 rounded-full bg-[linear-gradient(100deg,#4A5430_0%,#96A461_50%,#4A5430_100%)] px-12 py-3.5 text-[15px] uppercase tracking-[0.22em] text-[#EDE3D1] shadow-[0_14px_30px_-14px_rgba(107,15,31,0.9)] font-newfonts font-thin"
            >
              {rsvpFormOpen ? t("clickToClose") : t("clickToOpen")}
            </button>

            {rsvpFormOpen && (
              <form onSubmit={handleRsvpSubmit} className="mt-8 space-y-5 text-left">
                <div>
                  <label className={labelClass}>{t("yourName")}</label>
                  <input
                    type="text"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                    disabled={rsvpSubmitting}
                    className={fieldClass}
                    placeholder={t("fullName")}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t("willYouAttend")}</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["yes", "no"] as const).map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => setRsvpAttending(choice)}
                        disabled={rsvpSubmitting}
                        className={`rounded-xl border px-3 py-3 text-[15px] transition-colors font-newfonts font-thin ${
                          rsvpAttending === choice
                            ? "border-[#7E8B52] bg-[#7E8B52] text-[#EDE3D1]"
                            : "border-[#7E8B52]/20 bg-[#F7F1E3]/70 text-[#4F4A3A]"
                        }`}
                      >
                        {choice === "yes" ? t("joyfullyAccept") : t("regretfullyDecline")}
                      </button>
                    ))}
                  </div>
                </div>
                {rsvpAttending === "yes" && (
                  <div>
                    <label className={labelClass}>{t("numberOfGuests")}</label>
                    <select
                      value={rsvpGuests}
                      onChange={(e) => setRsvpGuests(e.target.value)}
                      disabled={rsvpSubmitting}
                      className={fieldClass}
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? t("guest") : t("guests")}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={rsvpSubmitting}
                  className="w-full rounded-full bg-[#7E8B52] py-3.5 text-[15px] uppercase tracking-[0.22em] text-[#EDE3D1] transition-colors hover:bg-[#96A461] disabled:opacity-50 font-newfonts font-thin"
                >
                  {rsvpSubmitting ? t("submitting") : t("submitRsvp")}
                </button>
                {rsvpStatus.text && (
                  <p
                    className={`text-center text-[15px] font-newfonts font-thin ${
                      rsvpStatus.type === "error"
                        ? "text-red-700"
                        : rsvpStatus.type === "info"
                          ? "text-[#6B6249]"
                          : "text-green-800"
                    }`}
                  >
                    {rsvpStatus.text}
                  </p>
                )}
              </form>
            )}
          </section>

          {/* Message */}
          <section className="px-8 pb-24 text-center">
            <SectionLabel>{t("wishesLabel")}</SectionLabel>
            <div className="mt-2">
              <ScriptHeading>{t("leaveMessage")}</ScriptHeading>
            </div>
            <p className="mx-auto mt-4 max-w-[310px] text-[17px] leading-[1.7] text-[#4F4A3A] font-newfonts font-thin">
              {t("leaveMessageText")}
            </p>

            <div className="mt-6 flex justify-center gap-3">
              {(["written", "drawn"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setMessageType(mode)}
                  className={`rounded-full border px-5 py-2 text-[14px] transition-colors font-newfonts font-thin ${
                    messageType === mode
                      ? "border-[#7E8B52] bg-[#7E8B52] text-[#EDE3D1]"
                      : "border-[#7E8B52]/20 bg-[#F7F1E3]/70 text-[#4F4A3A]"
                  }`}
                >
                  {mode === "written" ? t("writeMessage") : t("drawMessage")}
                </button>
              ))}
            </div>

            <form onSubmit={handleMessageSubmit} className="mt-6 space-y-5 text-left">
              <div>
                <label className={labelClass}>{t("yourName")}</label>
                <input
                  type="text"
                  value={messageName}
                  onChange={(e) => setMessageName(e.target.value)}
                  disabled={messageSubmitting}
                  className={fieldClass}
                  placeholder={t("fullName")}
                />
              </div>

              {messageType === "written" ? (
                <div>
                  <label className={labelClass}>{t("yourMessage")}</label>
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    disabled={messageSubmitting}
                    rows={4}
                    className={fieldClass}
                    placeholder={t("writeYourWishes")}
                  />
                </div>
              ) : (
                <div>
                  <label className={labelClass}>{t("drawYourMessage")}</label>
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={220}
                    onMouseDown={startDrawing}
                    onMouseMove={drawStroke}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={drawStroke}
                    onTouchEnd={stopDrawing}
                    className="h-[220px] w-full cursor-crosshair touch-none rounded-xl border border-[#7E8B52]/20 bg-white"
                  />
                  <button
                    type="button"
                    onClick={clearCanvas}
                    disabled={messageSubmitting}
                    className="mt-3 rounded-full border border-[#7E8B52]/20 bg-[#F7F1E3]/70 px-5 py-1.5 text-[14px] text-[#4F4A3A] font-newfonts font-thin"
                  >
                    {t("clear")}
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={messageSubmitting}
                className="w-full rounded-full bg-[#7E8B52] py-3.5 text-[15px] uppercase tracking-[0.22em] text-[#EDE3D1] transition-colors hover:bg-[#96A461] disabled:opacity-50 font-newfonts font-thin"
              >
                {messageSubmitting ? t("sending") : t("sendMessage")}
              </button>
              {messageStatus.text && (
                <p
                  className={`text-center text-[15px] font-newfonts font-thin ${
                    messageStatus.type === "error"
                      ? "text-red-700"
                      : messageStatus.type === "info"
                        ? "text-[#6B6249]"
                        : "text-green-800"
                  }`}
                >
                  {messageStatus.text}
                </p>
              )}
            </form>
          </section>

          {/* Location */}
          <section className="px-6 pb-24 text-center">
            <SectionLabel>{t("locationLabel")}</SectionLabel>
            <div className="mt-2">
              <ScriptHeading>{t("weAwaitYou")}</ScriptHeading>
            </div>
            <div className="relative z-[40] mt-7 overflow-hidden rounded-2xl shadow-[0_20px_45px_-24px_rgba(107,15,31,0.8)]">
              <img src="/location-map.jpg" alt="" className="h-[230px] w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(66,6,15,0.55)_0%,rgba(66,6,15,0.1)_60%)]" />
              <div className="absolute inset-x-0 bottom-6 text-center">
                <div className="text-[34px] leading-none text-[#F7F1E3] font-webgency">{t("venueName")}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.3em] text-[#F7F1E3] font-newfonts font-thin">
                  {t("venueAddress")}
                </div>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              // In-app browsers (Instagram, Facebook, some WhatsApp views) silently swallow
              // target="_blank"; fall back to navigating this view so the map still opens.
              onClick={(event) => {
                const opened = window.open(MAP_LINK, "_blank", "noopener,noreferrer");
                if (!opened) window.location.href = MAP_LINK;
                event.preventDefault();
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#7E8B52]/45 px-10 py-3.5 text-[15px] uppercase tracking-[0.22em] text-[#7E8B52] transition-colors hover:bg-[#7E8B52] hover:text-[#EDE3D1] font-newfonts font-thin"
            >
              <MapPin className="h-4 w-4" />
              {t("openMap")}
            </a>
          </section>

          {/* Closing */}
          <section className="px-6 pb-16 text-center">
            <img
              src="/couple-3.jpg"
              alt=""
              className="relative z-[40] h-[330px] w-full rounded-2xl object-cover shadow-[0_20px_45px_-24px_rgba(107,15,31,0.8)]"
            />
            <p className="mt-8 text-[26px] leading-[1.35] text-[#7E8B52] font-webgency">{t("closingLine")}</p>
            <Heart className="mx-auto mt-6 h-6 w-6 text-[#7E8B52]" />
          </section>
        </div>

        <footer className="relative z-[40] bg-[linear-gradient(180deg,#96A461_0%,#55603A_100%)] px-8 py-14 text-center">
          <div className="text-[40px] leading-none text-[#F7F1E3] font-webgency">{t("coupleNames")}</div>
          <div className="mt-4 text-[16px] tracking-[0.28em] text-[#F7F1E3] font-newfonts font-medium">
            {t("weddingDateShort")}
          </div>
          <p className="mt-8 text-[14px] text-[#F7F1E3] font-newfonts font-thin">
            {t("madeBy")}
            <a
              href="https://invitations.digitivaa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-1 underline-offset-4 hover:text-[#F7F1E3]"
            >
              Digitiva
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

