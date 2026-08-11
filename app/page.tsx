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
    period: "2026.06",
    title: "传神语联（835737.NQ）投资分析案例",
    role: "个人项目",
    intro:
      "在 AI 技术重塑语言服务商业模式的背景下，项目以新三板挂牌公司传神语联为研究对象，结合公开公告、年报与行业资料，对赛道空间、AI 转型成效、财务质量、估值区间及治理风险进行系统研判，形成投资建议与尽调清单。",
    points: [
      {
        label: "基本研判",
        text: "整合 2016—2026 年 104 份公告、2019—2025 年年报及行业资料，搭建“赛道—公司—估值—风险”研究框架并完成 16 页投资分析报告。",
      },
      {
        label: "财务估值",
        text: "基于公开年报自行测算 AI 业务占比 49.8%、扣非净利润同比增长 403%、经营现金流同比增长 203%等拐点，定位毛利率两年下降 10.6 个百分点、研发资本化率 57%等风险；以个人情景假设完成 PS 2.5x/3.5x/6.0x 三情景估值，对应市值 12/16.8/28.8 亿元。",
      },
      {
        label: "风险尽调",
        text: "梳理 17 次关联交易、12 次对外担保及两次 IPO 撤回，形成 P0—P2 共 12 项尽调清单与“有条件通过”建议。",
      },
    ],
    tags: ["公司研究", "财务分析", "PS 估值", "风险尽调"],
  },
  {
    period: "2026.02 — 2026.05",
    title: "湖北省综合保税区扩能提质研究项目",
    role: "项目成员",
    intro:
      "针对东西湖区对外贸易发展的总体规划，重点就战略定位、发展目标、重点任务及实施路径等关键方向开展深入研究。聚焦当前东西湖区在外向型经济发展过程中面临的具体问题与实际瓶颈，开展针对性研究与突破。",
    points: [
      {
        label: "调研处理",
        text: "参与实地调研，处理与提炼 20 万字以上座谈纪要，建立问题清单与证据索引。",
      },
      {
        label: "机制诊断",
        text: "围绕新港空港综保区开展机制诊断，并撰写调研总结、问题诊断与对策建议章节。",
      },
    ],
    tags: ["政策研究", "实地调研", "报告写作"],
  },
  {
    period: "2025.06 — 2025.09",
    title: "飞机拆解与再制造产业研究项目",
    role: "项目成员",
    intro:
      "境内外飞机拆解资质具有一定稀缺性，湖北一家国企正在与某家具备境外飞机拆解资质的团队接洽，拟在湖北鄂州空港综保区开展相关工作。项目据此围绕产业链、市场空间与竞争格局开展前期研究，为合作研判和项目推进提供参考。",
    points: [
      {
        label: "产业研究",
        text: "系统梳理产业链与市场空间口径，汇总龙头企业与竞争格局要点。",
      },
      {
        label: "报告交付",
        text: "与团队共同完成约 5 万字研究报告。",
      },
    ],
    tags: ["产业链", "市场空间", "竞争格局"],
  },
  {
    period: "2024.06",
    title: "“康”养身心舒，“游”遍风光好——秦皇岛市康养旅游调查",
    role: "全国大学生市场调查与分析大赛 · 国家级三等奖",
    intro:
      "在人口老龄化、亚健康需求增长及康养产业政策支持的背景下，秦皇岛康养旅游快速发展，但消费者研究相对不足。项目聚焦市场现状、用户满意度及潜在客群特征，通过问卷、访谈和数据挖掘识别产业问题。最终回收 917 份有效问卷，提炼 4 类潜在用户、4 项产业痛点及 6 条发展建议，获国家级三等奖。",
    points: [
      {
        label: "调研策划",
        text: "共同设计“问卷+访谈+平台数据”交叉验证方案，覆盖 4 个行政区 18 个社区，投放 1100 份问卷并回收 917 份有效样本，有效回收率 83.56%。",
      },
      {
        label: "模型分析",
        text: "运用 Logistic 回归、Ridit 检验、结构方程模型及 K-means 聚类开展定性/定量研究，结合 Python 爬虫、LDA 和情感分析，识别用户参与意愿、满意度及潜在客群的驱动因素。",
      },
      {
        label: "研报写作",
        text: "提炼 4 类潜在用户及产品单一、资源融合不足等 4 项产业痛点，形成政企协同、人才培养、产品优化等 6 条建议，完成 85 页调查报告并获国家级三等奖。",
      },
    ],
    tags: ["调研策划", "计量分析", "文本分析", "研报写作"],
  },
  {
    period: "2023.12",
    title: "海“钠”百川——环保型高性能钠离子电池",
    role: "“挑战杯”国家级三等奖 · 中国国际大学生创新大赛国家级银奖",
    intro:
      "在锂资源约束、储能需求增长及钠离子电池加速产业化的背景下，团队研发两类钠离子电池正极材料。项目旨在验证产品的市场空间与商业化可行性，完成产业链、竞争格局、商业模式及财务收益分析。最终形成完整商业计划书与 PPT，测算 FNPV 为 221.62 万元、投资回收期 2.58 年、IRR 为 24.75%，获“挑战杯”国家级三等奖、中国国际大学生创新大赛国家级银奖。",
    points: [
      {
        label: "行业研究",
        text: "独立完成计划书非技术章节，运用行业研究方法论梳理钠电产业链、政策、市场容量与竞争格局，开展市场分析和预测，明确中高端钠电市场定位及客户路径。",
      },
      {
        label: "商业设计",
        text: "搭建“产品销售+技术许可+咨询服务+委外加工”价值链商业模式，制定展会推广、车企合作、内容传播及社群营销方案，形成项目商业化路径。",
      },
      {
        label: "财务测算",
        text: "构建 3 年收入、成本、利润及现金流模型，测算 FNPV 221.62 万元、回收期 2.58 年及 IRR 24.75%；完成商业计划书与 PPT，支撑项目获国家级三等奖。",
      },
    ],
    tags: ["行业研究", "商业模式", "财务测算", "商业计划书"],
  },
  {
    period: "本科期间",
    title: "矿产资源租金跨国实证研究",
    role: "研究参与者",
    intro:
      "在数字贸易与绿色技术持续发展的背景下，项目关注 ICT 产品出口、环境技术创新与矿产资源租金之间的关系，基于 OECD 国家样本开展跨国实证研究，旨在识别数字化与绿色创新对资源型收益的影响。研究成果已形成英文论文并获 PLOS ONE 录用。",
    points: [
      {
        label: "实证研究",
        text: "围绕 ICT 产品出口、环境技术创新与矿产资源租金的关系开展跨国实证研究。",
      },
      {
        label: "论文成果",
        text: "英文论文《The impact of ICT goods exports and environmental technology innovation on mineral rents: Evidence from OECD countries》已被 PLOS ONE 录用。",
      },
    ],
    tags: ["实证研究", "OECD 国家", "PLOS ONE"],
  },
];

