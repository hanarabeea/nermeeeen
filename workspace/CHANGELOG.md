<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-08-20: Reverted only the opening envelope customization to a normal plain envelope state and kept swan page content unchanged.
- Files: `src/sections/OpeningOverlay/index.tsx`
- Removed added stamp/initials block from the closed overlay and added `onPointerUp` + minimal `__ANIMA_DBG__` logs for one more debug pass.
- 2026-08-20: Updated envelope intro styling and landing hero copy for requested couple details.
- 2026-08-20: Fixed blocked landing experience by making opening overlay dismissible.
</changelog>
