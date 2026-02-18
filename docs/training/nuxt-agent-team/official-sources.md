# Official Sources Track — Nuxt Agent Team

Ziel: Training und Entscheidungen primär auf offizieller Dokumentation aufbauen; Stack Overflow dient nur als ergänzende Praxisquelle.

## Source of Truth (offizielle + priorisierte Community-Quellen)

### Nuxt / Nitro
- Nuxt Docs (v3): https://nuxt.com/docs
- Rendering Concepts: https://nuxt.com/docs/guide/concepts/rendering
- Hybrid Rendering / Route Rules: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
- Data Fetching: https://nuxt.com/docs/getting-started/data-fetching
- Server Directory/API Routes: https://nuxt.com/docs/guide/directory-structure/server
- Nitro (Server Engine): https://nitro.unjs.io/
- Nuxt GitHub Releases: https://github.com/nuxt/nuxt/releases

### Vue / TypeScript / State
- Vue 3 Docs: https://vuejs.org/guide/introduction.html
- Vue Accessibility Guide: https://vuejs.org/guide/best-practices/accessibility.html
- Vue Router Docs: https://router.vuejs.org/
- Pinia Docs: https://pinia.vuejs.org/
- TypeScript Handbook: https://www.typescriptlang.org/docs/

### Vuetify
- Vuetify 3 Docs: https://vuetifyjs.com/en/
- Vuetify Components: https://vuetifyjs.com/en/components/all/
- Vuetify Theming: https://vuetifyjs.com/en/features/theme/
- Vuetify Accessibility: https://vuetifyjs.com/en/features/accessibility/

### Testing / Quality
- Vitest Docs: https://vitest.dev/
- Playwright Docs: https://playwright.dev/
- ESLint Docs: https://eslint.org/docs/latest/

### Priorisierte Community-Quelle (ergänzend)
- Stack Overflow: https://stackoverflow.com/

Hinweis: Stack Overflow ist **nicht** Source-of-Truth gegenüber offizieller Doku, sondern ergänzende Praxisreferenz für Troubleshooting und Edge Cases.

---

## Modulbezogene Quellenzuordnung (Round 2)

### Modul A — Rendering & Runtime
**Offiziell:**
- https://nuxt.com/docs/guide/concepts/rendering
- https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering

**Praxis (Stack Overflow):**
- https://stackoverflow.com/questions/77710465/nuxt-3-route-rules-ssr-false-for-specific-routes
- https://stackoverflow.com/questions/77195709/nuxt-3-use-swr-route-rule-caching-behavior
- https://stackoverflow.com/questions/76423808/nuxt-3-disable-ssr-on-a-single-page

### Modul B — Data Fetching & Boundaries
**Offiziell:**
- https://nuxt.com/docs/getting-started/data-fetching
- https://nuxt.com/docs/guide/directory-structure/server
- https://www.typescriptlang.org/docs/

**Praxis (Stack Overflow):**
- https://stackoverflow.com/questions/75434573/nuxt-3-usefetch-vs-useasyncdata-differences
- https://stackoverflow.com/questions/76931540/nuxt-3-where-to-place-fetch-logic-composable-or-page
- https://stackoverflow.com/questions/74108207/typescript-interface-for-api-response-best-practice

### Modul C — Vuetify, A11y, Consistency
**Offiziell:**
- https://vuetifyjs.com/en/components/all/
- https://vuetifyjs.com/en/features/theme/
- https://vuetifyjs.com/en/features/accessibility/
- https://vuejs.org/guide/best-practices/accessibility.html

**Praxis (Stack Overflow):**
- https://stackoverflow.com/questions/75671943/vuetify-3-accessibility-for-icon-buttons
- https://stackoverflow.com/questions/76598385/vuetify-3-best-practice-consistent-form-layout
- https://stackoverflow.com/questions/75721235/vuetify-3-theme-custom-colors-usage

---

## Evidence Rules (Pflicht)

Jede Architektur- oder Code-Entscheidung muss enthalten:
1. **Zitat/Link** auf offizielle Quelle,
2. **Kontext** (welcher Abschnitt),
3. **Übertragung** auf unser Projekt,
4. **Risiko/Trade-off**,
5. optional ergänzende Stack-Overflow-Praxisreferenz.

Format (in PR-Beschreibung):

- Source: <official-doc-link>
- Guidance: "..."
- Applied Decision: ...
- Trade-off: ...
- Supplementary Practice Link (optional): <stack-overflow-link>

---

## Definition of Done (Erweiterung)

Ein Trainingstag gilt nur dann als abgeschlossen, wenn:
- mindestens 3 relevante Entscheidungen mit offiziellen Quellen belegt sind,
- keine Entscheidung ausschließlich auf Blogposts/Foren basiert,
- Stack-Overflow-Verweise nur ergänzend eingesetzt sind,
- alle Referenzen klickbar und gültig sind.