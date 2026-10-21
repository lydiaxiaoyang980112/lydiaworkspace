'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import LearningAnalytics from '@/features/alevel/components/LearningAnalytics';
import KnowledgeMap from '@/features/alevel/components/KnowledgeMap';
import { caie9709Catalog, knowledgePoints } from '@/features/alevel/catalog';
import { getOverallProgress } from '@/features/alevel/analytics/service';
import { readAlevelLocation, writeAlevelLocation } from '@/features/alevel/navigation';
import type { AlevelPage } from '@/features/alevel/navigation';
import { LearningProgressProvider, useLearningProgress } from '@/features/alevel/progress/ProgressProvider';

type ModuleId = 'today' | 'learning' | 'alevel' | 'projects';

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
    id: 'alevel', label: 'A-Level Mathematics', icon: 'Σ', eyebrow: 'SYLLABUS KNOWLEDGE HUB',
    title: 'Build knowledge that is ready to teach.',
    description: 'Explore the complete CAIE 9709 syllabus, trace every official learning outcome and build a connected teaching knowledge base.',
    accent: '#5572e7', accentSoft: '#eef1ff', action: 'Open knowledge map',
    aiPrompts: ['Explain this learning outcome', 'Show prerequisite knowledge', 'Draft a teaching objective'],
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

type AlevelPageId = AlevelPage;

