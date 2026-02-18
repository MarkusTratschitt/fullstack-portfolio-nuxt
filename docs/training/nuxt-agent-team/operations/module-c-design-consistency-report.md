# Module C — Design Consistency Report (Round 2)

Datum: 2026-02-18

## Ausgangslage
Im gewählten Scope gab es inkonsistente Button-Varianten, uneinheitliche Feldabstände und nicht durchgehend dokumentierte Fokuszustände.

## Zielbild
- Vuetify-Komponenten als Standardpfad
- Theme-/Token-konforme Varianten
- A11y-Baseline nach Keyboard/Label/Focus/Contrast

## Entscheidungen mit Evidenz

### Entscheidung C1: Einheitliche Input-/Button-Familie über Vuetify
- Source URL: https://vuetifyjs.com/en/components/all/
- Abschnitt/Zitat: Vuetify bietet konsistente Komponentenfamilien für Form- und Interaktionsmuster.
- Applied Decision: Formularscope auf `v-text-field`, `v-select`, `v-btn` konsolidieren.
- Trade-off: Reduzierte individuelle Styling-Freiheit, dafür höhere Konsistenz und geringere Pflegekosten.
- Verification Step: Komponenteninventar im Scope enthält keine gemischten Legacy-Alternativen.
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/76598385/vuetify-3-best-practice-consistent-form-layout

### Entscheidung C2: Fokuszustände als Muss-Kriterium
- Source URL: https://vuetifyjs.com/en/features/accessibility/
- Abschnitt/Zitat: Accessibility umfasst klar erkennbare Fokus- und Interaktionszustände.
- Applied Decision: Fokusmarker werden nicht entfernt; sichtbare Fokusindikation dokumentiert.
- Trade-off: Teilweise „stärkerer“ visueller Stil, dafür bessere Tastatur-Nutzbarkeit.
- Verification Step: Keyboard-Walkthrough zeigt jederzeit sichtbaren Fokus.
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75671943/vuetify-3-accessibility-for-icon-buttons

### Entscheidung C3: Token-basierte Spacing-/Farbregeln
- Source URL: https://vuetifyjs.com/en/features/theme/
- Abschnitt/Zitat: Theme- und Design-Token sichern konsistente Ausprägungen über Komponenten hinweg.
- Applied Decision: Spacing/Farbvarianten über definierte Vuetify-Konvention statt ad-hoc Inline-Werte.
- Trade-off: Initiales Refactoring nötig, langfristig schnellere UI-Änderungen.
- Verification Step: Reduktion manueller Stilwerte im Scope nachweisbar.
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75721235/vuetify-3-theme-custom-colors-usage

## Ergebnisstand
- Konsistenz verbessert: hoch
- A11y-Basis erfüllt: vollständig im definierten Scope

## Delta-Update (Finalisierung)
- Dark-Theme-Kontrast (sekundäre Texte + Helper-Text) gemessen und in `module-c-a11y-checklist.md` dokumentiert.
- Ehemaliger P2-Punkt „Dark-Theme-Kontrast offen“ geschlossen.
- Restpunkt als P3 „tracked“ markiert (Legacy-Spacing außerhalb Scope, kein Blocker für Modulabschluss).

## Nächster Schritt
- Keine offenen Pflichtpunkte mehr im Modul-C-Scope; Übergang in Gate-/PR-Validierung.