const campusExperiences = [
  {
    period: "2025.09 — 至今",
    organization: "华中科技大学经济学院党员建设中心",
    role: "办公室成员 / 宣讲团成员",
    bullets: [
      "提出党建学时查询机制改进建议，并依据细则核验各党支部学时统计表，支持数据归集与学时认定。",
      "参与党史知识竞赛等活动的组织支持，并以“十五五”为主题开展宣讲。",
    ],
  },
  {
    period: "2025.09 — 至今",
    organization: "华中科技大学经济学院研究生会",
    role: "权益部成员",
    bullets: [
      "参与“权心为你，益路同行”权益小贴士长期专栏，设计问题收集表并整理学生需求。",
      "参与“对话大师”读书会等校园活动，承担部分环节主持与现场协作。",
    ],
  },
  {
    period: "本科期间",
    organization: "东北大学经济学院",
    role: "班级团支书 / 军训负责人",
    bullets: [
      "负责班团活动组织、信息传达与同学协调；军训期间承担队伍组织与日常沟通。",
      "获优秀团干部、优秀团员标兵及军训先进个人等荣誉。",
    ],
  },
  {
    period: "2024.03 — 本科期间",
    organization: "新青年全球胜任力人才培养计划",
    role: "入选学员",
    bullets: [
      "入选校内限额培养项目，参与全球议题、跨文化沟通与国际胜任力相关学习。",
    ],
  },
];

const competitionAwards = [
  { year: "2024", title: "中国国际大学生创新大赛", result: "国家级银奖 · 核心成员" },
  { year: "2023", title: "第十八届“挑战杯”全国大学生课外学术科技作品竞赛", result: "国家级三等奖 · 核心成员" },
  { year: "2024", title: "全国大学生可再生能源优秀科技作品竞赛", result: "国家级二等奖" },
  { year: "2024", title: "全国大学生市场调查与分析大赛", result: "国家级三等奖 · 核心成员" },
  { year: "2024", title: "全国大学生节能减排社会实践与科技竞赛", result: "国家级三等奖" },
  { year: "2023", title: "“先控杯”河北省大学生节能减排社会实践与科技竞赛", result: "省级一等奖" },
  { year: "2023", title: "ICAN 大学生创新创业大赛", result: "省级二等奖" },
];

