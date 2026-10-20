'use client';

import { useMemo, useState } from 'react';

type ModuleId = 'today' | 'learning' | 'projects';

type WorkspaceModule = {
  id: ModuleId;
  label: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  accentSoft: string;
  action: string;
  aiPrompts: string[];
};

const modules: WorkspaceModule[] = [
  {
    id: 'today', label: '今日工作台', icon: '⌂', eyebrow: 'TODAY WORKSPACE',
    title: '从今天最重要的事开始。',
    description: '任务、灵感、学习与项目入口集中在一个页面，减少切换，把注意力留给真正重要的工作。',
    accent: '#6674f6', accentSoft: '#eef0ff', action: '开始今日计划',
    aiPrompts: ['帮我安排今天的任务顺序', '把这段想法整理成待办', '总结我最近的学习重点'],
  },
  {
    id: 'learning', label: '学习中心', icon: '◫', eyebrow: 'LEARNING CENTER',
    title: '让每一次学习都有清晰路径。',
    description: '围绕 A-Level 数学与 AI Agent 两条主线，统一管理课程资料、阶段进度与下一步行动。',
    accent: '#168a78', accentSoft: '#e8f7f3', action: '继续上次学习',
    aiPrompts: ['解释一道 A-Level 数学题', '为我设计 AI Agent 学习计划', '整理今天的学习笔记'],
  },
  {
    id: 'projects', label: '项目中心', icon: '◇', eyebrow: 'PROJECT CENTER',
    title: '把正在推进的事放在眼前。',
    description: '跨境电商、个人工作台开发等项目的任务、资料与节点统一归拢，随时知道下一步。',
    accent: '#d17b32', accentSoft: '#fff1e5', action: '查看全部项目',
    aiPrompts: ['梳理跨境电商本周重点', '拆解工作台下一阶段任务', '生成项目周报'],
  },
];

const todayTasks = [
  { id: 'task-1', title: '完成本周工作优先级整理', meta: '09:30 · 重点任务', done: true },
  { id: 'task-2', title: '复习 Pure Mathematics 微积分', meta: '14:00 · 45 分钟' },
  { id: 'task-3', title: '整理跨境电商新品素材', meta: '16:30 · 项目任务' },
];

const learningPaths = [
  { title: 'A-Level 数学', code: 'MATH', progress: 62, current: 'Pure Mathematics · Integration', next: '完成 6 道积分练习题', color: '#5572e7' },
  { title: 'AI Agent', code: 'AGENT', progress: 38, current: 'Tool Use · Function Calling', next: '搭建第一个工具调用 Demo', color: '#1c9b80' },
];

type AlevelPageId = 'home' | 'resources' | 'map' | 'plan' | 'teaching';

const alevelPages: Array<{ id: AlevelPageId; icon: string; name: string; desc: string }> = [
  { id: 'home', icon: 'Σ', name: '学习主页', desc: '今日任务、学习进度、继续学习' },
  { id: 'resources', icon: '⌑', name: '资料中心', desc: '本地文件索引、搜索、预览、分类' },
  { id: 'map', icon: '⌘', name: '知识地图', desc: 'Pure、Statistics、Mechanics 章节体系' },
  { id: 'plan', icon: '◷', name: '学习计划', desc: '周计划、每日任务、复习安排' },
  { id: 'teaching', icon: '▤', name: '教学准备', desc: '讲义、试讲、错题、教学能力评估' },
];

const projects = [
  { title: '跨境电商', code: 'ECOMMERCE', status: '进行中', progress: 54, accent: '#d17b32', accentSoft: '#fff1e5', tasks: ['整理新品上架素材', '复盘广告数据', '检查核心商品库存'], resources: ['选品表', '素材库', '运营周报'] },
  { title: '个人工作台开发', code: 'WORKSPACE', status: '设计阶段', progress: 72, accent: '#6674f6', accentSoft: '#eef0ff', tasks: ['确认首版信息架构', '完善移动端布局', '整理下一版功能清单'], resources: ['需求文档', '页面设计', '开发记录'] },
];

function BrandMark() {
  return <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>;
}

