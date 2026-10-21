import { describe, expect, it } from 'vitest';
import { caie9709Catalog, knowledgePoints } from '../catalog';
import type { ProgressEvent, ProgressStore } from '../types';
import {
  aggregateProgress,
  getComponentProgress,
  getLearningTrend,
  getOverallProgress,
  getScopedKnowledgePoints,
} from './service';

const progressFor = (statuses: Array<[string, 'not_started' | 'learning' | 'practising' | 'mastered']>): ProgressStore => (
  Object.fromEntries(statuses.map(([id, learningStatus]) => [id, {
    learningStatus,
    teachingStatus: 'not_started',
    updatedAt: null,
    syllabusVersionId: caie9709Catalog.syllabusVersion.id,
  }]))
);

describe('analytics aggregation', () => {
  it('returns N/A rates for zero knowledge points', () => {
    expect(aggregateProgress([], {})).toEqual({
      total: 0,
      mastered: 0,
      practising: 0,
      learning: 0,
      notStarted: 0,
      inProgress: 0,
      masteryRate: null,
      startedRate: null,
    });
  });

  it('treats unset progress as not started', () => {
    const summary = aggregateProgress(knowledgePoints, {});
    expect(summary.total).toBe(153);
    expect(summary.notStarted).toBe(153);
    expect(summary.masteryRate).toBe(0);
  });

  it('counts an all-mastered scope correctly', () => {
    const points = knowledgePoints.slice(0, 4);
    const progress = progressFor(points.map((point) => [point.id, 'mastered']));
    expect(aggregateProgress(points, progress)).toMatchObject({ total: 4, mastered: 4, masteryRate: 100, startedRate: 100 });
  });

  it('preserves all four learning statuses', () => {
    const points = knowledgePoints.slice(0, 4);
    const progress = progressFor([
      [points[0].id, 'mastered'],
      [points[1].id, 'practising'],
      [points[2].id, 'learning'],
      [points[3].id, 'not_started'],
    ]);
    expect(aggregateProgress(points, progress)).toMatchObject({
      total: 4,
      mastered: 1,
      practising: 1,
      learning: 1,
      notStarted: 1,
      inProgress: 2,
      masteryRate: 25,
      startedRate: 75,
    });
  });

  it('deduplicates repeated knowledge-point references by stable ID', () => {
    const point = knowledgePoints[0];
    expect(aggregateProgress([point, point, point], {}).total).toBe(1);
  });

  it('filters multiple components and official routes correctly', () => {
    const p1 = getOverallProgress(knowledgePoints, {}, caie9709Catalog, { componentId: 'p1' });
    const p2 = getOverallProgress(knowledgePoints, {}, caie9709Catalog, { componentId: 'p2' });
    const route = getScopedKnowledgePoints(knowledgePoints, caie9709Catalog, { routeId: 'as-pure' });
    const rows = getComponentProgress(knowledgePoints, {}, caie9709Catalog, { routeId: 'as-pure' });
    expect(p1.total).toBe(34);
    expect(p2.total).toBe(18);
    expect(route).toHaveLength(52);
    expect(rows.map((row) => row.componentId)).toEqual(['p1', 'p2']);
  });

  it('applies a topic filter consistently to component progress', () => {
    const topic = caie9709Catalog.topics.find((item) => item.reference === '1.1')!;
    const scoped = getOverallProgress(knowledgePoints, {}, caie9709Catalog, { topicId: topic.id });
    const rows = getComponentProgress(knowledgePoints, {}, caie9709Catalog, { topicId: topic.id });
    expect(rows).toHaveLength(1);
    expect(rows[0].componentId).toBe(topic.componentId);
    expect(rows[0].total).toBe(scoped.total);
  });
});

describe('learning trend history', () => {
  it('does not invent history when no events exist', () => {
    expect(getLearningTrend(knowledgePoints, [], caie9709Catalog)).toEqual({
      historyAvailable: false,
      availableFrom: null,
      series: [],
    });
  });

  it('allows cumulative mastery to decrease after a status rollback', () => {
    const point = knowledgePoints[0];
    const events: ProgressEvent[] = [
      {
        id: 'event-1', knowledgePointId: point.id, syllabusVersionId: caie9709Catalog.syllabusVersion.id,
        previousStatus: 'not_started', nextStatus: 'mastered', occurredAt: '2026-10-19T09:00:00.000Z',
      },
      {
        id: 'event-2', knowledgePointId: point.id, syllabusVersionId: caie9709Catalog.syllabusVersion.id,
        previousStatus: 'mastered', nextStatus: 'learning', occurredAt: '2026-10-20T09:00:00.000Z',
      },
    ];
    const trend = getLearningTrend([point], events, caie9709Catalog);
    expect(trend.series.map((item) => item.mastered)).toEqual([1, 0]);
    expect(trend.series.map((item) => item.activity)).toEqual([1, 1]);
  });
});
