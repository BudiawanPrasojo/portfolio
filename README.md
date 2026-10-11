# Budiawan Prasojo — Portfolio

React 18 + Vite 5. Deploys to Vercel with the default Vite settings (build: `npm run build`, output: `dist`).

## Run
    npm install
    npm run dev       # local development
    npm run build     # production build into dist/

## Files you will replace
| What | Path |
|---|---|
| Profile photo (4:5 portrait, about 500×625 px or larger) | `public/profile.jpg` |
| CV (PDF) | `public/cv/Budiawan-Prasojo-CV.pdf` (path is set in `src/data/content.js` → `links.cv`) |
| Project screenshots | `public/projects/*.webp` |
| Social preview image | `public/og-image.png` (1200×630) |

## Content
All text, links, projects, skills, experience and certifications live in `src/data/content.js`.
A URL that is empty or starts with `[` is treated as unavailable and its button is hidden
(for example, Gnosia has no live demo yet: set `demo` to its URL and the button appears).
To add a project, append one object to `projects` and put its images in `public/projects/`.