function SectionHeading({ kicker, title, action }: { kicker: string; title: string; action?: string }) {
  return <div className="card-heading module-heading"><div><span>{kicker}</span><h3>{title}</h3></div>{action && <button type="button">{action} <span>→</span></button>}</div>;
}

function TodayWorkspace() {
  const [doneIds, setDoneIds] = useState(() => new Set(todayTasks.filter((task) => task.done).map((task) => task.id)));
  const toggleTask = (taskId: string) => setDoneIds((current) => {
    const next = new Set(current);
    if (next.has(taskId)) next.delete(taskId); else next.add(taskId);
    return next;
  });

  return (
    <div className="module-content module-content-today">
      <article className="workspace-card task-module glass-panel">
        <SectionHeading kicker="TODAY TASKS" title="今日任务" action="查看全部" />
        <div className="task-list">
          {todayTasks.map((task) => {
            const checked = doneIds.has(task.id);
            return <button className="task-row task-row-button" type="button" key={task.id} onClick={() => toggleTask(task.id)}><span className={`task-check ${checked ? 'checked' : ''}`}>{checked ? '✓' : ''}</span><span className="task-copy"><strong className={checked ? 'task-done' : ''}>{task.title}</strong><small>{task.meta}</small></span><span className="row-arrow">›</span></button>;
          })}
        </div>
        <div className="task-progress"><span style={{ width: `${Math.round((doneIds.size / todayTasks.length) * 100)}%` }} /></div>
        <small className="progress-caption">已完成 {doneIds.size}/{todayTasks.length}</small>
      </article>

      <article className="workspace-card quick-note glass-panel">
        <SectionHeading kicker="QUICK CAPTURE" title="快速记录" />
        <textarea aria-label="快速记录" placeholder="记下此刻的想法、待办或灵感…" rows={4} />
        <div className="quick-note-footer"><span>⌘ + Enter 保存</span><button type="button" aria-label="保存记录">↑</button></div>
      </article>

      <article className="workspace-card recent-learning glass-panel">
        <SectionHeading kicker="RECENT LEARNING" title="最近学习" action="进入学习中心" />
        <div className="recent-list">
          <div className="recent-row"><span className="recent-icon math">∫</span><div><strong>A-Level 数学</strong><small>Integration · 昨天学习 42 分钟</small></div><b>62%</b></div>
          <div className="recent-row"><span className="recent-icon agent">✦</span><div><strong>AI Agent</strong><small>Function Calling · 3 天前更新</small></div><b>38%</b></div>
        </div>
      </article>

      <article className="workspace-card project-shortcuts glass-panel">
        <SectionHeading kicker="PROJECT SHORTCUTS" title="项目快捷入口" />
        <div className="shortcut-list">
          <button type="button"><span className="shortcut-icon commerce">◈</span><span><strong>跨境电商</strong><small>3 项待办</small></span><i>→</i></button>
          <button type="button"><span className="shortcut-icon workspace">◇</span><span><strong>个人工作台开发</strong><small>本周推进中</small></span><i>→</i></button>
        </div>
      </article>
    </div>
  );
}

