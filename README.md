# Melt Theory — React (Vite) version

Converted from the original Next.js + TypeScript project to a plain React.js (JSX) app using Vite.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

Useful URL flags: `/?static=1` (no motion) · `/?record=1` (auto-scroll for filming).

## Structure
```
index.html            page shell (title, favicon, scroll-restoration script)
src/main.jsx          entry: theme -> CSS variables, renders <App/>
src/App.jsx           engine (Loader, SmoothScroll, Animations, Cursor...) + site page
src/components/       engine/ · patterns/ · ui/
src/lib/              gsap setup, frames, loader tracker
src/site/             this site: Page.jsx, content.js, site.js (theme), fonts.js, site.css, components/
public/               images/ and frames/ (scroll-video image sequence)
```
