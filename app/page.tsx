'use client';

import { useMemo, useState } from 'react';

type WorkspaceSection = {
  id: string;
  label: string;
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  accentSoft: string;
  metrics: Array<{ value: string; label: string; hint: string }>;
  tasks: Array<{ title: string; meta: string; done?: boolean }>;
  focus: Array<{ label: string; value: number }>;
  note: string;
};

const sections: WorkspaceSection[] = [
  {
    id: 'home', label: '我的主页', icon: '⌂', eyebrow: 'PERSONAL OVERVIEW',
    title: '把生活和工作，收进同一张桌面。',
    description: '今天的重点、近期进展与待处理事项，都在这里一目了然。',
    accent: '#6d7cff', accentSoft: '#eef0ff',
    metrics: [
      { value: '03', label: '今日重点', hint: '保持轻盈' },
      { value: '76%', label: '本周节奏', hint: '状态不错' },
      { value: '05', label: '进行中的事', hint: '稳步推进' },
    ],
    tasks: [
      { title: '整理本周工作优先级', meta: '09:30 · 工作', done: true },
      { title: '完成作品集内容复盘', meta: '14:00 · 求职' },
      { title: '晚间 30 分钟慢跑', meta: '19:30 · 运动' },
    ],
    focus: [
      { label: '工作', value: 82 }, { label: '学习', value: 64 },
      { label: '生活', value: 48 }, { label: '运动', value: 71 },
    ],
    note: '今天适合把最重要的一件事，做得比昨天更完整一点。',
  },
  {
    id: 'today', label: '今日规划', icon: '◷', eyebrow: 'TODAY PLAN',
    title: '让今天的每一步，都有清晰方向。',
    description: '用简单的节奏安排重点任务，同时给临时变化留出空间。',
    accent: '#ff8b5d', accentSoft: '#fff0e9',
    metrics: [
      { value: '06', label: '今日事项', hint: '3 项优先' },
      { value: '02', label: '专注时段', hint: '共 3 小时' },
      { value: '01', label: '待确认', hint: '稍后处理' },
    ],
    tasks: [
      { title: '上午深度工作时段', meta: '09:30—11:30', done: true },
      { title: '梳理下午会议资料', meta: '13:40 · 30 分钟' },
      { title: '处理今日收尾事项', meta: '17:30 · 轻任务' },
    ],
    focus: [
      { label: '上午', value: 88 }, { label: '中午', value: 42 },
      { label: '下午', value: 70 }, { label: '晚间', value: 54 },
    ],
    note: '给每段任务留出十分钟缓冲，计划会更容易真正执行。',
  },
  {
    id: 'assistant', label: '工作助理', icon: '✦', eyebrow: 'WORK ASSISTANT',
    title: '让琐事停在助理这里。',
    description: '集中查看需要整理、撰写与跟进的工作，让注意力回到关键判断。',
    accent: '#7b61d1', accentSoft: '#f1edff',
    metrics: [
      { value: '04', label: '待整理', hint: '2 项较急' },
      { value: '08', label: '本周完成', hint: '效率稳定' },
      { value: '03', label: '快捷模板', hint: '随时调用' },
    ],
    tasks: [
      { title: '汇总项目会议要点', meta: '会议纪要', done: true },
      { title: '拟定客户跟进邮件', meta: '文字撰写' },
      { title: '整理下周项目清单', meta: '任务规划' },
    ],
    focus: [
      { label: '整理', value: 76 }, { label: '撰写', value: 62 },
      { label: '跟进', value: 52 }, { label: '归档', value: 35 },
    ],
    note: '把重复工作交给流程，把真正重要的判断留给自己。',
  },
  {
    id: 'fitness', label: '运动打卡', icon: '◌', eyebrow: 'MOVE & BREATHE',
    title: '身体有节奏，生活才有余裕。',
    description: '记录每一次微小运动，让坚持变成一种自然发生的日常。',
    accent: '#2ea97d', accentSoft: '#e8f8f2',
    metrics: [
      { value: '4 天', label: '连续运动', hint: '继续保持' },
      { value: '116', label: '本周分钟', hint: '目标 150' },
      { value: '72%', label: '目标进度', hint: '状态良好' },
    ],
    tasks: [
      { title: '晨间拉伸', meta: '12 分钟 · 舒缓', done: true },
      { title: '户外慢跑', meta: '30 分钟 · 有氧' },
      { title: '睡前肩颈放松', meta: '8 分钟 · 恢复' },
    ],
    focus: [
      { label: '周一', value: 72 }, { label: '周二', value: 46 },
      { label: '周三', value: 85 }, { label: '今天', value: 63 },
    ],
    note: '不必每次都突破极限，愿意开始本身就是今天的胜利。',
  },
  {
    id: 'pet', label: '宠物日记', icon: '♡', eyebrow: 'PET JOURNAL',
    title: '收藏它陪伴你的每个瞬间。',
    description: '饮食、健康和有趣日常，都可以成为以后翻看的温柔记忆。',
    accent: '#ed719d', accentSoft: '#fff0f5',
    metrics: [
      { value: '12', label: '本月记录', hint: '好多回忆' },
      { value: '2 天', label: '下次护理', hint: '记得准备' },
      { value: '良好', label: '今日状态', hint: '活力满满' },
    ],
    tasks: [
      { title: '早晚粮与饮水记录', meta: '今日 · 已完成', done: true },
      { title: '整理周末散步照片', meta: '相册 · 8 张' },
      { title: '预约月度护理', meta: '本周内' },
    ],
    focus: [
      { label: '饮食', value: 86 }, { label: '玩耍', value: 72 },
      { label: '睡眠', value: 91 }, { label: '护理', value: 58 },
    ],
    note: '它的一生也许不长，但你可以让每一天都很值得。',
  },
  {
    id: 'career', label: '求职进展', icon: '◇', eyebrow: 'CAREER TRACKER',
    title: '把每次靠近机会的过程看得见。',
    description: '统一整理投递、沟通和面试节点，让下一步始终清楚。',
    accent: '#327bd8', accentSoft: '#eaf3ff',
    metrics: [
      { value: '08', label: '进行中', hint: '2 个新回复' },
      { value: '03', label: '面试阶段', hint: '本周 1 场' },
      { value: '18', label: '累计投递', hint: '持续优化' },
    ],
    tasks: [
      { title: '更新目标岗位作品集', meta: '作品集 · 进行中', done: true },
      { title: '准备产品案例复盘', meta: '周四面试' },
      { title: '跟进上周沟通结果', meta: '邮件 · 明天' },
    ],
    focus: [
      { label: '收藏', value: 78 }, { label: '投递', value: 64 },
      { label: '沟通', value: 42 }, { label: '面试', value: 28 },
    ],
    note: '每一次认真准备，都在缩短你与理想机会之间的距离。',
  },
  {
    id: 'commerce', label: '跨境电商', icon: '◈', eyebrow: 'GLOBAL COMMERCE',
    title: '看清生意正在发生的地方。',
    description: '聚合店铺节奏、商品状态与待办事项，快速找到今日重点。',
    accent: '#d69a22', accentSoft: '#fff7e5',
    metrics: [
      { value: '24', label: '在售商品', hint: '状态正常' },
      { value: '06', label: '待处理事项', hint: '2 项优先' },
      { value: '89%', label: '店铺健康度', hint: '稳定运行' },
    ],
    tasks: [
      { title: '检查核心商品库存', meta: '库存 · 已同步', done: true },
      { title: '整理新品上架素材', meta: '内容 · 6 项' },
      { title: '复盘本周广告表现', meta: '数据 · 周五' },
    ],
    focus: [
      { label: '商品', value: 84 }, { label: '内容', value: 68 },
      { label: '流量', value: 58 }, { label: '履约', value: 76 },
    ],
    note: '先照顾好最重要的商品，再让每一个动作服务于增长。',
  },
  {
    id: 'learning', label: '学习文档', icon: '▤', eyebrow: 'LEARNING SPACE',
    title: '让学过的内容，慢慢长成体系。',
    description: '集中沉淀笔记、资料与想法，随时回到知识生长的地方。',
    accent: '#20a1b5', accentSoft: '#e8f8fa',
    metrics: [
      { value: '36', label: '全部文档', hint: '本周 +4' },
      { value: '05', label: '学习主题', hint: '持续更新' },
      { value: '68%', label: '阅读进度', hint: '稳步积累' },
    ],
    tasks: [
      { title: '整理交互设计课程笔记', meta: '设计 · 12 条', done: true },
      { title: '阅读品牌增长案例', meta: '文章 · 18 分钟' },
      { title: '补充本周灵感清单', meta: '随手记 · 4 条' },
    ],
    focus: [
      { label: '设计', value: 82 }, { label: '商业', value: 61 },
      { label: '语言', value: 46 }, { label: '工具', value: 70 },
    ],
    note: '真正属于你的知识，是那些被理解、连接并反复使用的内容。',
  },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span /><span /><span />
    </div>
  );
}

