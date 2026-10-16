# Portfolio source

Source for [omargarrios.dev](https://omargarrios.dev/), a static portfolio with a downloadable CV. Built with Astro 7, Tailwind CSS v4, and TypeScript.

## Stack and behavior

The site uses:

- Astro components and static HTML output
- Tailwind CSS for responsive layouts, themes, and print styles
- Lucide icons through `@lucide/astro`
- Client-side scripts for section navigation, theme switching, and a screenshot lightbox
- Light mode by default, with the selected theme saved in `localStorage`
- Vercel Web Analytics

## Run locally

Use Node.js 22.12.0 or newer. Clone the repository and install the locked dependencies:

```bash
git clone https://github.com/Cr0s4k/omargarrios-portfolio.git
cd omargarrios-portfolio
npm ci
```

Start the development server in the background:

```bash
npm run dev -- --background
```

Open [localhost:4321](http://localhost:4321). Manage the server with:

```bash
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Build and preview

Build the static site into `dist/`, then preview it locally:

```bash
npm run build
npm run preview
```

The build copies the committed PDF from `public/` into `dist/`. It does not regenerate the PDF.

## Downloadable CV

This repository only serves [`public/cv.pdf`](public/cv.pdf). CV generation lives in
[`../omar-cv`](../omar-cv/README.md), which reads its content from this repository's
`src/data/portfolio.ts`. After updating content, generate the master CV there and
use its `copy-cv-to-portfolio` skill to replace the PDF here.
Use `personal.cvSummary` for the CV summary and set `hideInCv: true` on an
independent project to omit it from the CV without removing it from the website.

## Edit content and assets

Update [`src/data/portfolio.ts`](src/data/portfolio.ts) to change portfolio content:

- Projects: edit `experiences[].projects` or `independentProjects`.
- Skills: edit the `skills` array.
- Contact links: update `personal.email` and `personal.socials`.
- Profile photo: add an image to `public/` and set `personal.avatarUrl` to its root-relative path.
- Screenshots: add images under `src/assets/projects/` and reference them in the project's `screenshots` array.

When changing domains or page metadata, review `src/pages/index.astro`, `src/layouts/Layout.astro`, and the `site` URL in `astro.config.mjs`. Update `public/sitemap.xml`, `public/robots.txt`, and `public/og-image.png` as needed.

## Deploy

For Vercel, use `npm run build` as the build command and `dist/` as the output directory. The configured site URL is `https://www.omargarrios.dev`.

Update and commit `public/cv.pdf` from the CV repository before deploying résumé changes.


## License

MIT © [Omar Garcia Rios](https://omargarrios.dev/)