function AlevelResourcePage() {
  const [importMode, setImportMode] = useState<'folder' | 'files'>('folder');
  const [autoClassify, setAutoClassify] = useState(true);
  const [dedupe, setDedupe] = useState(true);

  return (
    <div className="alevel-resource-layout">
      <article className="import-card glass-panel">
        <div className="import-title-row">
          <div><span>RESOURCE IMPORT</span><h3>导入学习资料</h3><p>把教材、讲义和练习题整理进 A-Level 数学资料库。</p></div>
          <span className="demo-badge">交互示例</span>
        </div>

        <div className="import-segmented" role="tablist" aria-label="导入方式">
          <button type="button" role="tab" aria-selected={importMode === 'folder'} className={importMode === 'folder' ? 'active' : ''} onClick={() => setImportMode('folder')}>导入文件夹</button>
          <button type="button" role="tab" aria-selected={importMode === 'files'} className={importMode === 'files' ? 'active' : ''} onClick={() => setImportMode('files')}>导入文件</button>
        </div>

        <div className="drop-zone">
          <span className="upload-symbol" aria-hidden="true"><i>{importMode === 'folder' ? '⌑' : '▤'}</i>↑</span>
          <strong>{importMode === 'folder' ? '选择本地数学资料文件夹' : '选择 PDF、PPT、Word 等文件'}</strong>
          <p>{importMode === 'folder' ? '适合一次导入完整课程资料，并保留原有目录结构。' : '支持选择一个或多个学习文件进行导入。'}</p>
          <button type="button">{importMode === 'folder' ? '选择文件夹' : '选择文件'}</button>
          <small>当前为交互设计示例，实际文件选择与读取将在工作台功能开发阶段接入。</small>
        </div>

        <div className="import-options">
          <label><input type="checkbox" checked={autoClassify} onChange={(event) => setAutoClassify(event.target.checked)} /><span className="custom-check">✓</span><span><strong>自动识别章节与知识点</strong><small>根据文件内容关联 Pure Mathematics、Statistics 等学习主题</small></span></label>
          <label><input type="checkbox" checked={dedupe} onChange={(event) => setDedupe(event.target.checked)} /><span className="custom-check">✓</span><span><strong>检查重复文件</strong><small>通过文件信息与内容摘要避免重复导入</small></span></label>
        </div>

        <div className="process-preview">
          <div><span>预期处理流程</span><b>{[autoClassify, dedupe].filter(Boolean).length + 4} 个步骤</b></div>
          <div className="process-steps">
            <span>读取文件</span><i>→</i><span>提取内容</span><i>→</i><span>{autoClassify ? 'AI 分类' : '保持未分类'}</span>{dedupe && <><i>→</i><span>重复检测</span></>}<i>→</i><span>等待确认</span><i>→</i><span>加入资料库</span>
          </div>
        </div>
      </article>

      <aside className="index-strategy glass-panel">
        <span className="strategy-icon">⌘</span>
        <span className="strategy-kicker">LOCAL-FIRST</span>
        <h3>保留原文件<br />建立轻量索引</h3>
        <p>原始教材仍然保存在你的电脑上，工作台只保存文件位置与学习索引，避免产生大量重复文件。</p>
        <div className="strategy-map">
          <div><span>你的电脑</span><strong>原始教材与资料</strong><small>继续由你管理和更新</small></div>
          <i>⇄</i>
          <div><span>个人工作台</span><strong>路径、文本与知识点</strong><small>用于检索与学习关联</small></div>
        </div>
        <div className="browser-note"><span>i</span><p><strong>浏览器权限说明</strong>普通网页无法在未授权时持续读取本地文件夹。首版可以通过文件夹选择或文件上传导入；自动同步可在后续通过本地服务或桌面应用实现。</p></div>
      </aside>
    </div>
  );
}

function AlevelHomePage() {
  return (
    <div className="alevel-dashboard">
      <section className="alevel-stat-grid">
        <div><span>本周学习</span><strong>4.6h</strong><small>目标 6 小时</small></div>
        <div><span>课程进度</span><strong>62%</strong><small>Pure 3 进行中</small></div>
        <div><span>待复习</span><strong>08</strong><small>2 个高频错题</small></div>
      </section>
      <section className="alevel-home-grid">
        <article className="alevel-panel">
          <SectionHeading kicker="TODAY" title="今日任务" action="全部任务" />
          <div className="math-task-list">
            <button type="button"><i>1</i><span><strong>Integration by substitution</strong><small>练习 6 题 · 预计 35 分钟</small></span><b>开始</b></button>
            <button type="button"><i>2</i><span><strong>复盘昨日错题</strong><small>Pure Mathematics · Chapter 7</small></span><b>查看</b></button>
            <button type="button"><i>3</i><span><strong>整理公式卡片</strong><small>Statistics · Probability</small></span><b>继续</b></button>
          </div>
        </article>
        <article className="alevel-panel continue-card">
          <span className="continue-kicker">CONTINUE LEARNING</span>
          <span className="continue-symbol">∫</span>
          <h3>Integration</h3>
          <p>Pure Mathematics 3 · 章节 7.2</p>
          <div><span style={{ width: '68%' }} /></div>
          <button type="button">继续学习 <span>→</span></button>
        </article>
      </section>
    </div>
  );
}

