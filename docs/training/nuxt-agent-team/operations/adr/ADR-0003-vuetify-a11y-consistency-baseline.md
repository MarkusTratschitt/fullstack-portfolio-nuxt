# ADR-0003 — Vuetify A11y & Design Consistency Baseline

- Status: Proposed
- Datum: 2026-02-18
- Entscheider: Nuxt Agent Team (Training Lead + Tech Lead)
- Kontextbereich: UI / A11y / Consistency

## Kontext
UI-Entscheidungen sollen einheitlich sein und ein belastbares A11y-Minimum erfüllen, besonders bei Fokus, Tastaturfluss und Kontrasten.

## Entscheidung
(Template) Vuetify-first Komponentenstrategie mit verbindlichem A11y-Minimum und P1/P2/P3-Risikoklassifizierung.

## Alternativen
1. Freie Komponentenwahl (inkonsistente UI)
2. Reines Style-Refactoring ohne A11y-Gates
3. Vuetify-first + A11y-basierte Review-Gates (präferierte Richtung)

## Konsequenzen
- Positive Effekte:
- Negative Effekte / Trade-offs:
- Risiken:

## Evidence
- Offizielle Quellen:
  - https://vuetifyjs.com/en/components/all/
  - https://vuetifyjs.com/en/features/theme/
  - https://vuetifyjs.com/en/features/accessibility/
  - https://vuejs.org/guide/best-practices/accessibility.html
- Ergänzende Praxisquellen (optional):
  - https://stackoverflow.com/questions/75671943/vuetify-3-accessibility-for-icon-buttons

## Umsetzung / Rollout
1. Komponenten-/Theme-Standards festziehen
2. A11y-Checks im PR-Flow erzwingen
3. P1-Risiken vor Merge schließen

## Verifikation
- Keyboard-Flow funktioniert
- Focus sichtbar
- Kontrastprüfung für kritische UI-Bereiche dokumentiert

## Rollback
Neue UI-Änderungen komponentenweise revertieren; letzte konsistente Theme-/Komponentenbasis herstellen.

## Follow-ups
- Dark-Theme-Kontrast fortlaufend monitoren
- Wiederkehrende UI-Patterns in Team-Blueprint überführen
