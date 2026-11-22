// Renders index.html to entry.png (1024x1024) with headless Chromium.
// Deterministic: no network, no random values, fixed viewport and fonts.
import { chromium } from "playwright-core";
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const html = path.join(dir, "index.html");
const out = process.argv[2] || path.join(dir, "entry.png");

const candidates = [
  process.env.CHROME_PATH,
  "/home/hatch/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome",
  "/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-linux/headless_shell",
].filter(Boolean);
const executablePath = candidates.find((p) => existsSync(p));
if (!executablePath) {
  console.error("no chromium binary found");
  process.exit(1);
}

const browser = await chromium.launch({
  executablePath,
  args: ["--no-sandbox", "--force-device-scale-factor=1", "--hide-scrollbars"],
});
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto("file://" + html, { waitUntil: "load" });
// Let the grid script finish and fonts settle.
await page.waitForTimeout(600);
const cards = await page.locator(".card").count();
if (cards !== 33) {
  console.error("expected 33 grid cards, found " + cards);
  await browser.close();
  process.exit(1);
}
const overflow = await page.evaluate(() => {
  const el = document.querySelector(".page");
  return { scrollH: el.scrollHeight, clientH: el.clientHeight };
});
if (overflow.scrollH > overflow.clientH + 1) {
  console.error("page overflows: scrollHeight " + overflow.scrollH + " > " + overflow.clientH);
  await browser.close();
  process.exit(1);
}
await page.screenshot({ path: out, type: "png" });
await browser.close();
if (errors.length) {
  console.error("console errors: " + errors.join(" | "));
  process.exit(1);
}
const buf = readFileSync(out);
console.log("wrote " + out + " (" + buf.length + " bytes)");
console.log("sha256 " + createHash("sha256").update(buf).digest("hex"));
