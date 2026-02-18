# PR-Readiness Pack (Nuxt Agent Team)

Ziel: Umsetzung aus Modul A/B/C ohne Reibung in reviewbare PRs überführen (PR-first, green-checks-only).

## 1) PR-Struktur (empfohlen)

- PR A: Rendering/Runtime (Modul A)
- PR B: Data Fetching & Boundaries (Modul B)
- PR C: Vuetify/A11y Consistency (Modul C)

Hinweis: Falls Kapazität knapp ist, B + C in einem PR bündeln, aber getrennte Commits + getrennte Checklisten beibehalten.

---

## 2) PR-Template (copy/paste)

```md
## Summary
- Problem:
- Scope:
- Out of scope:

## Source-backed Decisions
1. Decision:
   - Source URL:
   - Section/Quote:
   - Applied Decision:
   - Trade-off:
   - Verification Step:

2. Decision:
   - Source URL:
   - Section/Quote:
   - Applied Decision:
   - Trade-off:
   - Verification Step:

## Validation
- [ ] lint
- [ ] typecheck
- [ ] unit-tests
- [ ] e2e-smoke
- [ ] build

## Risk & Rollback
- Risks:
- Rollback plan:

## Reviewer Guide
- Files to review first:
- What to test manually:
- Known limitations:
```

---

## 3) Gate-Drill Checklist (vor Review-Request)

- [ ] Scope passt exakt zum Modulziel
- [ ] Evidence-Blöcke vollständig (offiziell + ggf. SO ergänzend)
- [ ] Keine inoffizielle Quelle als alleinige Begründung
- [ ] Lint/Typecheck/Test/Build lokal/grün
- [ ] Risiken + Rollback dokumentiert
- [ ] PR-Beschreibung enthält Reviewer-Guide

---

## 4) Modul-spezifische PR-Hinweise

### PR A (Rendering/Runtime)
- Muss enthalten:
  - Route-Entscheidungen für `/`, `/dashboard`, `/settings`
  - `routeRules`-Vorschlag/Umsetzung
  - KPI-Verifikationsplan (SEO/TTFB/Caching)
- Blocker, wenn fehlt:
  - klare Rollback-Strategie bei Regression

### PR B (Data/Boundaries)
- Muss enthalten:
  - klare Schichtung (`server/`, `composables/`, `pages/`)
  - typisierte Response-Contracts
  - Zustandsmatrix (loading/empty/error/success)
  - mindestens 2 automatisierte Tests (error + empty/success)
- Blocker, wenn fehlt:
  - Business-Logik in Page oder untypisierte Contract-Pfade

### PR C (Vuetify/A11y)
- Muss enthalten:
  - konsistente Vuetify-Komponenten-/Theme-Nutzung
  - dokumentierter Keyboard-Flow im Scope
  - A11y-Risiken P1/P2/P3 priorisiert
- Blocker, wenn fehlt:
  - ungelöste P1-A11y-Blockade

---

## 5) Definition of Ready (DoR) für Merge-Phase

Ein PR ist erst „ready for merge“, wenn:
- alle required checks grün sind,
- mindestens eine qualifizierte Approval vorliegt,
- alle Review-Kommentare aufgelöst sind,
- kein offener High-Risk-Eintrag ohne Mitigation im PR steht.
