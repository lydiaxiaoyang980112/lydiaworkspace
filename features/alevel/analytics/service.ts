import type {
  AnalyticsFilters,
  KnowledgePoint,
  LearningStatus,
  ProgressEvent,
  ProgressStore,
  ProgressSummary,
  SyllabusCatalog,
} from '../types';

export type ComponentProgress = ProgressSummary & {
  componentId: string;
  shortTitle: string;
  title: string;
  color: string;
};

export type TopicProgress = ProgressSummary & {
  topicId: string;
  reference: string;
  title: string;
  componentId: string;
};

export type TrendPoint = {
  date: string;
  mastered: number;
  started: number;
  activity: number;
};

export type LearningTrend = {
  historyAvailable: boolean;
  availableFrom: string | null;
  series: TrendPoint[];
};

const statusOf = (progress: ProgressStore, pointId: string): LearningStatus => (
  progress[pointId]?.learningStatus ?? 'not_started'
);

const percentage = (value: number, total: number) => total === 0 ? null : (value / total) * 100;

export function getScopedKnowledgePoints(
  points: KnowledgePoint[],
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): KnowledgePoint[] {
  if (filters.examBoardId && filters.examBoardId !== catalog.examBoard.id) return [];
  if (filters.syllabusVersionId && filters.syllabusVersionId !== catalog.syllabusVersion.id) return [];

  const route = filters.routeId && filters.routeId !== 'all'
    ? catalog.qualificationRoutes.find((item) => item.id === filters.routeId)
    : undefined;
  if (filters.routeId && filters.routeId !== 'all' && !route) return [];
  const routeComponents = route ? new Set(route.componentIds) : null;
  const topicById = new Map(catalog.topics.map((topic) => [topic.id, topic]));
  const unique = new Map<string, KnowledgePoint>();

  for (const point of points) {
    if (unique.has(point.id)) continue;
    const topic = topicById.get(point.topicId);
    if (!topic) continue;
    if (routeComponents && !routeComponents.has(topic.componentId)) continue;
    if (filters.componentId && filters.componentId !== 'all' && topic.componentId !== filters.componentId) continue;
    if (filters.topicId && filters.topicId !== 'all' && topic.id !== filters.topicId) continue;
    unique.set(point.id, point);
  }

  return [...unique.values()];
}

export function aggregateProgress(points: KnowledgePoint[], progress: ProgressStore): ProgressSummary {
  const counts = { mastered: 0, practising: 0, learning: 0, notStarted: 0 };
  const unique = new Map(points.map((point) => [point.id, point]));

  for (const point of unique.values()) {
    const status = statusOf(progress, point.id);
    if (status === 'mastered') counts.mastered += 1;
    else if (status === 'practising') counts.practising += 1;
    else if (status === 'learning') counts.learning += 1;
    else counts.notStarted += 1;
  }

  const total = unique.size;
  const inProgress = counts.learning + counts.practising;
  return {
    total,
    ...counts,
    inProgress,
    masteryRate: percentage(counts.mastered, total),
    startedRate: percentage(inProgress + counts.mastered, total),
  };
}

export function getOverallProgress(
  points: KnowledgePoint[],
  progress: ProgressStore,
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): ProgressSummary {
  return aggregateProgress(getScopedKnowledgePoints(points, catalog, filters), progress);
}

export function getComponentProgress(
  points: KnowledgePoint[],
  progress: ProgressStore,
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): ComponentProgress[] {
  const route = filters.routeId && filters.routeId !== 'all'
    ? catalog.qualificationRoutes.find((item) => item.id === filters.routeId)
    : undefined;
  const componentIds = route?.componentIds ?? catalog.components.map((component) => component.id);
  return catalog.components
    .filter((component) => componentIds.includes(component.id))
    .filter((component) => !filters.componentId || filters.componentId === 'all' || component.id === filters.componentId)
    .map((component) => ({
      componentId: component.id,
      shortTitle: component.shortTitle,
      title: component.title,
      color: component.color,
      ...getOverallProgress(points, progress, catalog, { ...filters, componentId: component.id }),
    }))
    .filter((component) => !filters.topicId || filters.topicId === 'all' || component.total > 0);
}

export function getTopicProgress(
  points: KnowledgePoint[],
  progress: ProgressStore,
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): TopicProgress[] {
  const scoped = getScopedKnowledgePoints(points, catalog, { ...filters, topicId: undefined });
  return catalog.topics
    .filter((topic) => scoped.some((point) => point.topicId === topic.id))
    .map((topic) => ({
      topicId: topic.id,
      reference: topic.reference,
      title: topic.title,
      componentId: topic.componentId,
      ...aggregateProgress(scoped.filter((point) => point.topicId === topic.id), progress),
    }));
}

export function getKnowledgePointsByStatus(
  points: KnowledgePoint[],
  progress: ProgressStore,
  status: LearningStatus,
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): KnowledgePoint[] {
  return getScopedKnowledgePoints(points, catalog, filters)
    .filter((point) => statusOf(progress, point.id) === status);
}

const dateKey = (value: string | Date) => new Date(value).toISOString().slice(0, 10);

export function getLearningTrend(
  points: KnowledgePoint[],
  events: ProgressEvent[],
  catalog: SyllabusCatalog,
  filters: AnalyticsFilters = {},
): LearningTrend {
  const scopedIds = new Set(getScopedKnowledgePoints(points, catalog, filters).map((point) => point.id));
  const scopedEvents = events
    .filter((event) => scopedIds.has(event.knowledgePointId))
    .filter((event) => event.syllabusVersionId === catalog.syllabusVersion.id)
    .sort((a, b) => a.occurredAt.localeCompare(b.occurredAt));
  if (scopedEvents.length === 0) return { historyAvailable: false, availableFrom: null, series: [] };

  const status = new Map<string, LearningStatus>();
  const eventsByDate = new Map<string, ProgressEvent[]>();
  for (const event of scopedEvents) {
    if (!status.has(event.knowledgePointId)) status.set(event.knowledgePointId, event.previousStatus);
    const key = dateKey(event.occurredAt);
    eventsByDate.set(key, [...(eventsByDate.get(key) ?? []), event]);
  }

  const firstDate = new Date(`${dateKey(scopedEvents[0].occurredAt)}T00:00:00.000Z`);
  const lastDate = new Date(`${dateKey(scopedEvents.at(-1)!.occurredAt)}T00:00:00.000Z`);
  const series: TrendPoint[] = [];
  for (let cursor = firstDate; cursor <= lastDate; cursor = new Date(cursor.getTime() + 86_400_000)) {
    const key = dateKey(cursor);
    const dailyEvents = eventsByDate.get(key) ?? [];
    for (const event of dailyEvents) status.set(event.knowledgePointId, event.nextStatus);
    const values = [...status.values()];
    series.push({
      date: key,
      mastered: values.filter((value) => value === 'mastered').length,
      started: values.filter((value) => value !== 'not_started').length,
      activity: new Set(dailyEvents.map((event) => event.knowledgePointId)).size,
    });
  }

  return { historyAvailable: true, availableFrom: scopedEvents[0].occurredAt, series };
}
