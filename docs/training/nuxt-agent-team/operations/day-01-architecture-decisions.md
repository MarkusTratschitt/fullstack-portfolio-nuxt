# Day 01 — Architecture Decisions (Binding)

## Decision 1: Feature-Modular Structure
- Jede neue Funktion folgt Feature-Slice-Aufbau (`components`, `composables`, `services`, optional `stores`).
- Keine Business-Logik in Seiten-Glue.

## Decision 2: Type Safety
- Strict TypeScript ist Pflicht.
- Keine unbegründeten `any`-Workarounds.

## Decision 3: UI Consistency (Vuetify3)
- Vuetify-Komponenten zuerst, keine unnötigen Custom-Widgets.
- A11y-Prüfung für Labels, Focus, Keyboard pro PR.

## Decision 4: Delivery Policy
- PR-first, kein Push auf protected `master`.
- Kein Merge vor grünen Required Checks + Approval + resolved comments.

## Decision 5: Test Discipline
- Jede relevante Änderung bringt passende Tests/Smoke-Absicherung mit.
- Regressionen müssen reproduzierbar und testbar gemacht werden.
