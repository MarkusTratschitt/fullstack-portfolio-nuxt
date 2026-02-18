# Nuxt Team Policy (Senior Standard)

Gültig für: Nuxt 3 + TypeScript + Pug + Less + Vuetify + i18n + Pinia + VueUse

## 1) Engineering-Prinzipien (nicht verhandelbar)

1. **Clean Code only**
   - klare Benennung, kleine Funktionen, klare Verantwortlichkeiten
   - keine undokumentierten Hacks

2. **Strikte Typisierung**
   - TypeScript strict
   - keine unbegründeten `any`
   - typisierte Props/Emits/API/Stores/Composables

3. **Best Practices vor Speed**
   - konsistente Team-Patterns
   - Lesbarkeit, Wartbarkeit, Sicherheit vor kurzfristigen Workarounds

4. **Änderungen an bestehendem Code nur mit Freigabe**
   - vor Refactor/Bugfix/Config/CI/Dependency-Änderungen explizit bestätigen lassen

---

## 2) Architekturregeln

- Rendering pro Route bewusst wählen: SSR / SSG / Client-only
- Pinia für State-Orchestrierung, Business-Logik in Composables/Services
- Server/Client-Grenzen explizit, keine Secrets im Client
- Feature-orientierte Struktur (nicht nur tech-orientiert)

---

## 3) UI, Styling, i18n

- Vuetify zuerst, Custom nur wenn nötig
- Pug lesbar halten, keine tiefen Monsterstrukturen
- Less über zentrale Tokens/Variablen; keine Random-Hex-Werte
- i18n-Key-Schema: `feature.section.element.state`
- keine hardcoded User-Texte, Fallback-Locale Pflicht

---

## 4) Testing & Quality Gates

- Unit: Composables/Stores/Services
- Component: Vuetify-States, i18n-Render, Props/Events
- E2E: kritische Flows + Smoke auf Preview
- Jeder Bugfix braucht mindestens einen Regressionstest

CI Required Checks:
`lint -> typecheck -> unit -> build -> e2e-smoke`

Branch Protection:
- kein Direkt-Push auf main
- Merge nur bei grüner Pipeline

---

## 5) Definition of Done (DoD)

Done nur wenn:
- Akzeptanzkriterien erfüllt
- CI grün
- i18n vollständig
- SSR/CSR-Verhalten plausibel
- Risiken + Rollback dokumentiert
- ggf. Freigabe für Bestands-Codeänderung vorhanden
