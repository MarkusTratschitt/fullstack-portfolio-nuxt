# Execution Runbook (to Full Goal Completion)

## Operating Mode
- PR-first workflow only.
- No merge before green required checks.
- Every change must have a reviewer-facing rationale.
- Evidence discipline: official docs mandatory, Stack Overflow only as supplementary praxis signal.

## Day-by-Day Plan

### Day 1 — Baseline + Architecture Lock
1. Baseline snapshot:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run unit-tests`
   - `npm run e2e-smoke`
   - `npm run build`
2. Publish architecture constraints and folder boundaries.
3. Define module ownership (who owns which feature domain).
4. Exit gate: standards approved.

### Day 2 — Guided Build + Refactor Lab
1. Build a feature in modular slices.
2. Refactor one dense component into moduleized units.
3. Add/update tests for new boundaries.
4. Open PR and iterate until all required checks pass.
5. Exit gate: no blocking review findings.

### Day 3 — Hardening + Certification
1. Performance and accessibility verification.
2. Final CI pass and review closure.
3. Scorecard evaluation.
4. Final sign-off for completion.

## Review Gates
- Gate A: Architecture compliance
- Gate B: Type safety and modular boundaries
- Gate C: CI + review policy compliance

## Escalation Rules
- If blocked >15 min: raise blocker with 2 options + recommendation.
- If CI fails: fix by highest impact first (typecheck > test stability > lint polish).
- No policy bypass unless explicitly approved by Markus.

## 3-Stunden-Autonomie-Block (operativ, official-first)

**Ziel des Blocks:** belastbare Fortschritte ohne Kontextwechsel in Modul A/B/C mit dokumentierter Evidenz.

### Zeitbox 00:00–00:20 — Setup & Scope-Freeze
- Zielscope für A/B/C fixieren (je 1 klarer Teilumfang).
- Offizielle Quellen je Modul fest pinnen.
- Ergänzende Stack-Overflow-Praxislinks je Modul definieren.
- Erfolgskriterien und Artefakte notieren.

### Zeitbox 00:20–01:05 — Modul A (Rendering/Runtime)
- Route-Entscheidungen für `/`, `/dashboard`, `/settings` ausarbeiten.
- `routeRules`-Vorschlag formulieren.
- Trade-offs + Rollback-Option dokumentieren.

### Zeitbox 01:05–01:50 — Modul B (Data/Server Boundaries)
- Einen Flow server-first strukturieren (`server/`, `composables/`, `pages/`).
- Typisierte Contracts + Fehlerpfade prüfen.
- Boundary-Checklist aktualisieren.

### Zeitbox 01:50–02:35 — Modul C (Vuetify/A11y)
- UI-Scope auf konsistente Vuetify-Muster refactoren.
- A11y-Mindestchecks (Keyboard/Labels/Focus) durchführen.
- Offene Risiken priorisieren (P1/P2/P3).

### Zeitbox 02:35–02:55 — Tracker & Decision Log
- `operations/training-tracker.md` mit Fortschritt, Decisions, Risiken updaten.
- Mindestens 3 source-backed Entscheidungen eintragen.
- Decision-Logs auf Konsistenz mit Assignments prüfen.

### Zeitbox 02:55–03:00 — Abschlussnotiz
- Kurznotiz erstellen: erledigt / offen / nächste Schritte.
- Übergabe-Readiness sicherstellen (klare Fortsetzungspunkte).

---

## Round-2 Execution Snapshot (2026-02-18)
Erzeugte Artefakte:
- `operations/module-a-rendering-decision-log.md`
- `operations/module-a-route-rules-proposal.md`
- `operations/module-b-boundary-checklist.md`
- `operations/module-b-contract-decisions.md`
- `operations/module-c-a11y-checklist.md`
- `operations/module-c-design-consistency-report.md`

Offene Restarbeiten aus Snapshot:
- Code-PR-Umsetzung für Modul B/C inkl. CI-Verifikation.
- Dark-Theme-Kontrastmessung (Modul C, P2).
- Gate-Status auf grün ziehen (Checks/Approvals/Comments).