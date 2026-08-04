import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "董慕含｜个人主页",
  description: "国际商务硕士，关注行业研究、战略咨询与产业分析。",
};

const education = [
  {
    period: "2025.09 — 2027.06",
    degree: "国际商务（专业硕士）",
    school: "华中科技大学",
    badge: "985 / 211",
  },
  {
    period: "2021.09 — 2025.06",
    degree: "国际经济与贸易（本科）",
    school: "东北大学",
    badge: "985 / 211",
  },
];

const projects = [
  {
    period: "2026.02 — 2026.05",
    title: "湖北省综合保税区扩能提质研究项目",
    role: "项目成员",
    description:
      "参与实地调研，处理与提炼 20 万字以上座谈纪要，建立问题清单与证据索引；围绕新港空港综保区开展机制诊断，并撰写调研总结、问题诊断与对策建议章节。",
    tags: ["政策研究", "实地调研", "报告写作"],
  },
  {
    period: "2025.06 — 2025.09",
    title: "飞机拆解与再制造产业研究项目",
    role: "项目成员",
    description:
      "系统梳理产业链与市场空间口径，汇总龙头企业与竞争格局要点，与团队共同完成约 5 万字研究报告。",
    tags: ["产业链", "市场空间", "竞争格局"],
  },
];

const awards = [
  "中国国际大学生创新大赛国家级银奖",
  "“挑战杯”国家级三等奖",
  "全国大学生市场调查与分析大赛国家级三等奖",
  "国家奖学金、硕士学业一等奖学金",
];

const skills = [
  { label: "数据分析", value: "Python、SQL、Stata" },
  { label: "研究工具", value: "Excel 高阶、PowerPoint、AI Agent" },
  { label: "语言", value: "CET-6 536、IELTS 6.5" },
  { label: "专业资格", value: "ACCA 8/11、证券行业专业人员水平评价测试" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="返回页面顶部">
          <span className="brand-dot" />
          <span>董慕含</span>
        </a>
        <nav className="nav-links" aria-label="页面导航">
          <a href="#about">关于我</a>
          <a href="#experience">经历</a>
          <a href="#projects">项目</a>
          <a href="#skills">技能</a>
        </nav>
        <a className="resume-button" href="/resume.pdf" download>
          下载简历
        </a>
      </header>

      <div className="portfolio-grid" id="top">
        <aside className="profile-card" aria-label="个人信息">
          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="董慕含证件照"
              width={234}
              height={348}
            />
          </div>
          <p className="profile-kicker">Industry Research</p>
          <h1>董慕含</h1>
          <p className="profile-title">国际商务硕士 · 行业研究与战略咨询</p>

          <div className="contact-list">
            <a href="mailto:d15246378505@163.com">
              <span>邮箱</span>
              <strong>d15246378505@163.com</strong>
            </a>
            <a href="tel:+8615246378505">
              <span>电话</span>
              <strong>152 4637 8505</strong>
            </a>
          </div>

          <div className="focus-block">
            <span>关注方向</span>
            <div className="focus-tags">
              <em>行业研究</em>
              <em>跨境出海</em>
              <em>产业咨询</em>
              <em>数据分析</em>
            </div>
          </div>

          <p className="privacy-note">
            当前为本地预览版本，公开发布前可选择隐藏电话号码。
          </p>
        </aside>

        <div className="content-column">
          <section className="hero panel" id="about">
            <p className="eyebrow">ABOUT ME · 关于我</p>
            <h2>
              用数据和结构化研究，
              <span>理解产业与商业问题。</span>
            </h2>
            <p className="hero-copy">
              华中科技大学国际商务硕士在读，具备行业研究、战略咨询、审计与数据分析经历。曾围绕镍产业、企业出海、综合保税区与飞机再制造等主题开展研究，能够从数据底座、访谈证据和行业框架出发，将复杂信息转化为可讨论、可交付的结论。
            </p>
            <div className="metric-grid" aria-label="经历数据概览">
              <div><strong>36</strong><span>个行业数据库工作表</span></div>
              <div><strong>10+</strong><span>家企业访谈整理</span></div>
              <div><strong>20万+</strong><span>字调研纪要处理</span></div>
              <div><strong>7</strong><span>份咨询汇报交付</span></div>
            </div>
            <div className="experience-shortcuts" aria-label="实习经历详情入口">
              <div className="shortcut-heading">
                <span>实习经历详情</span>
                <small>点击进入独立页面</small>
              </div>
              <div className="shortcut-grid">
                {experiences.map((item) => (
                  <Link href={`/experience/${item.slug}`} key={item.slug}>
                    <span>{item.role}</span>
                    <strong>{item.company}</strong>
                    <em>查看详情 ↗</em>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="panel" id="education">
            <div className="section-heading">
              <div>
                <p className="eyebrow">EDUCATION</p>
                <h2>教育经历</h2>
              </div>
              <span className="section-index">01</span>
            </div>
            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={item.school}>
                  <div className="timeline-date">{item.period}</div>
                  <div>
                    <div className="title-row">
                      <h3>{item.school}</h3>
                      <span className="badge">{item.badge}</span>
                    </div>
                    <p>{item.degree}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="experience">
            <div className="section-heading">
              <div>
                <p className="eyebrow">EXPERIENCE</p>
                <h2>实习经历</h2>
              </div>
              <span className="section-index">02</span>
            </div>
            <div className="experience-list">
              {experiences.map((item) => (
                <Link
                  className="experience-card experience-link"
                  href={`/experience/${item.slug}`}
                  key={item.slug}
                >
                  <div className="experience-topline">
                    <span>{item.period}</span>
                    <strong>{item.role}</strong>
                  </div>
                  <h3>{item.company}</h3>
                  <p className="team-name">{item.team}</p>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <span className="detail-link">查看完整经历 →</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="panel" id="projects">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED PROJECTS</p>
                <h2>项目经历</h2>
              </div>
              <span className="section-index">03</span>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-number">0{index + 1}</div>
                  <p className="project-date">{project.period} · {project.role}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="skills">
            <div className="section-heading">
              <div>
                <p className="eyebrow">CAPABILITIES</p>
                <h2>技能与荣誉</h2>
              </div>
              <span className="section-index">04</span>
            </div>
            <div className="capability-grid">
              <div className="skill-list">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.label}>
                    <span>{skill.label}</span>
                    <strong>{skill.value}</strong>
                  </div>
                ))}
              </div>
              <div className="award-card">
                <p className="eyebrow">SELECTED HONORS</p>
                <ul>
                  {awards.map((award) => <li key={award}>{award}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <footer>
            <span>© 2026 董慕含</span>
            <a href="#top">回到顶部 ↑</a>
          </footer>
        </div>
      </div>
    </main>
  );
}
