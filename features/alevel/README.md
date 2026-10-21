# A-Level Mathematics · Phase 1 foundation

This feature keeps Cambridge source data separate from user-owned learning data.

## Data layers

- `data/caie9709.ts` contains the source-linked CAIE 9709 syllabus catalog: the exam board, Version 4 source document, qualification routes, six components, 38 official topics and 153 official Learning Outcomes.
- `catalog.ts` creates the first derived teaching layer. Its knowledge-point titles and prerequisite links are explicitly marked `draft`; they are not Cambridge statements.
- `types.ts` is the Phase 1 schema boundary. Stable IDs are based on syllabus version, topic and Learning Outcome, so later syllabus imports do not overwrite user records.
- `progress/` owns the single persisted progress snapshot. It migrates `luca-alevel-kp-progress-v1` into `luca-alevel-progress-v2` without changing the immutable official catalog.
- `analytics/service.ts` contains the shared, stable-ID-deduplicated aggregation logic used by the Learning Analytics UI and covered by unit tests.
- Learning-status changes append events from the moment this version is used. Existing current status is preserved, but historical dates are never inferred from it.

## Source integrity

- Syllabus: Cambridge International AS & A Level Mathematics 9709, examinations in 2026 and 2027, Version 4 (December 2025).
- Official PDF: `https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf`
- SHA-256: `dd0131f3cd8d4e3c270e7936cbb909c15f4cb8053f8337b67c16e8ec0b8bc5e5`
- Every official topic and Learning Outcome records its source PDF page.

## Phase boundary

The current derived layer deliberately starts with one stable draft Knowledge Point per official Learning Outcome. Finer atomic decomposition, Chinese translations and dependency review require subject-specialist review before being promoted from `draft` to `reviewed`. English teacher-preparation fields are reserved against the stable Knowledge Point IDs for Phase 4.

The current analytics delivery includes KPI cards, overall status distribution, P1–P6 component comparison, persistent URL filters and Knowledge Map linking. Topic heatmaps and time-series visualisation remain in the next delivery phase; the shared service already preserves the event history they will consume.
