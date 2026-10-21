import type {
  LearningStatus,
  PointProgress,
  ProgressEvent,
  ProgressSnapshot,
  ProgressStore,
  TeachingStatus,
} from '../types';

export const LEGACY_PROGRESS_KEY = 'luca-alevel-kp-progress-v1';
export const PROGRESS_KEY = 'luca-alevel-progress-v2';
export const PROGRESS_CHANGED_EVENT = 'luca:alevel-progress-changed';
export const SYLLABUS_VERSION_ID = 'caie-9709-2026-2027';

const learningStatuses = new Set<LearningStatus>(['not_started', 'learning', 'practising', 'mastered']);
const teachingStatuses = new Set<TeachingStatus>(['not_started', 'preparing', 'ready', 'taught']);

export const defaultPointProgress = (): PointProgress => ({
  learningStatus: 'not_started',
  teachingStatus: 'not_started',
  updatedAt: null,
  syllabusVersionId: SYLLABUS_VERSION_ID,
});

export const emptyProgressSnapshot = (): ProgressSnapshot => ({
  version: 2,
  syllabusVersionId: SYLLABUS_VERSION_ID,
  points: {},
  events: [],
});

const isLearningStatus = (value: unknown): value is LearningStatus => (
  typeof value === 'string' && learningStatuses.has(value as LearningStatus)
);

const isTeachingStatus = (value: unknown): value is TeachingStatus => (
  typeof value === 'string' && teachingStatuses.has(value as TeachingStatus)
);

function sanitizePoints(value: unknown): ProgressStore {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return Object.fromEntries(Object.entries(value).flatMap(([id, candidate]) => {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) return [];
    const record = candidate as Partial<PointProgress>;
    const point: PointProgress = {
      learningStatus: isLearningStatus(record.learningStatus) ? record.learningStatus : 'not_started',
      teachingStatus: isTeachingStatus(record.teachingStatus) ? record.teachingStatus : 'not_started',
      updatedAt: typeof record.updatedAt === 'string' ? record.updatedAt : null,
      syllabusVersionId: typeof record.syllabusVersionId === 'string'
        ? record.syllabusVersionId
        : SYLLABUS_VERSION_ID,
    };
    return [[id, point]];
  }));
}

function sanitizeEvents(value: unknown): ProgressEvent[] {
  if (!Array.isArray(value)) return [];
  return value.filter((candidate): candidate is ProgressEvent => {
    if (!candidate || typeof candidate !== 'object') return false;
    const event = candidate as Partial<ProgressEvent>;
    return typeof event.id === 'string'
      && typeof event.knowledgePointId === 'string'
      && typeof event.syllabusVersionId === 'string'
      && isLearningStatus(event.previousStatus)
      && isLearningStatus(event.nextStatus)
      && typeof event.occurredAt === 'string';
  });
}

export function readProgressSnapshot(): ProgressSnapshot {
  if (typeof window === 'undefined') return emptyProgressSnapshot();

  try {
    const current = window.localStorage.getItem(PROGRESS_KEY);
    if (current) {
      const parsed = JSON.parse(current) as Partial<ProgressSnapshot>;
      return {
        version: 2,
        syllabusVersionId: SYLLABUS_VERSION_ID,
        points: sanitizePoints(parsed.points),
        events: sanitizeEvents(parsed.events),
      };
    }

    const legacy = window.localStorage.getItem(LEGACY_PROGRESS_KEY);
    if (!legacy) return emptyProgressSnapshot();
    const migrated: ProgressSnapshot = {
      ...emptyProgressSnapshot(),
      points: sanitizePoints(JSON.parse(legacy)),
    };
    writeProgressSnapshot(migrated);
    return migrated;
  } catch {
    return emptyProgressSnapshot();
  }
}

export function writeProgressSnapshot(snapshot: ProgressSnapshot) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(snapshot));
  queueMicrotask(() => window.dispatchEvent(new CustomEvent(PROGRESS_CHANGED_EVENT)));
}

export function createProgressEvent(
  knowledgePointId: string,
  previousStatus: LearningStatus,
  nextStatus: LearningStatus,
  occurredAt: string,
): ProgressEvent {
  return {
    id: `${knowledgePointId}-${occurredAt}-${Math.random().toString(36).slice(2, 8)}`,
    knowledgePointId,
    syllabusVersionId: SYLLABUS_VERSION_ID,
    previousStatus,
    nextStatus,
    occurredAt,
  };
}
