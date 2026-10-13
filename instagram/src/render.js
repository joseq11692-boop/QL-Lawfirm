// Genera las imágenes del kit de Instagram a partir de posts.html.
// Uso: node instagram/src/render.js   (requiere Playwright)
const path = require("path");
const fs = require("fs");
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "playwright");

(async () => {
  const src = path.join(__dirname, "posts.html");
  const out = path.join(__dirname, "..");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 } });
  await page.goto("file://" + src);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);

  const jobs = [];
  for (let i = 1; i <= 10; i++) {
    const id = "post-" + String(i).padStart(2, "0");
    jobs.push([id, "posts/" + id + ".png"]);
  }
  jobs.push(["avatar", "perfil/foto-perfil.png"]);
  for (const c of ["firma", "practica", "fundador", "contacto"]) {
    jobs.push(["cover-" + c, "destacadas/" + c + ".png"]);
  }

  for (const [id, file] of jobs) {
    const target = path.join(out, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await (await page.$("#" + id)).screenshot({ path: target });
    console.log("✓", file);
  }
  await browser.close();
})();
