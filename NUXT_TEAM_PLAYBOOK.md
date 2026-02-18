# Nuxt Team Playbook (v3)

Stack: **Nuxt 3, Pug, Less, Vuetify, i18n, GitHub Actions**

## 0) Nicht verhandelbare Engineering-Prinzipien

1. **Clean Code only**
   - Verständliche Namen, kleine Funktionen, klare Verantwortlichkeiten
   - Keine temporären Hacks ohne dokumentiertes Follow-up
   - Boy-Scout-Rule: Code sauberer hinterlassen als vorgefunden

2. **Strikte Typisierung (ausnahmslos)**
   - TypeScript strikt aktiv (`strict: true`)
   - Keine unbegründeten `any`-Workarounds
   - Typen für Props, Emits, API-Responses, Composables und Stores sind Pflicht
   - Keine Casts, die Fehler verdecken

3. **Best practices only**
   - Nur etablierte, teamweit konsistente Patterns
   - Keine cleveren Sonderlösungen gegen Konvention
   - Sicherheit, Lesbarkeit, Wartbarkeit vor Kurzfrist-Speed

4. **Keine Änderungen an bestehender Codebasis ohne Freigabe**
   - Bestehender Code darf nicht geändert werden, bevor nachgefragt wurde
   - Umsetzung erst nach expliziter Bestätigung (z. B. „freigegeben“)
   - Gilt für Refactorings, Bugfixes, Dependencies, Configs und CI

## 1) Rollen

- **Builder**: Implementiert Features in kleinen, reviewbaren Schritten
- **Reviewer**: Prüft Qualität, Architektur, Nuxt-Best-Practices
- **Debugger**: Reproduziert Bugs, liefert Root-Cause und minimalen Fix
- **Release/Ops**: Build, CI, Deploy, Rollback-Fähigkeit

## 2) Standard-Workflow pro Task

1. Ziel (1 Satz)
2. Akzeptanzkriterien (3–5 Punkte)
3. Plan (max. 5 Schritte)
4. Umsetzung in kleinen Commits
5. Selbstcheck: Lint, Typecheck, Tests (falls vorhanden), Build
6. Abschlussbericht: Änderung, Begründung, Risiko, nächster Schritt

## 3) Definition of Done (DoD)

Done nur wenn:
- Kriterien erfüllt
- CI grün
- i18n vollständig (keine Hardcoded Strings)
- relevante Breakpoints geprüft
- SSR/CSR-Verhalten plausibel
- Risiken/Trade-offs dokumentiert

## 4) Stack-spezifische Regeln

- **Nuxt3**: Server/Client-Grenzen explizit, `runtimeConfig` korrekt, keine Secrets im Client
- **Pug**: klare Template-Struktur, wiederkehrende UI in Komponenten
- **Less**: zentrale Variablen/Tokens, keine `!important`-Ketten
- **Vuetify**: erst bestehende Komponenten nutzen, Accessibility mitprüfen
- **i18n**: keine Hardcoded User-Texte, saubere Key-Konventionen

## 5) PR-Checklist (Pflicht)

- [ ] Akzeptanzkriterien erfüllt
- [ ] Clean-Code-Prinzipien eingehalten
- [ ] Strikte Typisierung eingehalten (keine unbegründeten `any`)
- [ ] Umsetzung folgt Best Practices
- [ ] Für Änderungen an bestehendem Code liegt explizite Freigabe vor
- [ ] Lint/Typecheck/Build lokal grün
- [ ] GitHub Actions grün
- [ ] Risiko- und Rollback-Hinweis ergänzt

## 6) Eskalation (Anti-Stuck)

Wenn >15 Minuten blockiert:
1. Blocker
2. Bisherige Versuche
3. Zwei Optionen
4. Eigene Empfehlung

Dann gezielte Übergabe statt Blindflug.
