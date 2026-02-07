# AP Appliance Service (React + TypeScript) — GitHub Pages Ready

This project keeps the **same look/styles/images** as the original HTML site, but is now a **React + TypeScript** app you can push to GitHub and deploy.

✅ Uses **Vite + React + TypeScript**  
✅ Uses **HashRouter** so routing works on GitHub Pages  
✅ Includes **GitHub Actions** workflow to auto-deploy on every push to `main`

---

## Run locally
1) Install Node.js (LTS)
2) In this folder:
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output: `dist/`

---

## Deploy to GitHub Pages (recommended)
1) Create a GitHub repo (example: `ap-appliance-service`)
2) Upload/commit this project to the repo
3) In GitHub: **Settings → Pages**
4) Under **Build and deployment**, select **GitHub Actions**
5) Push to `main`

The site will publish to:
`https://YOUR_USERNAME.github.io/YOUR_REPO/`

---

## Business info
Edit:
- `src/data.ts` (name, phone, email, hours)

---

## Notes
- Because this uses HashRouter, URLs look like `/#/services` (this is normal for GitHub Pages).
- If you later want clean URLs (no `#`), deploy to Netlify/Vercel/Cloudflare Pages instead.
