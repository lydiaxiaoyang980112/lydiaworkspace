'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { PointProgress, ProgressSnapshot } from '../types';
import {
  PROGRESS_CHANGED_EVENT,
  PROGRESS_KEY,
  createProgressEvent,
  defaultPointProgress,
  emptyProgressSnapshot,
  readProgressSnapshot,
  writeProgressSnapshot,
} from './storage';

type ProgressContextValue = ProgressSnapshot & {
  updatePointProgress: (knowledgePointId: string, patch: Partial<Pick<PointProgress, 'learningStatus' | 'teachingStatus'>>) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function LearningProgressProvider({ children }: PropsWithChildren) {
  const [snapshot, setSnapshot] = useState<ProgressSnapshot>(emptyProgressSnapshot);

  useEffect(() => {
    const sync = () => setSnapshot(readProgressSnapshot());
    const onStorage = (event: StorageEvent) => {
      if (event.key === PROGRESS_KEY) sync();
    };
    sync();
    window.addEventListener(PROGRESS_CHANGED_EVENT, sync);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener(PROGRESS_CHANGED_EVENT, sync);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const updatePointProgress: ProgressContextValue['updatePointProgress'] = (knowledgePointId, patch) => {
    setSnapshot((current) => {
      const previous = current.points[knowledgePointId] ?? defaultPointProgress();
      const occurredAt = new Date().toISOString();
      const nextPoint: PointProgress = {
        ...previous,
        ...patch,
        updatedAt: occurredAt,
      };
      const events = patch.learningStatus && patch.learningStatus !== previous.learningStatus
        ? [...current.events, createProgressEvent(knowledgePointId, previous.learningStatus, patch.learningStatus, occurredAt)]
        : current.events;
      const next: ProgressSnapshot = {
        ...current,
        points: { ...current.points, [knowledgePointId]: nextPoint },
        events,
      };
      writeProgressSnapshot(next);
      return next;
    });
  };

  return <ProgressContext.Provider value={{ ...snapshot, updatePointProgress }}>{children}</ProgressContext.Provider>;
}

export function useLearningProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error('useLearningProgress must be used inside LearningProgressProvider');
  return value;
}