const honors = [
  "国家奖学金",
  "硕士学业一等奖学金",
  "校级二等奖学金 3 次、三等奖学金 2 次",
  "校级三好学生 3 次",
  "党建之星、优秀团干部、优秀团员标兵、优秀志愿者",
  "第五期“头雁领航”研究生骨干综合能力培训班学员",
];

const volunteerServices = [
  {
    period: "2025 — 2026",
    title: "学术会议与校园公共服务",
    description:
      "参与健康经济与公共政策会议、第八届张培刚发展经济学青年学者奖颁奖典礼等活动，承担会场组织、嘉宾接待、记录摄影与宣传工作，完成 4 篇学院官网推文。",
    tags: ["会务组织", "嘉宾接待", "内容宣传"],
  },
  {
    period: "2023.01 — 2023.02",
    title: "“一起云支教”专项活动志愿者",
    description:
      "累计服务 40 余天，对接 2 名小学生，围绕时政、科学与经济知识开展线上互动，培养学习兴趣并跟进学习任务。",
    tags: ["线上支教", "沟通陪伴", "知识分享"],
  },
  {
    period: "本科期间",
    title: "商都县普通话助教",
    description:
      "与主讲教师协作，对接并督促 5 名学员完成课程与作业，其中 1 名学员获评优秀学员。",
    tags: ["教学协作", "学员跟进", "普通话推广"],
  },
  {
    period: "2023.06 — 2023.08",
    title: "“翱翔之翼”大学生科技志愿服务项目",
    description:
      "担任调研组志愿者，参与资料搜集、调研分析与团队协作，并随团队完成调研报告。",
    tags: ["科技志愿", "社会调研", "报告撰写"],
  },
  {
    period: "2023 — 2024",
    title: "大型赛事志愿服务",
    description:
      "连续参与秦皇岛马拉松暨全国马拉松锦标赛分站赛，并担任第九届中国大学生程序设计大赛引导组志愿者。",
    tags: ["赛事保障", "现场引导", "团队协作"],
  },
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
          <a href="#campus">校园</a>
          <a href="#competitions">竞赛</a>
          <a href="#honors">荣誉</a>
        </nav>
        <a className="resume-button" href="/resume.pdf" download>
          下载简历
        </a>
      </header>

      <div className="portfolio-grid" id="top">
        <aside className="profile-card" aria-label="个人信息">
          <div className="portrait-frame">
            <img
              src="/profile-2026.jpg"
              alt="董慕含证件照"
              width={234}
              height={348}
              loading="eager"
              fetchPriority="high"
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

          <p className="privacy-note">公开联系方式仅用于招聘与职业交流。</p>
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
                  <p className="project-intro">
                    <strong>项目介绍：</strong>
                    {project.intro}
                  </p>
                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point.label}>
                        <strong>{point.label}：</strong>
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="campus">
            <div className="section-heading">
              <div>
                <p className="eyebrow">CAMPUS LEADERSHIP</p>
                <h2>校园经历</h2>
              </div>
              <span className="section-index">04</span>
            </div>
            <div className="campus-list">
              {campusExperiences.map((item) => (
                <article className="campus-card" key={`${item.organization}-${item.role}`}>
                  <div className="campus-meta">
                    <span>{item.period}</span>
                    <strong>{item.role}</strong>
                  </div>
                  <div>
                    <h3>{item.organization}</h3>
                    <ul>
                      {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="competitions">
            <div className="section-heading">
              <div>
                <p className="eyebrow">COMPETITION AWARDS</p>
                <h2>竞赛奖项</h2>
              </div>
              <span className="section-index">05</span>
            </div>
            <div className="competition-list competition-list-wide">
              {competitionAwards.map((award) => (
                <article className="competition-item" key={award.title}>
                  <span>{award.year}</span>
                  <div>
                    <h3>{award.title}</h3>
                    <p>{award.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="honors">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED HONORS</p>
                <h2>荣誉</h2>
              </div>
              <span className="section-index">06</span>
            </div>
            <div className="honors-card honors-card-wide">
              <ul>
                {honors.map((honor) => <li key={honor}>{honor}</li>)}
              </ul>
            </div>
          </section>

          <section className="panel" id="volunteer">
            <div className="section-heading">
              <div>
                <p className="eyebrow">VOLUNTEER SERVICE</p>
                <h2>志愿服务</h2>
              </div>
              <span className="section-index">07</span>
            </div>
            <div className="service-grid">
              {volunteerServices.map((service) => (
                <article className="service-card" key={service.title}>
                  <p className="service-date">{service.period}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="panel" id="skills">
            <div className="section-heading">
              <div>
                <p className="eyebrow">CAPABILITIES</p>
                <h2>专业技能</h2>
              </div>
              <span className="section-index">08</span>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <span>{skill.label}</span>
                  <strong>{skill.value}</strong>
                </div>
              ))}
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