export default function Home() {
  const [activeId, setActiveId] = useState('home');
  const active = useMemo(
    () => sections.find((section) => section.id === activeId) ?? sections[0],
    [activeId],
  );

  return (
    <main className="workspace-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="mobile-brand glass-panel">
        <div className="brand-row">
          <BrandMark />
          <div><strong>LUCA</strong><span>个人工作台</span></div>
        </div>
        <span className="mobile-date">10月20日 · 周二</span>
      </div>

      <div className="workspace-grid">
        <aside className="sidebar glass-panel" aria-label="工作台导航">
          <div className="brand-row desktop-brand">
            <BrandMark />
            <div><strong>LUCA</strong><span>个人工作台</span></div>
          </div>

          <div className="nav-caption">工作空间</div>
          <nav className="workspace-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`nav-item ${activeId === section.id ? 'active' : ''}`}
                onClick={() => setActiveId(section.id)}
                aria-current={activeId === section.id ? 'page' : undefined}
                style={activeId === section.id ? ({
                  '--active-color': section.accent,
                  '--active-soft': section.accentSoft,
                } as React.CSSProperties) : undefined}
              >
                <span className="nav-icon" aria-hidden="true">{section.icon}</span>
                <span>{section.label}</span>
                {activeId === section.id && <i className="nav-dot" aria-hidden="true" />}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="avatar">L</div>
            <div><strong>Lydia</strong><span>保持自己的节奏</span></div>
            <button type="button" aria-label="更多选项">•••</button>
          </div>
        </aside>

        <section className="main-stage" style={{
          '--section-accent': active.accent,
          '--section-soft': active.accentSoft,
        } as React.CSSProperties}>
          <header className="stage-header">
            <div>
              <span className="date-line">2026年10月20日 · 星期二</span>
              <h1>上午好，Lydia <span aria-hidden="true">☀</span></h1>
            </div>
            <div className="header-actions">
              <button className="round-button" type="button" aria-label="搜索">⌕</button>
              <button className="round-button notification" type="button" aria-label="通知">♢</button>
            </div>
          </header>

          <div className="hero-card glass-panel" key={active.id}>
            <div className="hero-copy">
              <span className="eyebrow">{active.eyebrow}</span>
              <h2>{active.title}</h2>
              <p>{active.description}</p>
              <button className="primary-action" type="button">
                查看今日概览 <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="floating-card card-back"><span /><span /></div>
              <div className="floating-card card-front">
                <div className="floating-top"><i>{active.icon}</i><small>今日节奏</small></div>
                <strong>清晰 · 专注</strong>
                <div className="mini-progress"><span /></div>
              </div>
            </div>
          </div>

          <div className="metric-grid" aria-label={`${active.label}数据概览`}>
            {active.metrics.map((metric, index) => (
              <article className="metric-card glass-panel" key={metric.label}>
                <div className={`metric-symbol symbol-${index + 1}`}>{index === 0 ? '↗' : index === 1 ? '≈' : '•'}</div>
                <div><strong>{metric.value}</strong><span>{metric.label}</span></div>
                <small>{metric.hint}</small>
              </article>
            ))}
          </div>

          <div className="detail-grid">
            <article className="tasks-card glass-panel">
              <div className="card-heading">
                <div><span>今日安排</span><h3>接下来要做的事</h3></div>
                <button type="button">全部 <span>→</span></button>
              </div>
              <div className="task-list">
                {active.tasks.map((task) => (
                  <div className="task-row" key={task.title}>
                    <span className={`task-check ${task.done ? 'checked' : ''}`}>{task.done ? '✓' : ''}</span>
                    <div><strong>{task.title}</strong><small>{task.meta}</small></div>
                    <span className="row-arrow">›</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rhythm-card glass-panel">
              <div className="card-heading compact">
                <div><span>本周状态</span><h3>节奏分布</h3></div>
                <span className="status-pill">状态良好</span>
              </div>
              <div className="rhythm-chart">
                {active.focus.map((item) => (
                  <div className="bar-item" key={item.label}>
                    <div className="bar-track"><span style={{ height: `${item.value}%` }} /></div>
                    <small>{item.label}</small>
                  </div>
                ))}
              </div>
              <p className="daily-note">“{active.note}”</p>
            </article>
          </div>
        </section>

        <aside className="ai-panel glass-panel" aria-label="AI 助力面板">
          <div className="ai-header">
            <div className="ai-title">
              <span className="ai-orb">✦</span>
              <div><strong>AI 助力</strong><span><i /> 随时待命</span></div>
            </div>
            <button type="button" aria-label="AI 面板选项">•••</button>
          </div>

          <div className="ai-conversation">
            <div className="ai-welcome">
              <span className="tiny-orb">✦</span>
              <p>上午好，Lydia。今天想从哪里开始？我可以陪你一起梳理。</p>
            </div>
            <div className="suggestion-block">
              <span>试着问我</span>
              <button type="button"><i>↗</i> 帮我规划今天的优先级</button>
              <button type="button"><i>✣</i> 总结本周工作进展</button>
              <button type="button"><i>◷</i> 安排一段专注时间</button>
            </div>
            <div className="ai-insight">
              <div className="insight-top"><span>今日小建议</span><i>NEW</i></div>
              <p>先完成一件最重要的事，再处理零散任务，今天会更有掌控感。</p>
            </div>
          </div>

          <div className="ai-composer">
            <div className="composer-box">
              <textarea rows={2} placeholder="告诉我你想做什么…" aria-label="向 AI 输入内容" />
              <div className="composer-actions">
                <div>
                  <button type="button" aria-label="添加附件">＋</button>
                  <button type="button" aria-label="语音输入">◉</button>
                </div>
                <button className="send-button" type="button" aria-label="发送">↑</button>
              </div>
            </div>
            <small>AI 可能会出错，请核对重要信息</small>
          </div>
        </aside>
      </div>
    </main>
  );
}
