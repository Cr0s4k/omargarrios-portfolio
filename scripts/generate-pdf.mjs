import { copyFile } from 'node:fs/promises';
import { preview } from 'astro';
import { chromium } from 'playwright';

// Render the production build, with the same assets and print CSS as the website.
const server = await preview({ server: { host: '127.0.0.1', port: 0, open: false } });
let browser;
try {
  browser = await chromium.launch();
  const page = await browser.newPage({ colorScheme: 'light' });
  const response = await page.goto(`http://127.0.0.1:${server.port}/`, { waitUntil: 'networkidle' });
  if (!response?.ok()) throw new Error('Could not load the built portfolio.');
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(async () => {
    document.documentElement.classList.remove('dark');
    document.querySelectorAll('.project-details').forEach(detail => { detail.open = true; });
    await document.fonts.ready;
    await Promise.all(Array.from(document.images).filter(image => image.checkVisibility()).map(image => image.decode()));
  });
  await page.pdf({
    path: 'dist/omar-garrios-cv.pdf',
    format: 'A4',
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
    outline: true,
  });
  // Keep the PDF in public/ for Git, local development, and deployment builds.
  await copyFile('dist/omar-garrios-cv.pdf', 'public/omar-garrios-cv.pdf');
  console.log('Generated dist/omar-garrios-cv.pdf');
} finally {
  try { await browser?.close(); } finally { await server.stop(); }
}
