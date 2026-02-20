# PR Review Template

## Kontext
- Ziel des PR (1 Satz):
- Ticket/Issue:
- Risiko-Level: Low / Medium / High
- Betrifft bestehenden Code? Ja / Nein  
  - Falls Ja: Freigabe liegt vor? Ja / Nein

## Review-Checkliste (Pflicht)

### Architektur & Codequalität
- [ ] Lösung folgt Team-Architektur (Nuxt/Pinia/Composables/Server-API)
- [ ] Clean Code (Namen, Verantwortlichkeiten, Komplexität)
- [ ] Keine unnötige technische Schuld eingebracht

### Typisierung
- [ ] Strikte Typisierung eingehalten
- [ ] Keine unbegründeten `any` / unsafe casts
- [ ] API-/Store-/Composable-Verträge sind klar typisiert

### UI/UX (Vuetify, Pug, Less)
- [ ] UI konsistent mit Design-System
- [ ] States vollständig: loading/empty/error/success
- [ ] Responsive auf Kern-Breakpoints geprüft
- [ ] Accessibility: Labels, Focus, Keyboard, Kontrast

### i18n
- [ ] Keine hardcoded User-Texte
- [ ] Keys folgen `feature.section.element.state`
- [ ] Fallback/Pluralisierung korrekt

### Tests & CI
- [ ] Unit/Component/E2E angemessen ergänzt
- [ ] Regressionstest bei Bugfix vorhanden
- [ ] CI-Checks grün (lint/typecheck/unit/build/e2e-smoke)

### Performance
- [ ] Rendering-Strategie sinnvoll (SSR/SSG/Client-only)
- [ ] Kein unbegründeter Bundle-Anstieg
- [ ] Keine Hydration-Probleme erkennbar

### Release-Sicherheit
- [ ] Risiko dokumentiert
- [ ] Rollback-Pfad beschrieben
- [ ] Go/No-Go aus Reviewer-Sicht: **Go / No-Go**

---

## Reviewer-Fazit
- Ergebnis: ✅ Approve / ❌ Changes requested
- Wichtigste Findings (max. 3):
  1.
  2.
  3.
- Nächster Schritt:
