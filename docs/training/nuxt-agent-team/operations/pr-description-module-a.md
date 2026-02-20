# PR Description — Modul A (Rendering/Runtime)

## Summary
- Problem: Rendering-Strategien für zentrale Routen sind nicht explizit begründet und operativ abgesichert.
- Scope: Entscheidung + Dokumentation für `/`, `/dashboard`, `/settings` inkl. `routeRules` und Rollback.
- Out of scope: tiefgreifende Feature-Entwicklung außerhalb Rendering/Runtime.

## Source-backed Decisions
1. Route `/`
   - Source URL: https://nuxt.com/docs/guide/concepts/rendering
   - Section/Quote: "Nuxt supports universal rendering and hybrid rendering with route rules."
   - Applied Decision: **Prerender/SSG** für die Landing-Page (`routeRules['/'] = { prerender: true }`) wegen hoher SEO-Relevanz und geringer Personalisierung.
   - Trade-off: Sehr gute Cachebarkeit/SEO, aber Inhalte sind nicht request-spezifisch zur Renderzeit.
   - Verification Step: Build erzeugt prerenderte Route; SEO-Meta und Ladezeit im Deploy-Vergleich prüfen.

2. Route `/dashboard`
   - Source URL: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
   - Section/Quote: "Route rules allow you to define caching and rendering behavior per route."
   - Applied Decision: **SSR + SWR-Caching** für personalisierte, häufig abgerufene Daten (`routeRules['/dashboard'] = { swr: 60 }`).
   - Trade-off: Bessere Aktualität als statisch, aber höhere Serverlast als rein statisch.
   - Verification Step: TTFB und Datenaktualität über mehrere Requests prüfen; Cache-Hit-Verhalten im Server-Log/Observability vergleichen.

3. Route `/settings`
   - Source URL: https://nuxt.com/docs/guide/concepts/rendering
   - Section/Quote: "Nuxt supports universal rendering and hybrid rendering with route rules."
   - Applied Decision: **CSR (`ssr: false`)** für stark nutzerspezifische Interaktionen; serverseitige Änderungen laufen über API-Routen, SEO ist hier nicht priorisiert.
   - Trade-off: Weniger SSR-Overhead, aber First Interaction ist stärker client-abhängig.
   - Verification Step: `routeRules['/settings'].ssr === false`, Auth-Flow und API-Interaktionen im Browser-Test validieren.

## Validation
- [ ] lint
- [ ] typecheck
- [ ] unit-tests
- [ ] e2e-smoke
- [ ] build

## KPI Verification
- SEO: `/` in Search Console/Meta-Checks ohne Regression (Title/Description/Indexierbarkeit unverändert oder verbessert).
- TTFB: `/dashboard` median TTFB vor/nach Umstellung vergleichen (Ziel: keine Verschlechterung >10%).
- Caching: `/dashboard` mit `swr:60` über wiederholte Requests auf stabilere Response-Zeiten prüfen.

## Risk & Rollback
- Risiken:
  - Falsch gewählte Route-Strategie kann TTFB/SEO verschlechtern.
  - SWR-Konfiguration kann veraltete Daten zu lange ausliefern.
  - CSR-lastige Settings-Route kann bei schwachen Clients träger wirken.
- Rollback: `routeRules` auf vorherigen Zustand zurück + Deploy-Recheck

## Reviewer Guide
- Review-Reihenfolge:
  1. `operations/module-a-rendering-decision-log.md`
  2. `operations/module-a-route-rules-proposal.md`
- Manuelle Checks: Route-Verhalten + KPI-Delta

## Merge Readiness (DoR)
- [ ] Required Checks grün
- [ ] Mind. 1 qualifizierte Approval
- [ ] Alle Review-Kommentare resolved
- [ ] Kein offener High-Risk ohne Mitigation