const alevelPages: Array<{ id: AlevelPageId; icon: string; name: string; desc: string }> = [
  { id: 'home', icon: '◫', name: '学习分析', desc: 'KPI、总体进度、组件对比' },
  { id: 'resources', icon: '⌑', name: '资料中心', desc: '在线文档链接、搜索、编辑与分类' },
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

type MathResource = {
  id: string;
  name: string;
  url: string;
  category: string;
  updatedAt: string;
};

const defaultResourceCategories = ['Pure Mathematics', 'Statistics', 'Mechanics', '综合资料'];
const starterResources: MathResource[] = [
  { id: 'resource-1', name: 'Pure Mathematics 3 课程笔记', url: 'https://drive.google.com/', category: 'Pure Mathematics', updatedAt: '2026-10-20' },
  { id: 'resource-2', name: 'Integration 公式与例题整理', url: 'https://docs.google.com/', category: 'Pure Mathematics', updatedAt: '2026-10-18' },
  { id: 'resource-3', name: 'Statistics 2 Revision Guide', url: 'https://www.notion.so/', category: 'Statistics', updatedAt: '2026-10-15' },
  { id: 'resource-4', name: 'Mechanics 错题与讲解', url: 'https://onedrive.live.com/', category: 'Mechanics', updatedAt: '2026-10-12' },
];

const emptyResource = { name: '', url: '', category: defaultResourceCategories[0] };

function AlevelResourcePage() {
  const [resources, setResources] = useState<MathResource[]>(starterResources);
  const storageReady = useRef(false);
  const categoryStorageReady = useRef(false);
  const [categories, setCategories] = useState(defaultResourceCategories);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('全部模块');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyResource);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [categoryNameDraft, setCategoryNameDraft] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [categoryError, setCategoryError] = useState('');

  useEffect(() => {
    const stored = window.localStorage.getItem('luca-alevel-resources');
    if (!stored) {
      storageReady.current = true;
      window.localStorage.setItem('luca-alevel-resources', JSON.stringify(starterResources));
      return;
    }
    try {
      const parsed = JSON.parse(stored) as MathResource[];
      queueMicrotask(() => {
        storageReady.current = true;
        if (Array.isArray(parsed)) setResources(parsed);
      });
    } catch {
      storageReady.current = true;
      window.localStorage.removeItem('luca-alevel-resources');
    }
  }, []);

  useEffect(() => {
    if (!storageReady.current) return;
    window.localStorage.setItem('luca-alevel-resources', JSON.stringify(resources));
  }, [resources]);

  useEffect(() => {
    const stored = window.localStorage.getItem('luca-alevel-categories');
    if (!stored) {
      categoryStorageReady.current = true;
      window.localStorage.setItem('luca-alevel-categories', JSON.stringify(defaultResourceCategories));
      return;
    }
    try {
      const parsed = JSON.parse(stored) as string[];
      queueMicrotask(() => {
        categoryStorageReady.current = true;
        if (Array.isArray(parsed) && parsed.length > 0) setCategories(parsed);
      });
    } catch {
      categoryStorageReady.current = true;
      window.localStorage.removeItem('luca-alevel-categories');
    }
  }, []);

  useEffect(() => {
    if (!categoryStorageReady.current) return;
    window.localStorage.setItem('luca-alevel-categories', JSON.stringify(categories));
  }, [categories]);

  const filteredResources = useMemo(() => resources.filter((resource) => {
    const matchesCategory = category === '全部模块' || resource.category === category;
    const term = query.trim().toLowerCase();
    const matchesQuery = !term || resource.name.toLowerCase().includes(term) || resource.url.toLowerCase().includes(term);
    return matchesCategory && matchesQuery;
  }), [resources, query, category]);

  const openCreate = () => {
    setEditingId(null);
    setForm({ name: '', url: '', category: categories[0] ?? defaultResourceCategories[0] });
    setFormError('');
    setIsCategoryManagerOpen(false);
    setIsEditorOpen(true);
  };

  const openEdit = (resource: MathResource) => {
    setEditingId(resource.id);
    setForm({ name: resource.name, url: resource.url, category: resource.category });
    setFormError('');
    setIsCategoryManagerOpen(false);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setEditingId(null);
    setFormError('');
    setIsCategoryManagerOpen(false);
    setEditingCategory(null);
    setCategoryError('');
  };

  const addCategory = () => {
    const nextName = newCategoryName.trim();
    if (!nextName) {
      setCategoryError('请输入分类名称。');
      return;
    }
    if (categories.some((item) => item.toLowerCase() === nextName.toLowerCase())) {
      setCategoryError('这个分类已经存在。');
      return;
    }
    setCategories((current) => [...current, nextName]);
    setForm((current) => ({ ...current, category: nextName }));
    setNewCategoryName('');
    setCategoryError('');
  };

  const startRenameCategory = (currentName: string) => {
    setEditingCategory(currentName);
    setCategoryNameDraft(currentName);
    setCategoryError('');
  };

  const saveCategoryName = () => {
    if (!editingCategory) return;
    const nextName = categoryNameDraft.trim();
    if (!nextName) {
      setCategoryError('分类名称不能为空。');
      return;
    }
    if (categories.some((item) => item !== editingCategory && item.toLowerCase() === nextName.toLowerCase())) {
      setCategoryError('这个分类已经存在。');
      return;
    }
    setCategories((current) => current.map((item) => item === editingCategory ? nextName : item));
    setResources((current) => current.map((resource) => resource.category === editingCategory ? { ...resource, category: nextName } : resource));
    setForm((current) => current.category === editingCategory ? { ...current, category: nextName } : current);
    setCategory((current) => current === editingCategory ? nextName : current);
    setEditingCategory(null);
    setCategoryError('');
  };

  const deleteCategory = (categoryName: string) => {
    if (categories.length === 1) {
      setCategoryError('至少需要保留一个分类。');
      return;
    }
    const usedCount = resources.filter((resource) => resource.category === categoryName).length;
    const fallback = categories.find((item) => item !== categoryName) ?? defaultResourceCategories[0];
    const message = usedCount > 0
      ? `「${categoryName}」下有 ${usedCount} 条资料，删除后会移动到「${fallback}」。是否继续？`
      : `确定删除分类「${categoryName}」吗？`;
    if (!window.confirm(message)) return;
    setCategories((current) => current.filter((item) => item !== categoryName));
    setResources((current) => current.map((resource) => resource.category === categoryName ? { ...resource, category: fallback } : resource));
    setForm((current) => current.category === categoryName ? { ...current, category: fallback } : current);
    setCategory((current) => current === categoryName ? '全部模块' : current);
    if (editingCategory === categoryName) setEditingCategory(null);
    setCategoryError('');
  };

  const saveResource = () => {
    const name = form.name.trim();
    const rawUrl = form.url.trim();
    if (!name || !rawUrl) {
      setFormError('请填写资料名称和 URL。');
      return;
    }
    let normalizedUrl = rawUrl;
    if (!/^https?:\/\//i.test(normalizedUrl)) normalizedUrl = `https://${normalizedUrl}`;
    try {
      new URL(normalizedUrl);
    } catch {
      setFormError('请输入有效的网址。');
      return;
    }
    const nextResource: MathResource = {
      id: editingId ?? `resource-${Date.now()}`,
      name,
      url: normalizedUrl,
      category: form.category,
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setResources((current) => editingId
      ? current.map((resource) => resource.id === editingId ? nextResource : resource)
      : [nextResource, ...current]);
    closeEditor();
  };

  const deleteResource = (resource: MathResource) => {
    if (!window.confirm(`确定删除「${resource.name}」吗？`)) return;
    setResources((current) => current.filter((item) => item.id !== resource.id));
  };

  return (
    <div className="document-library">
      <header className="library-heading">
        <div><span>ONLINE DOCUMENT LIBRARY</span><h3>线上资料库</h3><p>集中管理 A-Level 数学文档链接，随时新增、编辑、分类或打开资料。</p></div>
        <button type="button" className="library-add" onClick={openCreate}><span>＋</span> 新增资料</button>
      </header>

      <section className="library-summary" aria-label="资料库概览">
        <div><span>全部资料</span><strong>{resources.length}</strong></div>
        {categories.slice(0, 3).map((item) => <div key={item}><span>{item}</span><strong>{resources.filter((resource) => resource.category === item).length}</strong></div>)}
      </section>

      <div className="library-toolbar">
        <label className="library-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索资料名称或 URL" aria-label="搜索资料" /></label>
        <label className="library-filter"><span>模块</span><select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="按模块筛选"><option>全部模块</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>

      <div className="resource-table" role="table" aria-label="A-Level 数学资料列表">
        <div className="resource-table-head" role="row"><span>资料名称</span><span>模块分类</span><span>更新日期</span><span>操作</span></div>
        {filteredResources.length > 0 ? filteredResources.map((resource) => (
          <article className="resource-record" role="row" key={resource.id}>
            <a className="resource-identity" href={resource.url} target="_blank" rel="noreferrer">
              <span className="resource-link-icon">↗</span>
              <span><strong>{resource.name}</strong><small>{resource.url.replace(/^https?:\/\//, '')}</small></span>
            </a>
            <span className={`resource-category category-${categories.indexOf(resource.category) % 4 + 1}`}>{resource.category}</span>
            <time dateTime={resource.updatedAt}>{resource.updatedAt.replaceAll('-', '.')}</time>
            <div className="resource-actions"><a href={resource.url} target="_blank" rel="noreferrer" aria-label={`打开${resource.name}`}>打开</a><button type="button" onClick={() => openEdit(resource)} aria-label={`编辑${resource.name}`}>编辑</button><button type="button" className="delete" onClick={() => deleteResource(resource)} aria-label={`删除${resource.name}`}>删除</button></div>
          </article>
        )) : <div className="library-empty"><span>⌕</span><strong>没有找到相关资料</strong><p>调整搜索条件，或新增一条学习资料。</p><button type="button" onClick={openCreate}>新增资料</button></div>}
      </div>

      <footer className="library-storage-note"><span>✓</span><p><strong>自动保存</strong> 资料会保存在当前浏览器中，刷新页面后仍会保留。</p></footer>

      {isEditorOpen && <div className="resource-editor-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeEditor(); }}>
        <section className="resource-editor" role="dialog" aria-modal="true" aria-labelledby="resource-editor-title">
          <div className="resource-editor-head"><div><span>{editingId ? 'EDIT RESOURCE' : 'NEW RESOURCE'}</span><h3 id="resource-editor-title">{editingId ? '编辑资料' : '新增资料'}</h3></div><button type="button" onClick={closeEditor} aria-label="关闭编辑器">×</button></div>
          <div className="resource-form">
            <label><span>资料名称</span><input autoFocus value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="例如：Pure Mathematics 课程笔记" /></label>
            <label><span>资料 URL</span><input type="url" value={form.url} onChange={(event) => setForm({ ...form, url: event.target.value })} placeholder="https://..." /></label>
            <div className="resource-category-field">
              <div className="resource-field-label"><span>模块分类</span><button type="button" onClick={() => { setIsCategoryManagerOpen((current) => !current); setEditingCategory(null); setCategoryError(''); }}>{isCategoryManagerOpen ? '收起管理' : '管理分类'}</button></div>
              <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>{categories.map((item) => <option key={item}>{item}</option>)}</select>
              {isCategoryManagerOpen && <div className="category-manager">
                <div className="category-manager-title"><strong>分类管理</strong><span>新增、重命名或删除</span></div>
                <div className="category-manager-list">
                  {categories.map((item) => <div className="category-manager-row" key={item}>
                    {editingCategory === item ? <>
                      <input value={categoryNameDraft} onChange={(event) => setCategoryNameDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') saveCategoryName(); if (event.key === 'Escape') setEditingCategory(null); }} aria-label={`编辑分类${item}`} />
                      <button type="button" className="category-save" onClick={saveCategoryName}>保存</button>
                      <button type="button" onClick={() => setEditingCategory(null)}>取消</button>
                    </> : <>
                      <span><i aria-hidden="true" />{item}<small>{resources.filter((resource) => resource.category === item).length} 条</small></span>
                      <button type="button" onClick={() => startRenameCategory(item)}>编辑</button>
                      <button type="button" className="category-delete" onClick={() => deleteCategory(item)}>删除</button>
                    </>}
                  </div>)}
                </div>
                <div className="category-create"><input value={newCategoryName} onChange={(event) => setNewCategoryName(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') addCategory(); }} placeholder="输入新分类名称" aria-label="新分类名称" /><button type="button" onClick={addCategory}>＋ 添加分类</button></div>
                {categoryError && <p className="category-error" role="alert">{categoryError}</p>}
              </div>}
            </div>
            {formError && <p className="resource-form-error" role="alert">{formError}</p>}
          </div>
          <div className="resource-editor-footer"><button type="button" onClick={closeEditor}>取消</button><button type="button" className="save" onClick={saveResource}>{editingId ? '保存修改' : '添加资料'}</button></div>
        </section>
      </div>}
    </div>
  );
}

function AlevelHomePage({ onOpenMap }: { onOpenMap: () => void }) {
  return <LearningAnalytics onOpenMap={onOpenMap} />;
}

function AlevelKnowledgeMap() {
  return <KnowledgeMap />;
}

function AlevelPlanPage() {
  return <div className="alevel-subpage"><div className="subpage-heading"><span>STUDY PLAN</span><h3>学习计划</h3><p>把周目标拆成每天能完成的小任务，并提前安排复习节点。</p></div><div className="plan-overview"><article><strong>本周目标</strong><b>12 / 18</b><span><i style={{ width: '67%' }} /></span><small>已完成 12 项任务</small></article><article><strong>下一次复习</strong><b>明天</b><span className="review-topic">Integration · 错题复盘</span><small>预计 30 分钟</small></article></div><div className="week-plan">{['一','二','三','四','五','六','日'].map((day,index)=><button type="button" className={index===1?'today':''} key={day}><span>周{day}</span><strong>{[3,2,3,2,3,1,1][index]} 项</strong><small>{index<5?'学习 + 复习':'轻量回顾'}</small></button>)}</div></div>;
}

function AlevelTeachingPage() {
  return <div className="alevel-subpage"><div className="subpage-heading"><span>TEACHING PREP</span><h3>教学准备</h3><p>把学习成果转化为可讲清楚、可演示、可复盘的教学能力。</p></div><div className="teaching-grid"><article><span>01</span><div><strong>讲义与板书</strong><small>整理 4 份 · 待完善 2 份</small></div><button type="button">查看</button></article><article><span>02</span><div><strong>试讲练习</strong><small>本周目标 2 次 · 已完成 1 次</small></div><button type="button">开始</button></article><article><span>03</span><div><strong>错题讲解库</strong><small>收录 18 题 · 5 题待录入</small></div><button type="button">整理</button></article><article><span>04</span><div><strong>教学能力评估</strong><small>表达、结构、互动与节奏</small></div><button type="button">评估</button></article></div></div>;
}

function AlevelWorkspace({ activePage, onSelect, onBack }: { activePage: AlevelPageId; onSelect: (page: AlevelPageId) => void; onBack: () => void }) {
  const current = alevelPages.find((page) => page.id === activePage) ?? alevelPages[0];
  const { points: progress } = useLearningProgress();
  const overall = getOverallProgress(knowledgePoints, progress, caie9709Catalog);
  const selectPage = (page: AlevelPageId) => {
    writeAlevelLocation({ ...readAlevelLocation(), page });
    onSelect(page);
  };
  return (
    <div className="module-content alevel-workspace">
      <div className="alevel-breadcrumb"><button type="button" onClick={onBack} aria-label="返回学习中心">←</button><span>学习中心</span><i>›</i><strong>A-Level 数学</strong></div>
      <header className="alevel-header"><div className="alevel-title-icon">Σ</div><div><span>A-LEVEL MATHEMATICS</span><h2>A-Level 数学</h2><p>专注学习、资料管理与教学准备的统一空间。</p></div><div className="alevel-overall"><span>MASTERY RATE</span><strong>{overall.masteryRate === null ? 'N/A' : `${Math.round(overall.masteryRate)}%`}</strong></div></header>
      <div className={`alevel-shell ${activePage === 'map' ? 'map-active' : ''}`}>
        <nav className="alevel-subnav glass-panel" aria-label="A-Level 数学二级导航">
          {alevelPages.map((page) => <button type="button" key={page.id} className={page.id === activePage ? 'active' : ''} onClick={() => selectPage(page.id)} aria-current={page.id === activePage ? 'page' : undefined}><span className="alevel-nav-icon">{page.icon}</span><span><strong>{page.name}</strong><small>{page.desc}</small></span><i>›</i></button>)}
        </nav>
        <section className="alevel-page glass-panel" aria-label={current.name}>
          {activePage === 'home' && <AlevelHomePage onOpenMap={() => onSelect('map')} />}
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
  const { points: progress } = useLearningProgress();
  const mathProgress = getOverallProgress(knowledgePoints, progress, caie9709Catalog);

  if (view === 'alevel') return <AlevelWorkspace activePage={mathPage} onSelect={setMathPage} onBack={() => setView('overview')} />;

  return (
    <div className="module-content learning-layout">
      <section className="learning-paths">
        {learningPaths.map((path) => { const displayedProgress = path.code === 'MATH' ? Math.round(mathProgress.masteryRate ?? 0) : path.progress; return <article className="path-card glass-panel" key={path.title} style={{ '--path-accent': path.color } as React.CSSProperties}><div className="path-top"><span>{path.code}</span><b>{displayedProgress}%</b></div><h3>{path.title}</h3><p>{path.current}</p><div className="path-progress"><span style={{ width: `${displayedProgress}%` }} /></div><div className="path-next"><small>下一步</small><strong>{path.next}</strong></div><button type="button" onClick={path.code === 'MATH' ? () => openMath('home') : undefined}>{path.code === 'MATH' ? '进入数学空间' : '继续学习'} <span>→</span></button></article>; })}
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

function WorkspaceApp() {
  const [activeId, setActiveId] = useState<ModuleId>('today');
  const [directMathPage, setDirectMathPage] = useState<AlevelPageId>('home');
  const active = useMemo(() => modules.find((item) => item.id === activeId) ?? modules[0], [activeId]);

  useEffect(() => {
    const restoreLocation = () => {
      const params = new URLSearchParams(window.location.search);
      if (params.get('module') === 'alevel') {
        setActiveId('alevel');
        setDirectMathPage(readAlevelLocation().page ?? 'home');
      }
    };
    restoreLocation();
    window.addEventListener('popstate', restoreLocation);
    return () => window.removeEventListener('popstate', restoreLocation);
  }, []);

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
          {activeId === 'today' && <TodayWorkspace />}
          {activeId === 'learning' && <LearningCenter />}
          {activeId === 'alevel' && <AlevelWorkspace activePage={directMathPage} onSelect={setDirectMathPage} onBack={() => setActiveId('learning')} />}
          {activeId === 'projects' && <ProjectCenter />}
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

export default function Home() {
  return <LearningProgressProvider><WorkspaceApp /></LearningProgressProvider>;
}
