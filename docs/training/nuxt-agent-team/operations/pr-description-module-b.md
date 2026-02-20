# PR Description — Modul B (Data Fetching & Boundaries)

## Summary
- Problem: Datenfluss/Bereichsgrenzen sind nicht überall klar getrennt.
- Scope: server-first Refactor eines Flows mit typisierten Contracts und belastbarer Zustandsbehandlung.
- Out of scope: zusätzliche Feature-Entwicklung außerhalb des gewählten Flows.

## Source-backed Decisions
1. Boundary-Entscheidung
   - Source URL: https://nuxt.com/docs/guide/directory-structure/server
   - Section/Quote: "The `server/` directory is used to create API and server routes."
   - Applied Decision: Datenbeschaffung und Aggregation laufen in `server/api/dashboard/summary.get.ts`; `pages/` konsumiert nur über Composable (`useDashboardSummary`).
   - Trade-off: Bessere Trennung/Testbarkeit, dafür zusätzlicher Abstraktionslayer.
   - Verification Step: Kein direkter externer API-Call mehr in `pages/`; Review über Dateigrenzen + Imports.

2. Contract-/Error-Strategie
   - Source URL: https://nuxt.com/docs/getting-started/data-fetching
   - Section/Quote: "`useAsyncData` and `useFetch` provide reactive state for pending/error/data."
   - Applied Decision: Einheitlicher typed Contract `DashboardSummaryResponse`; UI verarbeitet explizit `loading`, `empty`, `error`, `success`.
   - Trade-off: Mehr Boilerplate im State-Handling, dafür robuste UX bei Fehlerfällen.
   - Verification Step: Unit/E2E decken error-state + empty/success-state ab; Typecheck erzwingt Contract-Konsistenz.

## Validation
- [ ] lint
- [ ] typecheck
- [ ] unit-tests
- [ ] e2e-smoke
- [ ] build
- [ ] test: error-state
- [ ] test: empty oder success-state

## Risk & Rollback
- Risiken:
  - Boundary-Leaks (Business-Logik rutscht wieder in `pages/`).
  - Unvollständige Fehlerpfade führen zu inkonsistenten UI-Zuständen.
  - Contract-Änderungen ohne Synchronisierung brechen Consumer.
- Rollback: Refactor-Schritte commitweise revertierbar halten

## Reviewer Guide
- Review-Reihenfolge:
  1. `operations/module-b-boundary-checklist.md`
  2. `operations/module-b-contract-decisions.md`
- Manuelle Checks: loading/empty/error/success sichtbar und konsistent

## Merge Readiness (DoR)
- [ ] Required Checks grün
- [ ] Mind. 1 qualifizierte Approval
- [ ] Alle Review-Kommentare resolved
- [ ] Kein offener High-Risk ohne Mitigation
