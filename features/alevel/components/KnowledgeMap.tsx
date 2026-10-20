'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { caie9709Catalog, knowledgePoints } from '../catalog';
import type { LearningStatus, TeachingStatus } from '../types';

type PointProgress = {
  learningStatus: LearningStatus;
  teachingStatus: TeachingStatus;
};

type ProgressStore = Record<string, PointProgress>;
type DetailTab = 'overview' | 'official' | 'prerequisites' | 'teaching';

const defaultProgress: PointProgress = {
  learningStatus: 'not_started',
  teachingStatus: 'not_started',
};

const learningLabels: Record<LearningStatus, string> = {
  not_started: 'Not Started',
  learning: 'Learning',
  practising: 'Practising',
  mastered: 'Mastered',
};

const teachingLabels: Record<TeachingStatus, string> = {
  not_started: 'Not Started',
  preparing: 'Preparing',
  ready: 'Ready to Teach',
  taught: 'Taught',
};

function readProgress(): ProgressStore {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(window.localStorage.getItem('luca-alevel-kp-progress-v1') ?? '{}') as ProgressStore;
  } catch {
    return {};
  }
}

export default function KnowledgeMap() {
  const [routeId, setRouteId] = useState('all');
  const [componentId, setComponentId] = useState('p1');
  const [topicId, setTopicId] = useState(caie9709Catalog.topics[0].id);
  const [outcomeId, setOutcomeId] = useState(caie9709Catalog.learningOutcomes[0].id);
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'outline' | 'dependency'>('outline');
  const [detailTab, setDetailTab] = useState<DetailTab>('overview');
  const [progress, setProgress] = useState<ProgressStore>(readProgress);

  const activeRoute = caie9709Catalog.qualificationRoutes.find((route) => route.id === routeId);
  const visibleComponentIds = activeRoute?.componentIds ?? caie9709Catalog.components.map((component) => component.id);
  const visibleComponents = caie9709Catalog.components.filter((component) => visibleComponentIds.includes(component.id));
  const topicsForComponent = caie9709Catalog.topics.filter((topic) => topic.componentId === componentId);
  const selectedTopic = caie9709Catalog.topics.find((topic) => topic.id === topicId) ?? topicsForComponent[0];
  const selectedComponent = caie9709Catalog.components.find((component) => component.id === selectedTopic?.componentId) ?? visibleComponents[0];

  const matchingOutcomes = (() => {
    const term = query.trim().toLowerCase();
    const allowedTopicIds = new Set(caie9709Catalog.topics.filter((topic) => visibleComponentIds.includes(topic.componentId)).map((topic) => topic.id));
    if (term) {
      return caie9709Catalog.learningOutcomes.filter((outcome) => {
        const topic = caie9709Catalog.topics.find((item) => item.id === outcome.topicId);
        if (!topic) return false;
        return allowedTopicIds.has(outcome.topicId)
          && (`${topic.reference} ${topic.title} ${outcome.officialText}`).toLowerCase().includes(term);
      });
    }
    return caie9709Catalog.learningOutcomes.filter((outcome) => outcome.topicId === selectedTopic?.id);
  })();

  const selectedOutcome = matchingOutcomes.find((outcome) => outcome.id === outcomeId)
    ?? matchingOutcomes[0]
    ?? caie9709Catalog.learningOutcomes.find((outcome) => outcome.id === outcomeId)
    ?? caie9709Catalog.learningOutcomes[0];
  const selectedPoint = knowledgePoints.find((point) => point.learningOutcomeId === selectedOutcome.id)!;
  const pointProgress = progress[selectedPoint.id] ?? defaultProgress;

  const selectComponent = (nextComponentId: string) => {
    const nextTopic = caie9709Catalog.topics.find((topic) => topic.componentId === nextComponentId)!;
    const nextOutcome = caie9709Catalog.learningOutcomes.find((outcome) => outcome.topicId === nextTopic.id)!;
    setComponentId(nextComponentId);
    setTopicId(nextTopic.id);
    setOutcomeId(nextOutcome.id);
    setQuery('');
    setDetailTab('overview');
  };

  const selectTopic = (nextTopicId: string) => {
    const nextTopic = caie9709Catalog.topics.find((topic) => topic.id === nextTopicId)!;
    const nextOutcome = caie9709Catalog.learningOutcomes.find((outcome) => outcome.topicId === nextTopic.id)!;
    setComponentId(nextTopic.componentId);
    setTopicId(nextTopicId);
    setOutcomeId(nextOutcome.id);
    setQuery('');
    setDetailTab('overview');
  };

  const selectOutcome = (nextOutcomeId: string) => {
    const nextOutcome = caie9709Catalog.learningOutcomes.find((outcome) => outcome.id === nextOutcomeId)!;
    const nextTopic = caie9709Catalog.topics.find((topic) => topic.id === nextOutcome.topicId)!;
    setComponentId(nextTopic.componentId);
    setTopicId(nextTopic.id);
    setOutcomeId(nextOutcomeId);
    setDetailTab('overview');
  };

  const selectRoute = (nextRouteId: string) => {
    setRouteId(nextRouteId);
    if (nextRouteId === 'all') return;
    const route = caie9709Catalog.qualificationRoutes.find((item) => item.id === nextRouteId)!;
    if (!route.componentIds.includes(componentId)) selectComponent(route.componentIds[0]);
  };

  const updateProgress = (patch: Partial<PointProgress>) => {
    setProgress((current) => {
      const next = {
        ...current,
        [selectedPoint.id]: { ...(current[selectedPoint.id] ?? defaultProgress), ...patch },
      };
      window.localStorage.setItem('luca-alevel-kp-progress-v1', JSON.stringify(next));
      return next;
    });
  };

  const prerequisitePoints = selectedPoint.prerequisiteIds
    .map((id) => knowledgePoints.find((point) => point.id === id))
    .filter((point): point is NonNullable<typeof point> => Boolean(point));

  const prerequisiteTopics = Array.from(new Set(prerequisitePoints.map((point) => point.topicId)))
    .map((id) => caie9709Catalog.topics.find((topic) => topic.id === id))
    .filter((topic): topic is NonNullable<typeof topic> => Boolean(topic));

  return (
    <div className="km-page">
      <div className="km-topline">
        <div>
          <span>SYLLABUS KNOWLEDGE FOUNDATION</span>
          <h3>Knowledge Map</h3>
          <p>CAIE 9709 · 2026–2027 · Version 4 · Official outcomes with traceable sources</p>
        </div>
        <a href={caie9709Catalog.sourceDocument.url} target="_blank" rel="noreferrer">Official syllabus ↗</a>
      </div>

      <div className="km-toolbar">
        <label className="km-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search topics or official learning outcomes" aria-label="Search syllabus" /></label>
        <select value={routeId} onChange={(event) => selectRoute(event.target.value)} aria-label="Qualification route">
          <option value="all">All official components</option>
          {caie9709Catalog.qualificationRoutes.map((route) => <option key={route.id} value={route.id}>{route.name}</option>)}
        </select>
        <div className="km-view-toggle" aria-label="Knowledge map view">
          <button type="button" className={view === 'outline' ? 'active' : ''} onClick={() => setView('outline')}>Outline</button>
          <button type="button" className={view === 'dependency' ? 'active' : ''} onClick={() => setView('dependency')}>Dependencies</button>
        </div>
      </div>

      <div className="km-layout">
        <aside className="km-navigator">
          <div className="km-panel-heading"><span>SYLLABUS NAVIGATOR</span><strong>{caie9709Catalog.examBoard.shortName} · {caie9709Catalog.syllabusVersion.syllabusCode}</strong></div>
          <div className="km-components">
            {visibleComponents.map((component) => {
              const count = caie9709Catalog.learningOutcomes.filter((outcome) => caie9709Catalog.topics.some((topic) => topic.id === outcome.topicId && topic.componentId === component.id)).length;
              return <button type="button" key={component.id} className={component.id === componentId ? 'active' : ''} onClick={() => selectComponent(component.id)} style={{ '--component-color': component.color } as CSSProperties}><i>{component.shortTitle}</i><span><strong>{component.title}</strong><small>{count} outcomes</small></span></button>;
            })}
          </div>
          <div className="km-topic-list">
            {topicsForComponent.map((topic) => {
              const count = caie9709Catalog.learningOutcomes.filter((outcome) => outcome.topicId === topic.id).length;
              return <button type="button" key={topic.id} className={topic.id === selectedTopic?.id ? 'active' : ''} onClick={() => selectTopic(topic.id)}><b>{topic.reference}</b><span>{topic.title}</span><small>{count}</small></button>;
            })}
          </div>
        </aside>

        <section className="km-canvas">
          <div className="km-canvas-heading">
            <div><span>{query ? 'SEARCH RESULTS' : selectedComponent?.paper}</span><h4>{query ? `${matchingOutcomes.length} matching outcomes` : `${selectedTopic?.reference} ${selectedTopic?.title}`}</h4></div>
            <span className="km-verified">✓ Official source verified</span>
          </div>

          {view === 'outline' ? (
            <div className="km-outcome-list">
              {matchingOutcomes.map((outcome) => {
                const topic = caie9709Catalog.topics.find((item) => item.id === outcome.topicId)!;
                const status = progress[`${outcome.id}-kp-01`]?.learningStatus ?? 'not_started';
                return <button type="button" key={outcome.id} className={outcome.id === selectedOutcome.id ? 'active' : ''} onClick={() => selectOutcome(outcome.id)}><span className="km-outcome-code">{topic.reference} · LO {String(outcome.ordinal).padStart(2, '0')}</span><strong>{outcome.officialText}</strong><span className={`km-status status-${status}`}>{learningLabels[status]}</span></button>;
              })}
              {matchingOutcomes.length === 0 && <div className="km-empty"><span>⌕</span><strong>No syllabus item found</strong><p>Try a topic name, reference or mathematical term.</p></div>}
            </div>
          ) : (
            <div className="km-dependency-view">
              <div className="km-dependency-label">DERIVED PREREQUISITE GRAPH</div>
              <div className="km-dependency-flow">
                {prerequisiteTopics.length ? prerequisiteTopics.map((topic) => <div key={topic.id}><button type="button" onClick={() => selectTopic(topic.id)}><span>{topic.reference}</span><strong>{topic.title}</strong><small>Prerequisite topic</small></button><i>→</i></div>) : <div><button type="button" className="foundation"><span>FOUNDATION</span><strong>Prior knowledge</strong><small>No mapped topic prerequisite</small></button><i>→</i></div>}
                <div><button type="button" className="current"><span>{selectedTopic?.reference}</span><strong>{selectedTopic?.title}</strong><small>Current topic</small></button></div>
              </div>
              <p>Dependency edges are derived teaching guidance, not official Cambridge syllabus statements. They remain marked as draft until teacher review.</p>
            </div>
          )}
        </section>

        <aside className="km-detail">
          <div className="km-detail-head"><span>KNOWLEDGE DETAIL</span><strong>{selectedTopic?.reference} · KP {String(selectedOutcome.ordinal).padStart(2, '0')}</strong><p>{selectedPoint.title}</p><div><span className="official-badge">Official parent</span><span className="draft-badge">Derived draft</span></div></div>
          <div className="km-detail-tabs" role="tablist">
            {(['overview', 'official', 'prerequisites', 'teaching'] as DetailTab[]).map((tab) => <button type="button" role="tab" aria-selected={detailTab === tab} className={detailTab === tab ? 'active' : ''} onClick={() => setDetailTab(tab)} key={tab}>{tab === 'overview' ? 'Overview' : tab === 'official' ? 'Official' : tab === 'prerequisites' ? 'Prerequisites' : 'Teaching'}</button>)}
          </div>
          <div className="km-detail-body">
            {detailTab === 'overview' && <div className="km-overview">
              <p>This knowledge point is derived from one verified Cambridge learning outcome and uses a stable syllabus-linked ID.</p>
              <label><span>Learning status</span><select value={pointProgress.learningStatus} onChange={(event) => updateProgress({ learningStatus: event.target.value as LearningStatus })}>{Object.entries(learningLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
              <label><span>Teaching status</span><select value={pointProgress.teachingStatus} onChange={(event) => updateProgress({ teachingStatus: event.target.value as TeachingStatus })}>{Object.entries(teachingLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
              <div className="km-id-block"><span>Stable knowledge point ID</span><code>{selectedPoint.id}</code></div>
            </div>}
            {detailTab === 'official' && <div className="km-official"><span>OFFICIAL LEARNING OUTCOME</span><blockquote>{selectedOutcome.officialText}</blockquote><dl><div><dt>Source</dt><dd>CAIE 9709 · 2026–2027 · Version 4</dd></div><div><dt>Page</dt><dd>{selectedOutcome.sourcePage}</dd></div><div><dt>Status</dt><dd>Verified transcription</dd></div></dl><a href={`${caie9709Catalog.sourceDocument.url}#page=${selectedOutcome.sourcePage}`} target="_blank" rel="noreferrer">Open source page ↗</a></div>}
            {detailTab === 'prerequisites' && <div className="km-prerequisites"><p>These relationships are teaching-oriented derived data and can cross official topic boundaries.</p>{prerequisiteTopics.length ? prerequisiteTopics.map((topic) => <button type="button" key={topic.id} onClick={() => selectTopic(topic.id)}><span>{topic.reference}</span><strong>{topic.title}</strong><i>→</i></button>) : <div className="km-foundation-note">No mapped syllabus prerequisite. Use the official prior-knowledge statement on page 18.</div>}</div>}
            {detailTab === 'teaching' && <div className="km-teaching"><span>ENGLISH TEACHER PREPARATION</span><h5>Preparation space reserved</h5><p>Teaching objectives, explanations, worked examples, misconceptions and lesson materials will attach to this stable knowledge point without changing the official syllabus record.</p><div><strong>Suggested first objective</strong><p>Students will be able to {selectedOutcome.officialText.replace(/\.$/, '')}.</p></div><button type="button" disabled>Teaching Studio · Phase 4</button></div>}
          </div>
        </aside>
      </div>
    </div>
  );
}