function AlevelKnowledgeMap() {
  const tracks = [
    { name: 'Pure Mathematics', detail: 'Algebra · Calculus · Trigonometry', progress: 66, color: '#5572e7' },
    { name: 'Statistics', detail: 'Probability · Distribution · Hypothesis', progress: 42, color: '#9b6bdb' },
    { name: 'Mechanics', detail: 'Forces · Motion · Momentum', progress: 28, color: '#d17b32' },
  ];
  return <div className="alevel-subpage"><div className="subpage-heading"><span>KNOWLEDGE MAP</span><h3>知识地图</h3><p>按考试体系组织章节，清楚看到已掌握、学习中和待开始的知识点。</p></div><div className="knowledge-tracks">{tracks.map((track) => <article key={track.name} style={{ '--track-color': track.color } as React.CSSProperties}><div><span>◉</span><b>{track.progress}%</b></div><h4>{track.name}</h4><p>{track.detail}</p><div className="track-progress"><span style={{ width: `${track.progress}%` }} /></div><button type="button">展开章节 <span>→</span></button></article>)}</div></div>;
}

function AlevelPlanPage() {
  return <div className="alevel-subpage"><div className="subpage-heading"><span>STUDY PLAN</span><h3>学习计划</h3><p>把周目标拆成每天能完成的小任务，并提前安排复习节点。</p></div><div className="plan-overview"><article><strong>本周目标</strong><b>12 / 18</b><span><i style={{ width: '67%' }} /></span><small>已完成 12 项任务</small></article><article><strong>下一次复习</strong><b>明天</b><span className="review-topic">Integration · 错题复盘</span><small>预计 30 分钟</small></article></div><div className="week-plan">{['一','二','三','四','五','六','日'].map((day,index)=><button type="button" className={index===1?'today':''} key={day}><span>周{day}</span><strong>{[3,2,3,2,3,1,1][index]} 项</strong><small>{index<5?'学习 + 复习':'轻量回顾'}</small></button>)}</div></div>;
}

function AlevelTeachingPage() {
  return <div className="alevel-subpage"><div className="subpage-heading"><span>TEACHING PREP</span><h3>教学准备</h3><p>把学习成果转化为可讲清楚、可演示、可复盘的教学能力。</p></div><div className="teaching-grid"><article><span>01</span><div><strong>讲义与板书</strong><small>整理 4 份 · 待完善 2 份</small></div><button type="button">查看</button></article><article><span>02</span><div><strong>试讲练习</strong><small>本周目标 2 次 · 已完成 1 次</small></div><button type="button">开始</button></article><article><span>03</span><div><strong>错题讲解库</strong><small>收录 18 题 · 5 题待录入</small></div><button type="button">整理</button></article><article><span>04</span><div><strong>教学能力评估</strong><small>表达、结构、互动与节奏</small></div><button type="button">评估</button></article></div></div>;
}

function AlevelWorkspace({ activePage, onSelect, onBack }: { activePage: AlevelPageId; onSelect: (page: AlevelPageId) => void; onBack: () => void }) {
  const current = alevelPages.find((page) => page.id === activePage) ?? alevelPages[0];
  return (
    <div className="module-content alevel-workspace">
      <div className="alevel-breadcrumb"><button type="button" onClick={onBack} aria-label="返回学习中心">←</button><span>学习中心</span><i>›</i><strong>A-Level 数学</strong></div>
      <header className="alevel-header"><div className="alevel-title-icon">Σ</div><div><span>A-LEVEL MATHEMATICS</span><h2>A-Level 数学</h2><p>专注学习、资料管理与教学准备的统一空间。</p></div><div className="alevel-overall"><span>总体进度</span><strong>62%</strong></div></header>
      <div className="alevel-shell">
        <nav className="alevel-subnav glass-panel" aria-label="A-Level 数学二级导航">
          {alevelPages.map((page) => <button type="button" key={page.id} className={page.id === activePage ? 'active' : ''} onClick={() => onSelect(page.id)} aria-current={page.id === activePage ? 'page' : undefined}><span className="alevel-nav-icon">{page.icon}</span><span><strong>{page.name}</strong><small>{page.desc}</small></span><i>›</i></button>)}
        </nav>
        <section className="alevel-page glass-panel" aria-label={current.name}>
          {activePage === 'home' && <AlevelHomePage />}
          {activePage === 'resources' && <AlevelResourcePage />}
          {activePage === 'map' && <AlevelKnowledgeMap />}
          {activePage === 'plan' && <AlevelPlanPage />}
          {activePage === 'teaching' && <AlevelTeachingPage />}
        </section>
      </div>
    </div>
  );
}

