export type LearningStatus = 'not_started' | 'learning' | 'practising' | 'mastered';
export type TeachingStatus = 'not_started' | 'preparing' | 'ready' | 'taught';

export type ExamBoard = {
  id: string;
  name: string;
  shortName: string;
};

export type SourceDocument = {
  id: string;
  title: string;
  url: string;
  sha256: string;
  version: string;
  publishedAt: string;
  pageCount: number;
};

export type SyllabusVersion = {
  id: string;
  examBoardId: string;
  syllabusCode: string;
  title: string;
  examYears: string;
  sourceDocumentId: string;
};

export type QualificationRoute = {
  id: string;
  name: string;
  level: 'AS' | 'A Level';
  componentIds: string[];
  progressionToALevel: boolean;
  deliveryModes: Array<'linear' | 'staged'>;
  officialSourcePage: number;
};

export type ExamComponent = {
  id: string;
  paper: string;
  title: string;
  shortTitle: string;
  color: string;
  assumedComponentIds: string[];
};

export type OfficialTopic = {
  id: string;
  componentId: string;
  reference: string;
  title: string;
  sourcePage: number;
};

export type LearningOutcome = {
  id: string;
  topicId: string;
  ordinal: number;
  officialText: string;
  sourceDocumentId: string;
  sourcePage: number;
  sourceType: 'official';
  verificationStatus: 'verified';
};

export type KnowledgePoint = {
  id: string;
  topicId: string;
  learningOutcomeId: string;
  title: string;
  prerequisiteIds: string[];
  sourceType: 'derived';
  verificationStatus: 'draft' | 'reviewed';
};

export type SyllabusCatalog = {
  examBoard: ExamBoard;
  sourceDocument: SourceDocument;
  syllabusVersion: SyllabusVersion;
  qualificationRoutes: QualificationRoute[];
  components: ExamComponent[];
  topics: OfficialTopic[];
  learningOutcomes: LearningOutcome[];
};
