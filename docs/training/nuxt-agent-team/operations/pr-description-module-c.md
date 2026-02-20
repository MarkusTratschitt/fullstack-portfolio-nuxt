# PR Description — Modul C (Vuetify/A11y Consistency)

## Summary
- Problem: UI-Inkonsistenzen und A11y-Basics sind nicht durchgehend abgesichert.
- Scope: Vuetify-Konsolidierung im definierten UI-Scope (Settings-Form + Dashboard-Filterleiste) + A11y-Mindestchecks.
- Out of scope: kompletter UI-Redesign außerhalb des Scopes.

## Source-backed Decisions
1. Komponenten-/Theme-Entscheidung
   - Source URL: https://vuetifyjs.com/en/features/theme/
   - Section/Quote: "Themes allow you to define semantic color sets and reuse them consistently across components."
   - Applied Decision: UI-Scope auf semantische Theme-Tokens vereinheitlichen (Primary/Surface/Error) und inkonsistente Inline-Styles entfernen.
   - Trade-off: Einmaliger Refactor-Aufwand, dafür langfristig konsistente UI und einfachere Wartung.
   - Verification Step: Vorher/Nachher-Diff zeigt reduzierte Style-Varianz; Komponenten verwenden Token statt Hardcoded-Werte.

2. A11y-Entscheidung
   - Source URL: https://vuejs.org/guide/best-practices/accessibility.html
   - Section/Quote: "Ensure keyboard accessibility and provide proper labels for interactive controls."
   - Applied Decision: Für alle interaktiven Elemente im Scope: klare Labels, sichtbarer Focus-State und reproduzierbarer Keyboard-Flow.
   - Trade-off: Mehr Prüfaufwand pro PR, dafür weniger Accessibility-Debt.
   - Verification Step: Keyboard-Navigation E2E-Durchlauf (Tab/Shift+Tab/Enter/Escape) + manuelle Label-/Focus-Prüfung.

## Validation
- [ ] lint
- [ ] typecheck
- [ ] unit-tests
- [ ] e2e-smoke
- [ ] build
- [ ] Keyboard-flow dokumentiert und reproduzierbar

## Risk & Rollback
- Risiken:
  - Theme-Umstellung kann ungewollte visuelle Seiteneffekte erzeugen.
  - Focus/Keyboard-Fixes können bestehende Interaktionen beeinflussen.
  - Kontrastprobleme im Dark Theme bleiben ohne dedizierten Check unentdeckt.
- Rollback: komponentenweise Rückbau via getrennte Commits

## Reviewer Guide
- Review-Reihenfolge:
  1. `operations/module-c-design-consistency-report.md`
  2. `operations/module-c-a11y-checklist.md`
- Manuelle Checks: Focus, Labels, Keyboard, Kontrast

## Merge Readiness (DoR)
- [ ] Required Checks grün
- [ ] Mind. 1 qualifizierte Approval
- [ ] Alle Review-Kommentare resolved
- [ ] Kein offener High-Risk ohne Mitigation