function LearningCenter() {
  const [view, setView] = useState<'overview' | 'alevel'>('overview');
  const [mathPage, setMathPage] = useState<AlevelPageId>('home');
  const openMath = (page: AlevelPageId) => { setMathPage(page); setView('alevel'); };

  if (view === 'alevel') return <AlevelWorkspace activePage={mathPage} onSelect={setMathPage} onBack={() => setView('overview')} />;

  return (
    <div className="module-content learning-layout">
      <section className="learning-paths">
        {learningPaths.map((path) => <article className="path-card glass-panel" key={path.title} style={{ '--path-accent': path.color } as React.CSSProperties}><div className="path-top"><span>{path.code}</span><b>{path.progress}%</b></div><h3>{path.title}</h3><p>{path.current}</p><div className="path-progress"><span style={{ width: `${path.progress}%` }} /></div><div className="path-next"><small>下一步</small><strong>{path.next}</strong></div><button type="button" onClick={path.code === 'MATH' ? () => openMath('home') : undefined}>{path.code === 'MATH' ? '进入数学空间' : '继续学习'} <span>→</span></button></article>)}
      </section>

      <article className="workspace-card resource-card glass-panel">
        <SectionHeading kicker="RESOURCE LIBRARY" title="资料管理" action="全部资料" />
        <div className="resource-stats"><div><strong>24</strong><span>课程资料</span></div><div><strong>18</strong><span>学习笔记</span></div><div><strong>07</strong><span>练习与项目</span></div></div>
        <div className="resource-folders"><button type="button" onClick={() => openMath('resources')}><span className="folder-symbol">⌑</span><div><strong>A-Level Mathematics</strong><small>14 个文件 · 导入与管理</small></div><i>›</i></button><button type="button"><span className="folder-symbol agent-folder">⌑</span><div><strong>AI Agent Lab</strong><small>11 个文件 · 昨天更新</small></div><i>›</i></button></div>
      </article>

      <article className="workspace-card study-progress glass-panel">
        <SectionHeading kicker="WEEKLY PROGRESS" title="本周学习进度" />
        <div className="weekly-hours"><strong>5.8</strong><span>小时<br />本周累计</span></div>
        <div className="week-bars" aria-label="本周每日学习时长">{[32, 58, 44, 82, 64, 24, 12].map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>{'一二三四五六日'[index]}</small></div>)}</div>
        <p>比上周多学习了 <strong>1.2 小时</strong>，保持现在的节奏。</p>
      </article>
    </div>
  );
}

function ProjectCenter() {
  return (
    <div className="module-content project-layout">
      <div className="project-summary-row"><div className="summary-chip glass-panel"><span>02</span><small>活跃项目</small></div><div className="summary-chip glass-panel"><span>06</span><small>本周待办</small></div><div className="summary-chip glass-panel"><span>04</span><small>最近资料</small></div></div>
      <section className="project-card-list">
        {projects.map((project) => <article className="project-card glass-panel" key={project.title} style={{ '--project-accent': project.accent, '--project-soft': project.accentSoft } as React.CSSProperties}><div className="project-card-head"><div><span>{project.code}</span><h3>{project.title}</h3></div><span className="project-status">{project.status}</span></div><div className="project-progress-row"><div><span style={{ width: `${project.progress}%` }} /></div><b>{project.progress}%</b></div><div className="project-columns"><div><small>近期任务</small>{project.tasks.map((task, index) => <p key={task}><i>{index + 1}</i>{task}</p>)}</div><div><small>项目资料</small><div className="resource-tags">{project.resources.map((resource) => <button type="button" key={resource}>⌑ {resource}</button>)}</div></div></div><button className="project-open" type="button">进入项目 <span>→</span></button></article>)}
      </section>
    </div>
  );
}

