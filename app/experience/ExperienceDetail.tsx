import Link from "next/link";
import type { Experience } from "../experience-data";

export function ExperienceDetailPage({ experience }: { experience: Experience }) {
  return (
    <main className="detail-shell">
      <header className="detail-nav">
        <Link href="/" className="detail-brand">董慕含 · Portfolio</Link>
        <div>
          <Link href="/#experience">全部经历</Link>
          <a href="/resume.pdf" download>下载简历</a>
        </div>
      </header>

      <article className="detail-page">
        <section className="detail-hero">
          <p className="eyebrow">INTERNSHIP EXPERIENCE</p>
          <div className="detail-meta">
            <span>{experience.period}</span>
            <span>{experience.role}</span>
          </div>
          <h1>{experience.company}</h1>
          <p className="detail-team">{experience.team}</p>
          <p className="detail-summary">{experience.summary}</p>
          <div className="detail-keywords">
            {experience.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
          </div>
        </section>

        <div className="detail-content-grid">
          <section className="detail-section">
            <p className="eyebrow">WHAT I DID</p>
            <h2>核心工作</h2>
            <ol className="numbered-list">
              {experience.bullets.map((bullet, index) => (
                <li key={bullet}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{bullet}</p>
                </li>
              ))}
            </ol>
          </section>

          <aside className="method-card">
            <p className="eyebrow">WORKING METHODS</p>
            <h2>工作方法</h2>
            <div className="method-list">
              {experience.methods.map((method) => <span key={method}>{method}</span>)}
            </div>
          </aside>
        </div>

        <section className="detail-section outcome-section">
          <p className="eyebrow">OUTCOMES</p>
          <h2>成果与沉淀</h2>
          <div className="outcome-grid">
            {experience.outcomes.map((outcome, index) => (
              <div key={outcome}>
                <strong>0{index + 1}</strong>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {experience.evidence && (
          <section className="detail-section evidence-section">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>代表性成果</h2>
            <div className="evidence-gallery">
              {experience.evidence.map((item) => (
                <figure key={item.src}>
                  <a href={item.src} target="_blank" rel="noreferrer" aria-label={`查看大图：${item.caption}`}>
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </a>
                  <figcaption>{item.caption}<span>查看大图 ↗</span></figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <footer className="detail-footer">
          <Link href="/#experience">← 返回全部实习经历</Link>
          <a href="mailto:d15246378505@163.com">联系我</a>
        </footer>
      </article>
    </main>
  );
}
