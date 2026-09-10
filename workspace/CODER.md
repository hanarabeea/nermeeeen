<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-08-20
- Reverted closed-envelope customization in `src/sections/OpeningOverlay/index.tsx` by removing the added `M&N` stamp overlay block and restoring a plain envelope image state.
- Added minimal one-cycle debug traces (`__ANIMA_DBG__`) plus `onPointerUp` on the fixed opening layer to verify tap/click dismissal behavior across devices.
- Envelope visual (including the opening stamp area) and hero landing text/date are directly in `src/sections/OpeningOverlay/index.tsx`.
- Opening overlay in `src/sections/OpeningOverlay/index.tsx` was static; it must unmount the fixed `z-[99999]` layer after interaction or the rest of the page stays blocked.
</coder>