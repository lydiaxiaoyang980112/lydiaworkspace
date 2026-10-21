'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { caie9709Catalog, knowledgePoints } from '../catalog';
import { getComponentProgress, getOverallProgress } from '../analytics/service';
import { readAlevelLocation, writeAlevelLocation } from '../navigation';
import type { KnowledgeMapLocation } from '../navigation';
import { useLearningProgress } from '../progress/ProgressProvider';
import type { LearningStatus, ProgressSummary } from '../types';

type SortMode = 'official' | 'mastery';

const statusMeta: Array<{ key: LearningStatus; label: string; field: keyof ProgressSummary; color: string }> = [
  { key: 'mastered', label: 'Mastered', field: 'mastered', color: '#168a78' },
  { key: 'practising', label: 'Practising', field: 'practising', color: '#5572e7' },
  { key: 'learning', label: 'Learning', field: 'learning', color: '#d4873f' },
  { key: 'not_started', label: 'Not Started', field: 'notStarted', color: '#d7dae1' },
];

const formatRate = (value: number | null) => value === null ? 'N/A' : `${Math.round(value)}%`;

export default function LearningAnalytics({ onOpenMap }: { onOpenMap: (location: KnowledgeMapLocation) => void }) {
  const initialLocation = readAlevelLocation();
  const [routeId, setRouteId] = useState(initialLocation.routeId ?? 'all');
  const [componentId, setComponentId] = useState(initialLocation.componentId ?? 'all');
  const [topicId, setTopicId] = useState(initialLocation.topicId ?? 'all');
  const [sortMode, setSortMode] = useState<SortMode>('official');
  const { points: progress } = useLearningProgress();

  const activeRoute = caie9709Catalog.qualificationRoutes.find((route) => route.id === routeId);
  const routeComponentIds = activeRoute?.componentIds ?? caie9709Catalog.components.map((component) => component.id);
  const visibleComponents = caie9709Catalog.components.filter((component) => routeComponentIds.includes(component.id));
  const visibleTopics = caie9709Catalog.topics.filter((topic) => (
    routeComponentIds.includes(topic.componentId)
    && (componentId === 'all' || topic.componentId === componentId)
  ));

  const filters = useMemo(() => ({
    examBoardId: caie9709Catalog.examBoard.id,
    syllabusVersionId: caie9709Catalog.syllabusVersion.id,
    routeId,
    componentId,
    topicId,
  }), [routeId, componentId, topicId]);

  const overall = useMemo(
    () => getOverallProgress(knowledgePoints, progress, caie9709Catalog, filters),
    [progress, filters],
  );
  const components = useMemo(() => {
    const rows = getComponentProgress(knowledgePoints, progress, caie9709Catalog, filters);
    return sortMode === 'mastery'
      ? [...rows].sort((a, b) => (b.masteryRate ?? -1) - (a.masteryRate ?? -1))
      : rows;
  }, [progress, filters, sortMode]);

  useEffect(() => {
    writeAlevelLocation({ page: 'home', routeId, componentId, topicId }, 'replace');
  }, [routeId, componentId, topicId]);

  const selectRoute = (nextRouteId: string) => {
    const nextRoute = caie9709Catalog.qualificationRoutes.find((route) => route.id === nextRouteId);
    setRouteId(nextRouteId);
    if (componentId !== 'all' && nextRoute && !nextRoute.componentIds.includes(componentId)) setComponentId('all');
    setTopicId('all');
  };

  const selectComponent = (nextComponentId: string) => {
    setComponentId(nextComponentId);
    setTopicId('all');
  };

  const openStatus = (status: LearningStatus, targetComponentId = componentId) => {
    const location: KnowledgeMapLocation = {
      page: 'map',
      routeId,
      componentId: targetComponentId,
      topicId: topicId === 'all' ? undefined : topicId,
      status,
    };
    writeAlevelLocation(location);
    onOpenMap(location);
  };

  const openComponent = (targetComponentId: string) => {
    const location: KnowledgeMapLocation = { page: 'map', routeId, componentId: targetComponentId, status: 'all' };
    writeAlevelLocation(location);
    onOpenMap(location);
  };

  return (
    <div className="analytics-page">
      <header className="analytics-heading">
        <div><span>LEARNING ANALYTICS</span><h3>Progress built from your knowledge map.</h3><p>Every number is calculated from the 153 current Knowledge Points and your saved learning status.</p></div>
        <div className="analytics-scope"><span>STATISTICS SCOPE</span><strong>Verified outcomes · derived points</strong><small>Atomic decomposition remains in review</small></div>
      </header>

      <section className="analytics-filters" aria-label="Analytics filters">
        <label><span>Exam Board</span><select disabled value="caie"><option value="caie">CAIE</option></select></label>
        <label><span>Syllabus</span><select disabled value="9709"><option value="9709">9709 · 2026–2027</option></select></label>
        <label><span>Qualification Route</span><select value={routeId} onChange={(event) => selectRoute(event.target.value)}><option value="all">All official components</option>{caie9709Catalog.qualificationRoutes.map((route) => <option value={route.id} key={route.id}>{route.name}</option>)}</select></label>
        <label><span>Component</span><select value={componentId} onChange={(event) => selectComponent(event.target.value)}><option value="all">All Components</option>{visibleComponents.map((component) => <option value={component.id} key={component.id}>{component.shortTitle} · {component.title}</option>)}</select></label>
        <label><span>Topic</span><select value={topicId} onChange={(event) => setTopicId(event.target.value)}><option value="all">All Topics</option>{visibleTopics.map((topic) => <option value={topic.id} key={topic.id}>{topic.reference} · {topic.title}</option>)}</select></label>
        <label title="Trend history begins when status events are recorded"><span>Time Range</span><select disabled value="all"><option value="all">All Time</option></select></label>
      </section>

      <section className="analytics-kpis" aria-label="Progress overview">
        <article><span>Total Concepts</span><strong>{overall.total || '—'}</strong><small>{overall.total ? 'Unique Knowledge Points' : 'No concepts in this scope'}</small></article>
        <article className="kpi-mastered"><span>Mastered</span><strong>{overall.total ? overall.mastered : '—'}</strong><small>{formatRate(overall.masteryRate)} mastery rate</small></article>
        <article className="kpi-progress"><span>In Progress</span><strong>{overall.total ? overall.inProgress : '—'}</strong><small>{overall.learning} learning · {overall.practising} practising</small></article>
        <article><span>Not Started</span><strong>{overall.total ? overall.notStarted : '—'}</strong><small>{formatRate(overall.startedRate)} started rate</small></article>
      </section>

      <section className="analytics-card overall-progress-card">
        <div className="analytics-card-heading"><div><span>OVERALL PROGRESS</span><h4>Knowledge status distribution</h4></div><strong>{formatRate(overall.startedRate)} started</strong></div>
        {overall.total ? <>
          <div className="analytics-stacked-bar" aria-label="Overall progress by status">
            {statusMeta.map((status) => {
              const count = overall[status.field] as number;
              const rate = count / overall.total * 100;
              return <button type="button" key={status.key} onClick={() => openStatus(status.key)} style={{ '--segment-color': status.color, width: `${rate}%` } as CSSProperties} title={`${status.label}: ${count} concepts (${Math.round(rate)}%)`} aria-label={`${status.label}: ${count} concepts, ${Math.round(rate)} percent`} />;
            })}
          </div>
          <div className="analytics-legend">{statusMeta.map((status) => <button type="button" key={status.key} onClick={() => openStatus(status.key)}><i style={{ background: status.color }} /><span>{status.label}</span><strong>{overall[status.field] as number}</strong><small>{formatRate(percentageFor(overall[status.field] as number, overall.total))}</small></button>)}</div>
        </> : <AnalyticsEmpty />}
      </section>

      <section className="analytics-card component-progress-card">
        <div className="analytics-card-heading"><div><span>PROGRESS BY COMPONENT</span><h4>P1–P6 comparison</h4></div><label><span>Order</span><select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)}><option value="official">Official order</option><option value="mastery">Mastery rate</option></select></label></div>
        {components.length ? <div className="component-progress-list">
          {components.map((component) => <article key={component.componentId}>
            <button className="component-progress-name" type="button" onClick={() => openComponent(component.componentId)}><i style={{ background: component.color }}>{component.shortTitle}</i><span><strong>{component.title}</strong><small>{component.total} concepts · {formatRate(component.masteryRate)} mastered</small></span><b>→</b></button>
            <div className="component-progress-bar" aria-label={`${component.title} progress`}>
              {statusMeta.map((status) => {
                const count = component[status.field] as number;
                const rate = component.total ? count / component.total * 100 : 0;
                return <button type="button" key={status.key} onClick={() => openStatus(status.key, component.componentId)} style={{ '--segment-color': status.color, width: `${rate}%` } as CSSProperties} title={`${status.label}: ${count} concepts (${Math.round(rate)}%)`} aria-label={`${component.title}, ${status.label}: ${count}`} />;
              })}
            </div>
            <div className="component-progress-metrics"><span><b>{formatRate(component.masteryRate)}</b> mastery</span><span><b>{formatRate(component.startedRate)}</b> started</span><span>{component.mastered} mastered · {component.inProgress} in progress · {component.notStarted} not started</span></div>
          </article>)}
        </div> : <AnalyticsEmpty />}
      </section>
    </div>
  );
}

const percentageFor = (value: number, total: number) => total === 0 ? null : value / total * 100;

function AnalyticsEmpty() {
  return <div className="analytics-empty"><span>○</span><strong>No learning data in this scope</strong><p>Adjust the route, component or topic filter.</p></div>;
}
