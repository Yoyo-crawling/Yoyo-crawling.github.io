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
  assert.match(html, /src="\/profile-2026\.jpg"/);
  assert.match(html, /href="\/portfolio"/);
  assert.match(html, /校园经历/);
  assert.match(html, /竞赛奖项/);
  assert.match(html, />荣誉</);
  assert.match(html, /志愿服务/);
  assert.match(html, /中国国际大学生创新大赛/);
  assert.match(html, /一起云支教/);
  assert.match(html, /传神语联（835737\.NQ）投资分析案例/);
  assert.match(html, /class="project-points"/);
  assert.match(html, /基本研判(?:<!-- -->)?：/);
  assert.match(html, /财务估值(?:<!-- -->)?：/);
  assert.match(html, /风险尽调(?:<!-- -->)?：/);
  assert.match(html, /秦皇岛市康养旅游调查/);
  assert.match(html, /有效回收率 83\.56%/);
  assert.match(html, /海“钠”百川/);
  assert.match(html, /FNPV 221\.62 万元/);
  assert.match(html, /IRR 24\.75%/);
  assert.match(html, /东西湖区对外贸易发展的总体规划/);
  assert.match(html, /湖北鄂州空港综保区/);
  assert.match(html, /两类钠离子电池正极材料/);
  assert.match(html, /中国国际大学生创新大赛国家级银奖/);
  assert.ok((html.match(/class="project-intro"/g) ?? []).length >= 6);
  assert.match(html, /P0—P2 共 12 项尽调清单/);
  assert.match(html, /基于公开年报自行测算/);
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

test("server-renders the evidence-based portfolio page", async () => {
  const response = await render("/portfolio/");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /成果展示/);
  assert.match(html, /从全球镍数据到原料配比决策/);
  assert.match(html, /从平台诊断到双轨落地/);
  assert.match(html, /综合保税区扩能提质/);
  assert.match(html, /飞机拆解与再制造项目可行性研究/);
  assert.match(html, /从国别环境到产业落点/);
  assert.match(html, /传神语联（835737\.NQ）投资分析案例/);
  assert.match(html, /\/portfolio\/nickel\/04-cost-model\.png/);
  assert.match(html, /\/portfolio\/consulting\/01-method\.png/);
  assert.match(html, /\/portfolio\/transn\/06-checklist\.png/);
  assert.match(html, /现场照片包含人员、车牌或敏感设施/);
  assert.match(html, /原图含时点性数据和待复核口径/);
  assert.doesNotMatch(html, /禅城城建_资产结构分析|需复核\.png/);
});

test("keeps required public assets and removes starter preview code", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /profile-2026\.jpg/);
  assert.match(page, /resume\.pdf/);
  assert.match(layout, /og\.png/);
  assert.match(layout, /lang="zh-CN"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/profile-2026.jpg", import.meta.url)),
    access(new URL("../public/resume.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/portfolio/nickel/04-cost-model.png", import.meta.url)),
    access(new URL("../public/portfolio/consulting/01-method.png", import.meta.url)),
    access(new URL("../public/portfolio/transn/06-checklist.png", import.meta.url)),
  ]);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", templateRoot)),
  );
});