export default function Home() {
  const [activeId, setActiveId] = useState<ModuleId>('today');
  const active = useMemo(() => modules.find((item) => item.id === activeId) ?? modules[0], [activeId]);

  return (
    <main className="workspace-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <div className="mobile-brand glass-panel"><div className="brand-row"><BrandMark /><div><strong>LUCA</strong><span>个人工作台</span></div></div><span className="mobile-date">10月20日 · 周二</span></div>
      <div className="workspace-grid">
        <aside className="sidebar glass-panel" aria-label="工作台导航">
          <div className="brand-row desktop-brand"><BrandMark /><div><strong>LUCA</strong><span>个人工作台</span></div></div>
          <div className="nav-caption">核心空间</div>
          <nav className="workspace-nav">{modules.map((item) => <button key={item.id} type="button" className={`nav-item ${activeId === item.id ? 'active' : ''}`} onClick={() => setActiveId(item.id)} aria-current={activeId === item.id ? 'page' : undefined} style={activeId === item.id ? ({ '--active-color': item.accent, '--active-soft': item.accentSoft } as React.CSSProperties) : undefined}><span className="nav-icon" aria-hidden="true">{item.icon}</span><span>{item.label}</span>{activeId === item.id && <i className="nav-dot" aria-hidden="true" />}</button>)}</nav>
          <div className="sidebar-focus"><span>今日专注</span><strong>3h 20m</strong><div><i /></div><small>本周目标 12 小时</small></div>
          <div className="sidebar-footer"><div className="avatar">L</div><div><strong>Lydia</strong><span>保持自己的节奏</span></div><button type="button" aria-label="更多选项">•••</button></div>
        </aside>

        <section className="main-stage" style={{ '--section-accent': active.accent, '--section-soft': active.accentSoft } as React.CSSProperties}>
          <header className="stage-header"><div><span className="date-line">2026年10月20日 · 星期二</span><h1>{active.label}</h1></div><div className="header-actions"><button className="round-button" type="button" aria-label="搜索">⌕</button><button className="round-button notification" type="button" aria-label="通知">♢</button></div></header>
          <div className="hero-card compact-hero glass-panel" key={active.id}><div className="hero-copy"><span className="eyebrow">{active.eyebrow}</span><h2>{active.title}</h2><p>{active.description}</p><button className="primary-action" type="button">{active.action} <span>→</span></button></div><div className="hero-visual module-visual" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="module-glyph"><span>{active.icon}</span><small>{active.label}</small><div><i /><i /><i /></div></div></div></div>
          {activeId === 'today' && <TodayWorkspace />}{activeId === 'learning' && <LearningCenter />}{activeId === 'projects' && <ProjectCenter />}
        </section>

        <aside className="ai-panel glass-panel" aria-label="AI 助力面板">
          <div className="ai-header"><div className="ai-title"><span className="ai-orb">✦</span><div><strong>AI 助力</strong><span><i /> 随时待命</span></div></div><button type="button" aria-label="AI 面板选项">•••</button></div>
          <div className="ai-context"><span>当前模块</span><strong>{active.label}</strong><p>{active.description}</p></div>
          <div className="ai-conversation"><div className="ai-welcome"><span className="tiny-orb">✦</span><p>你好，Lydia。关于{active.label}，我可以帮你梳理重点、拆解行动或整理资料。</p></div><div className="suggestion-block"><span>试着问我</span>{active.aiPrompts.map((prompt, index) => <button type="button" key={prompt}><i>{index === 0 ? '↗' : index === 1 ? '✣' : '◷'}</i>{prompt}</button>)}</div><div className="ai-insight"><div className="insight-top"><span>今日小建议</span><i>NEW</i></div><p>把下一步写得足够具体，开始行动会比等待完美状态更容易。</p></div></div>
          <div className="ai-composer"><div className="composer-box"><textarea rows={2} placeholder="告诉我你想做什么…" aria-label="向 AI 输入内容" /><div className="composer-actions"><div><button type="button" aria-label="添加附件">＋</button><button type="button" aria-label="语音输入">◉</button></div><button className="send-button" type="button" aria-label="发送">↑</button></div></div><small>AI 可能会出错，请核对重要信息</small></div>
        </aside>
      </div>
    </main>
  );
}
