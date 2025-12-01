# Aletheia Integrative – React App

A React + TypeScript app bootstrapped with Vite that mirrors the legacy Aletheia template and integrates the Tebra booking modal, AudioEye accessibility widget, and LeadConnector chat.

## Prerequisites
- Node.js 18+ and npm 9+
- Git

## 1) Clone
```bash
git clone <your-repo-url>
cd alethia-integrative
```

## 2) Install dependencies
```bash
npm install
```

## 3) Start dev server
```bash
npm run dev
```
- Vite will print a local dev URL (e.g. http://localhost:5173).
- The Tebra booking modal opens from the Home page “Get in touch” button.

## 4) Build for production
```bash
npm run build
npm run preview   # optional: serve the production build locally
```

## Environment notes (widgets)
The following third‑party widgets load from index.html:
- Tebra WidgetManager (booking modal)
- AudioEye (accessibility)
- LeadConnector chat

These vendors may behave differently on localhost vs. the live domain. For full functionality, deploy under an approved/staging domain that the vendors recognize.

## Troubleshooting
- Modal behind header: we enforce a fixed top offset in index.html.
- Chat/accessibility icons missing: ensure the vendor scripts are not blocked by extensions and your network allows their domains.
- Port conflicts: set Vite port with `--port` (package.json) or use a different free port.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – build production assets
- `npm run preview` – serve the built app locally
