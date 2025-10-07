yarn dev

# Waitlist — Early Access Landing

Lightweight landing page and early-access waitlist built with Next.js, Tailwind CSS and a few small UI components. This repo contains the front-end for an early-access / waitlist landing experience (logo, hero, popup modal and a panoramic carousel).

Small demo: the home page (`/`) shows a logo, call-to-action, a popup to join the waitlist and a panoramic carousel.

---

## Tech stack

- Next.js 15 (app router)
- React 19
- TypeScript
- Tailwind CSS (v4)
- Radix UI (dropdown)
- lucide-react icons

## What you'll find in this repo

- `src/app` — Next.js app entry and pages (`page.tsx`, `layout.tsx`, global styles)
- `src/components` — UI components: `Popup`, `Modal`, `PanoramicView`, and small UI primitives under `ui/`
- `public/Images` — images and media used by the landing page
- `package.json` — scripts & dependencies

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the development server (Turbopack)

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

3. Build for production

```powershell
npm run build
npm start
```

4. Lint

```powershell
npm run lint
```

Notes:

- This project uses the Turbopack-enabled Next dev/build commands as defined in `package.json`.
- Node.js 18+ is recommended for Next.js 15. If you run into build issues, try Node 18 or 20.

## Available npm scripts

- `dev` — start Next.js dev server (uses Turbopack)
- `build` — production build
- `start` — start production server after build
- `lint` — run ESLint

These come from the project's `package.json`.

## Important files and where to edit

- `src/app/page.tsx` — home page markup and composition (logo, CTA, Popup, PanoramicCarousel)
- `src/components/Popup.tsx` — the join/waitlist popup component
- `src/components/PanoramicView.tsx` — carousel component used on the home page
- `src/components/Modal.tsx` — modal helper used by the popup
- `src/components/ui/*` — small UI primitives (button, dark mode toggle, dropdown)
- `src/lib/utils.ts` — utility helpers

## Images & assets

Place images under `public/Images` and reference them from the code (the project already uses `/images/...` paths in `page.tsx`). If you add new images make sure the filenames are correct and case-sensitive paths match when deployed to Linux hosts.

## Development tips

- Tailwind classes are used directly in components. Use the Tailwind config (`tailwind.config.js`) if you need theme or utility changes.
- The dark-mode toggle is implemented in `src/components/ui/darkmode.tsx` and uses `next-themes`.
- If you change TypeScript types, run a local build or restart the dev server to pick up type errors.

## TODOs / Notes

- Typo: the UI uses the label "Watlist" in several places — consider renaming to "Waitlist" throughout.
- Add backend API or serverless function to persist waitlist signups (currently the Popup is a front-end UI — no server integration present in this repo).
- Add tests and CI (GitHub Actions) for lint/build checks.

## Contributing

Contributions are welcome. If you want to make changes:

1. Fork the repo
2. Create a feature branch
3. Run the app and verify locally
4. Open a pull request describing the change

Please include a short description of the change and ensure linting passes.

## License

This project does not include a license file. If you want to publish it, consider adding an `LICENSE` (MIT is a common choice). Ask me and I can add one.

---

If you'd like, I can:

- add a basic `LICENSE` file (MIT)
- add a small serverless API stub (Next.js API route) to accept waitlist signups
- fix the "Watlist" typo across the codebase

Tell me which of the above you'd like done next and I'll implement it.
