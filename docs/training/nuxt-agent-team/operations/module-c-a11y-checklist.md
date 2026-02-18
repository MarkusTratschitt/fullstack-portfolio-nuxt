# Module C — A11y Checklist (Vuetify Scope)

Datum: 2026-02-18  
Gewählter Scope: Settings-Form + Dashboard-Filterleiste

## Keyboard
- [x] Alle interaktiven Elemente via `Tab` erreichbar.
- [x] Fokus-Reihenfolge folgt visueller Reihenfolge.
- [x] Dialog/Overlay (falls genutzt) kann via `Esc` geschlossen werden.

## Labels / ARIA
- [x] Form-Felder haben sichtbare Labels (`label` in Vuetify-Komponenten).
- [x] Icon-only Buttons haben `aria-label`.
- [x] Fehlermeldungen sind semantisch an Inputs gebunden.

## Focus / Visibility
- [x] Fokuszustände klar sichtbar (nicht nur Farbnuance).
- [x] Kein `outline: none` ohne gleichwertigen Ersatz.
- [x] Nach Submit-Fehler wird Fokus auf erstes invalides Feld geführt.

## Contrast
- [x] Primäre CTA/Body-Text-Kombinationen erfüllen Basis-Kontrastziel.
- [ ] Dark-Theme-Kontrast für sekundäre Texte final messen.

## Konsistenz-Checks
- [x] Komponentenmix reduziert (Vuetify first).
- [x] Einheitliche Button-Varianten (`tonal`/`elevated`) je Kontext.
- [x] Spacing nach gemeinsamen Tokens statt ad-hoc Pixelwerte.

## Quellen
- Official: https://vuetifyjs.com/en/features/accessibility/
- Official: https://vuetifyjs.com/en/features/theme/
- Official: https://vuejs.org/guide/best-practices/accessibility.html
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75671943/vuetify-3-accessibility-for-icon-buttons

## Offene Risiken
- P2: Dark-Theme-Kontrastmessung für Helper-Text noch ausstehend.
- P3: Einzelne Legacy-Komponente nutzt noch manuelles Spacing außerhalb Token-System.