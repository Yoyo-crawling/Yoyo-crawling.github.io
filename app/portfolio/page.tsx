import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "成果展示｜董慕含",
  description: "行业研究、战略咨询与投资分析项目的研究过程、方法和成果证据。",
};

type Evidence = { src: string; alt: string; caption: string };
type PortfolioCase = {
  index: string;
  title: string;
  subtitle: string;
  direction: string;
  problem: string;
  work: string;
  methods: string[];
  evidence?: Evidence[];
  evidenceItems?: string[];
  boundary: string;
};

const cases: PortfolioCase[] = [
  {
    index: "01",
    title: "从全球镍数据到原料配比决策",
    subtitle: "上海有色网｜全球镍研究与 304 不锈钢原料经济性模型",
    direction: "行业研究 · 商业分析",
    problem: "全球镍数据来源分散、口径不一，且 NPI 与纯镍价差扩大后，采购和风险管理需要更可比的判断依据。",
    work: "参与全球镍数据包更新与口径核验，搭建包含元素约束、回收率、工艺成本和敏感性分析的 304 原料经济性模型，并将研究结论转化为原料选择与套保讨论材料。",
    methods: ["多来源数据核验", "供需与贸易流分析", "成本模型", "敏感性分析", "风险管理研究"],
    evidence: [
      { src: "/portfolio/nickel/01-spread-and-hedging.png", alt: "纯镍与 NPI 价差及衍生品需求研究页", caption: "从纯镍与 NPI 价差切入衍生品需求" },
      { src: "/portfolio/nickel/02-long-term-competition.png", alt: "纯镍与 NPI 长期竞争关系研究页", caption: "纯镍与 NPI 长期竞争关系" },
      { src: "/portfolio/nickel/03-trade-flow.png", alt: "一级镍全球贸易流矩阵", caption: "国家—地区—全球贸易流汇总结构" },
      { src: "/portfolio/nickel/04-cost-model.png", alt: "304 不锈钢原料经济性模型仪表盘", caption: "原料经济性模型与约束校验" },
      { src: "/portfolio/nickel/05-sensitivity.png", alt: "原料与工序敏感性综合排名", caption: "原料与工序敏感性分析" },
    ],
    boundary: "页面仅展示局部研究输出，不提供原始数据库、完整预测或机构来源明细。",
  },
  {
    index: "02",
    title: "从平台诊断到双轨落地",
    subtitle: "深圳市创业投资同业公会｜区域电商平台战略规划",
    direction: "战略咨询 · 市场研究",
    problem: "区域平台需要在资源约束、政策层级与业务风险之间明确定位，并判断内贸与外贸的推进优先级。",
    work: "参与现状诊断、竞争与对标分析、目标市场选择及“内贸筑基、外贸破局”双轨路径设计，并根据组织能力和风险偏好调整实施建议。",
    methods: ["访谈与案头研究", "竞争对标", "市场优先级矩阵", "商业模式设计", "实施路径规划"],
    evidence: [
      { src: "/portfolio/consulting/01-method.png", alt: "从调研诊断到路径规划的方法框架", caption: "调研诊断—定位—路径规划" },
      { src: "/portfolio/consulting/02-positioning.png", alt: "双轨轻资产战略定位", caption: "双轨轻资产与价值锚点" },
      { src: "/portfolio/consulting/03-market-priority.png", alt: "GCC 与东盟市场优先级矩阵", caption: "目标市场优先级比较" },
      { src: "/portfolio/consulting/04-business-model.png", alt: "泛家居出海商业模式", caption: "泛家居出海三阶跃迁" },
      { src: "/portfolio/consulting/05-strategy-synergy.png", alt: "战略协同三大抓手", caption: "三大抓手协同逻辑" },
      { src: "/portfolio/consulting/06-deliverables.png", alt: "佛山优选项目交付框架", caption: "五项交付框架" },
    ],
    boundary: "仅使用已脱敏页面；客户原始资料、标识、绝对经营数据和内部资产信息不公开。",
  },
  {
    index: "03",
    title: "综合保税区扩能提质",
    subtitle: "政策评估、实地调研与区域发展建议",
    direction: "战略研究 · 政策研究",
    problem: "绩效评价从规模导向转向质量导向后，园区需要结合港区联动、通关效率、企业服务与差异化考核寻找新的增长路径。",
    work: "参与园区与铁路货场实地调研，整理 20 万字以上座谈纪要，建立问题清单与证据索引，并围绕功能业态与改革机制形成建议。",
    methods: ["政策梳理", "园区对标", "实地调研", "纪要编码", "问题—建议映射"],
    evidenceItems: ["武汉新港空港综合保税区实地调研", "中铁联集主货区现场走访", "调研纪要、问题清单与建议章节"],
    boundary: "现场照片包含人员、车牌或敏感设施，公开页面仅列示调研证据类型，不直接展示原图。",
  },
  {
    index: "04",
    title: "飞机拆解与再制造项目可行性研究",
    subtitle: "市场、产业链与区位适配",
    direction: "行业研究 · 商业尽调",
    problem: "项目需要判断飞机拆解与再制造的市场空间、价值回收环节、资质环保门槛，以及鄂州空港综保区的区位适配性。",
    work: "围绕全球与国内市场、产业链、国内外参与者及进入难点搭建研究框架，与团队共同形成约 5 万字行业研究报告。",
    methods: ["产业链拆解", "市场口径梳理", "竞争格局", "资质与环保门槛", "区位适配"],
    evidenceItems: ["行业研究报告首页与研究框架", "市场—产业链—竞争—区位四层分析", "约 5 万字团队研究报告"],
    boundary: "二手资料中的市场规模、份额和毛利率仍需复核，因此公开页不展示相关绝对数。",
  },
  {
    index: "05",
    title: "从国别环境到产业落点",
    subtitle: "德国、日本与阿根廷市场机会筛选",
    direction: "国际化战略 · 国别研究",
    problem: "国别研究需要把宏观政策、双边贸易与武汉产业基础连接起来，避免停留在国家概况罗列。",
    work: "搭建“市场环境—产业匹配—本地基础—出海建议”框架，比较德国、日本与阿根廷三国机会，并形成产业落点与进入路径建议。",
    methods: ["国别宏观研究", "贸易数据分析", "政策比较", "产业匹配", "进入路径设计"],
    evidenceItems: ["德国：产业出海路径矩阵", "日本：产业匹配分析", "阿根廷：产业出海路径矩阵"],
    boundary: "原图含时点性数据和待复核口径，本页只展示方法与成果类型，待数据复核后再公开图页。",
  },
  {
    index: "06",
    title: "从赛道判断到投资条件",
    subtitle: "传神语联（835737.NQ）投资分析案例",
    direction: "投资研究 · 风险尽调",
    problem: "AI 转型带来收入结构变化，但盈利质量、治理事项与退出路径仍需放在同一框架下审视。",
    work: "整合公告、年报与行业资料，搭建“赛道—公司—估值—风险”研究框架，完成财务拐点识别、PS 情景估值、治理风险梳理与尽调清单。",
    methods: ["公告与年报分析", "财务质量判断", "可比公司", "PS 情景估值", "风险尽调"],
    evidence: [
      { src: "/portfolio/transn/01-overview.png", alt: "传神语联投资概要", caption: "投资概要与核心判断" },
      { src: "/portfolio/transn/02-business-model.png", alt: "传神语联商业模式分析", caption: "商业模式与收入结构" },
      { src: "/portfolio/transn/03-valuation.png", alt: "传神语联估值分析", caption: "可比公司与退出路径" },
      { src: "/portfolio/transn/04-diligence.png", alt: "传神语联尽调分析", caption: "关联交易与对外担保" },
      { src: "/portfolio/transn/05-recommendation.png", alt: "传神语联投资建议", caption: "估值情景与决策条件" },
      { src: "/portfolio/transn/06-checklist.png", alt: "传神语联尽调清单", caption: "优先级与验证路径" },
    ],
    boundary: "分析基于公开资料与个人情景假设，不构成投资建议。",
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-showcase-shell">
      <header className="detail-nav portfolio-nav">
        <Link href="/" className="detail-brand">董慕含 · Portfolio</Link>
        <div><Link href="/#projects">项目经历</Link><a href="/resume.pdf" download>下载简历</a></div>
      </header>

      <article className="portfolio-showcase-page">
        <section className="portfolio-showcase-hero">
          <div><p className="eyebrow">SELECTED WORK · 成果展示</p><h1>从复杂信息中识别问题，<br />把研究转化为决策依据。</h1></div>
          <p>六组案例按“项目问题—我的工作—分析方法—成果证据—能力映射”展开，覆盖行业研究、战略咨询与投资分析。展示内容遵循脱敏、事实复核和参与边界。</p>
        </section>

        <nav className="portfolio-case-index" aria-label="成果案例导航">
          {cases.map((item) => <a href={`#case-${item.index}`} key={item.index}><span>{item.index}</span><strong>{item.title}</strong></a>)}
        </nav>

        <div className="portfolio-case-list">
          {cases.map((item) => (
            <section className="portfolio-case" id={`case-${item.index}`} key={item.index}>
              <div className="portfolio-case-heading">
                <span>{item.index}</span>
                <div><p>{item.direction}</p><h2>{item.title}</h2><h3>{item.subtitle}</h3></div>
              </div>
              <div className="portfolio-case-logic">
                <div><span>项目问题</span><p>{item.problem}</p></div>
                <div><span>我的工作</span><p>{item.work}</p></div>
                <div><span>分析方法</span><div className="portfolio-method-tags">{item.methods.map((method) => <em key={method}>{method}</em>)}</div></div>
              </div>
              {item.evidence ? (
                <div className="portfolio-evidence-grid">
                  {item.evidence.map((evidence) => (
                    <figure key={evidence.src}>
                      <a href={evidence.src} target="_blank" rel="noreferrer" aria-label={`查看大图：${evidence.caption}`}><img src={evidence.src} alt={evidence.alt} loading="lazy" /></a>
                      <figcaption>{evidence.caption}<span>查看大图 ↗</span></figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="portfolio-evidence-list">{item.evidenceItems?.map((evidence, index) => <div key={evidence}><span>{String(index + 1).padStart(2, "0")}</span><p>{evidence}</p></div>)}</div>
              )}
              <p className="portfolio-boundary"><strong>公开边界：</strong>{item.boundary}</p>
            </section>
          ))}
        </div>
        <footer className="detail-footer portfolio-footer"><Link href="/">← 返回个人主页</Link><a href="mailto:d15246378505@163.com">联系我</a></footer>
      </article>
    </main>
  );
}
