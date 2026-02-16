# Nuxt 3 Team Workshop

Stack: **Nuxt3 + Pug + Less + Vuetify + i18n + Pinia + VueUse + GitHub Actions**

## 1) Agenda (90 min)

### 0–10 min: Architektur-Setup (High-Level)
- Nuxt Runtime-Modell: SSR/CSR/Hybrid, Nitro, Route Rules
- Projektstruktur für Skalierung (features statt nur layer-by-type)
- Entscheidungsmatrix: Composables vs Stores vs Server API

### 10–30 min: Best-Practice Architektur im Stack
- Vuetify + Nuxt sauber integrieren (Plugin, Tree-Shaking, Theming)
- i18n-Architektur (lazy-loaded locales, key-ownership, fallback policy)
- Pug/Less Guidelines (Lesbarkeit, Scoped/Global, Design Tokens)
- Pinia Domain Stores (thin stores, business logic in composables/services)
- VueUse: nur dort einsetzen, wo es Komplexität reduziert (nicht als Default-Hammer)

### 30–50 min: Performance Deep Dive
- Rendering-Strategien pro Seite (SSR, SSG, client-only bewusst einsetzen)
- Code-Splitting, dynamic imports, critical CSS
- Caching mit Nitro + routeRules + CDN
- Image/Font-Optimierung, hydration pitfalls, bundle checks

### 50–70 min: Testing-Strategie (pragmatisch)
- Unit: Vitest für Composables/Stores
- Component: @vue/test-utils für Vuetify-Komponenten
- E2E: Playwright für Kernflüsse
- i18n-Snapshots & regressionssichere UI-Tests

### 70–90 min: Deployment & CI/CD mit GitHub Actions
- Pipeline-Stufen: lint → typecheck → unit → build → e2e (smoke)
- Preview Deployments pro PR
- Cache-Strategie (pnpm/npm + Playwright)
- Quality Gates + Rollback-Strategie

---

## 2) 60-min-Version (kompakt)

- 0–10 Architekturprinzipien
- 10–25 Stack-spezifische Patterns (Vuetify/i18n/Pinia)
- 25–40 Performance-Hebel mit echten Beispielen
- 40–50 Testing-Matrix
- 50–60 CI/CD Blueprint + Q&A

---

## 3) Konkrete Team-Outputs (direkt nutzbar)

1. **Architecture Decision Matrix (ADR-lite)**
   - Wann Composable, wann Pinia Store, wann Server API
   - Ergebnis als `docs/architecture/decision-matrix.md`

2. **Feature Folder Blueprint**
   - Einheitlicher Aufbau je Feature (`components`, `composables`, `stores`, `services`, `locales`)
   - Ergebnis als `docs/architecture/feature-blueprint.md`

3. **i18n Key Ownership & Naming Policy**
   - Key-Konvention (`feature.section.element.state`), Ownership pro Domain
   - Ergebnis als `docs/i18n/policy.md`

4. **Vuetify UI Consistency Checklist**
   - Spacing, typography, states, a11y, dark/light
   - Ergebnis als `docs/ui/vuetify-checklist.md`

5. **Performance Playbook**
   - Rendering-Strategie je Route, Caching-Strategie, Bundle-Budget
   - Ergebnis als `docs/performance/playbook.md`

6. **Test Matrix**
   - Welche Flows: Unit vs Component vs E2E
   - Ergebnis als `docs/testing/test-matrix.md`

7. **GitHub Actions CI Blueprint**
   - Required checks, Caching, Smoke-E2E, Preview Deploy
   - Ergebnis als `docs/ci/blueprint.md`

8. **PR Template + Quality Gates**
   - Pflichtfelder: Risiko, Rollback, i18n, Typisierung, Screenshots
   - Ergebnis als `.github/PULL_REQUEST_TEMPLATE.md`

9. **Definition of Done (Teamweit verbindlich)**
   - Ein Satz pro Qualitätskriterium, keine Grauzonen
   - Ergebnis als `docs/process/definition-of-done.md`

10. **Workshop Action Plan (2 Wochen)**
   - 5 priorisierte Maßnahmen mit Owner + Deadline
   - Ergebnis als `docs/process/action-plan-2-weeks.md`

---

## Kickoff-Moderation (direkt verwendbar)

"Ziel heute: Wir vereinheitlichen Architektur, Qualität und Delivery im Nuxt-Stack. Am Ende haben wir konkrete Artefakte, klare Owner und messbare Standards — nicht nur Theorie."
