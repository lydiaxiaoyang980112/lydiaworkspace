import type { LearningStatus } from './types';

export type AlevelPage = 'home' | 'resources' | 'map' | 'plan' | 'teaching';
export type KnowledgeMapLocation = {
  page?: AlevelPage;
  routeId?: string;
  componentId?: string;
  topicId?: string;
  status?: LearningStatus | 'all';
};

const validStatuses = new Set(['all', 'not_started', 'learning', 'practising', 'mastered']);
const validPages = new Set<AlevelPage>(['home', 'resources', 'map', 'plan', 'teaching']);

export function readAlevelLocation(search?: string): KnowledgeMapLocation {
  const params = new URLSearchParams(search ?? (typeof window === 'undefined' ? '' : window.location.search));
  const page = params.get('page');
  const status = params.get('status');
  return {
    page: page && validPages.has(page as AlevelPage) ? page as AlevelPage : undefined,
    routeId: params.get('route') ?? undefined,
    componentId: params.get('component') ?? undefined,
    topicId: params.get('topic') ?? undefined,
    status: status && validStatuses.has(status) ? status as KnowledgeMapLocation['status'] : undefined,
  };
}

export function writeAlevelLocation(location: KnowledgeMapLocation, mode: 'push' | 'replace' = 'push') {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);
  params.set('module', 'alevel');
  params.set('page', location.page ?? 'home');
  const values: Array<[string, string | undefined]> = [
    ['route', location.routeId],
    ['component', location.componentId],
    ['topic', location.topicId],
    ['status', location.status],
  ];
  for (const [key, value] of values) {
    if (value && value !== 'all') params.set(key, value);
    else params.delete(key);
  }
  const url = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
  window.history[mode === 'push' ? 'pushState' : 'replaceState']({}, '', url);
}
