import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const detailRoutes = [
  "/experience/shanghai-metals-market",
  "/experience/foshan-platform-consulting",
  "/experience/country-market-entry",
  "/experience/international-audit",
];

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the completed resume homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /href="\/resume\.pdf"/);
  assert.match(html, /src="\/profile\.jpg"/);
  assert.match(html, /校园经历/);
  assert.match(html, /竞赛奖项与荣誉/);
  assert.match(html, /志愿服务/);
  assert.match(html, /中国国际大学生创新大赛/);
  assert.match(html, /一起云支教/);
  for (const route of detailRoutes) {
    assert.match(html, new RegExp(`href="${route}"`));
  }
  assert.doesNotMatch(
    html,
    /resume\.docx|codex-preview|react-loading-skeleton|Building your site/i,
  );
});

test("server-renders every internship detail page", async () => {
  for (const route of detailRoutes) {
    const response = await render(`${route}/`);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /INTERNSHIP EXPERIENCE/, route);
    assert.match(html, /href="\/resume\.pdf"/, route);
    assert.match(html, /href="\/#experience"/, route);
  }
});

test("keeps required public assets and removes starter preview code", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /profile\.jpg/);
  assert.match(page, /resume\.pdf/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /lang="zh-CN"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/profile.jpg", import.meta.url)),
    access(new URL("../public/resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", templateRoot)),
  );
});
