import { caie9709Catalog } from './data/caie9709';
import type { KnowledgePoint } from './types';

const topicPrerequisiteReferences: Record<string, string[]> = {
  '1.2': ['1.1'],
  '1.3': ['1.1'],
  '1.5': ['1.2', '1.4'],
  '1.7': ['1.2', '1.3'],
  '1.8': ['1.7'],
  '2.1': ['1.1'],
  '2.2': ['1.2', '1.6'],
  '2.3': ['1.5'],
  '2.4': ['1.7', '2.2', '2.3'],
  '2.5': ['1.8', '2.3', '2.4'],
  '2.6': ['1.2'],
  '3.1': ['1.1', '1.6'],
  '3.2': ['1.2', '1.6'],
  '3.3': ['1.5'],
  '3.4': ['1.7', '3.2', '3.3'],
  '3.5': ['1.8', '3.1', '3.3', '3.4'],
  '3.6': ['1.2', '3.2'],
  '3.7': ['1.3'],
  '3.8': ['3.5'],
  '3.9': ['1.1', '1.5'],
  '4.2': ['1.7', '1.8'],
  '4.3': ['4.2'],
  '4.4': ['4.1', '4.2'],
  '4.5': ['4.1', '4.2', '4.4'],
  '5.2': ['1.6'],
  '5.3': ['5.2'],
  '5.4': ['5.3'],
  '5.5': ['5.4'],
  '6.1': ['5.4', '5.5'],
  '6.2': ['5.4', '6.1'],
  '6.3': ['3.5', '5.4'],
  '6.4': ['5.1', '5.5', '6.3'],
  '6.5': ['5.3', '5.5', '6.1', '6.4'],
};

const titleFromOutcome = (text: string) => {
  const cleaned = text.replace(/\s+-\s+/g, ': ').replace(/\.$/, '');
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
};

const firstOutcomeByTopic = new Map<string, string>();
for (const outcome of caie9709Catalog.learningOutcomes) {
  if (!firstOutcomeByTopic.has(outcome.topicId)) firstOutcomeByTopic.set(outcome.topicId, outcome.id);
}

const topicIdByReference = new Map(caie9709Catalog.topics.map((topic) => [topic.reference, topic.id]));

export const knowledgePoints: KnowledgePoint[] = caie9709Catalog.learningOutcomes.map((outcome) => {
  const topic = caie9709Catalog.topics.find((item) => item.id === outcome.topicId)!;
  const prerequisiteIds = (topicPrerequisiteReferences[topic.reference] ?? [])
    .map((reference) => topicIdByReference.get(reference))
    .filter((topicId): topicId is string => Boolean(topicId))
    .map((topicId) => firstOutcomeByTopic.get(topicId))
    .filter((outcomeId): outcomeId is string => Boolean(outcomeId))
    .map((outcomeId) => `${outcomeId}-kp-01`);

  return {
    id: `${outcome.id}-kp-01`,
    topicId: outcome.topicId,
    learningOutcomeId: outcome.id,
    title: titleFromOutcome(outcome.officialText),
    prerequisiteIds,
    sourceType: 'derived',
    verificationStatus: 'draft',
  };
});

export const syllabusStats = {
  components: caie9709Catalog.components.length,
  topics: caie9709Catalog.topics.length,
  learningOutcomes: caie9709Catalog.learningOutcomes.length,
  knowledgePoints: knowledgePoints.length,
};

export { caie9709Catalog };
