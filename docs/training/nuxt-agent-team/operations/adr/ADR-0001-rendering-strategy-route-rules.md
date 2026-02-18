# ADR-0001 — Rendering Strategy & Route Rules für Kernrouten

- Status: Proposed
- Datum: 2026-02-18
- Entscheider: Nuxt Agent Team (Training Lead + Tech Lead)
- Kontextbereich: Rendering / Runtime

## Kontext
Für `/`, `/dashboard`, `/settings` müssen SSR/CSR/Hybrid-Entscheidungen konsistent, nachvollziehbar und performance-sicher getroffen werden.

## Entscheidung
(Template) Festlegen, welche Route SSR/CSR/Hybrid nutzt und warum; routeRules inkl. Cache-/Revalidierungsstrategie dokumentieren.

## Alternativen
1. Alles SSR
2. Alles CSR
3. Route-spezifisches Hybrid-Rendering (präferierte Richtung)

## Konsequenzen
- Positive Effekte:
- Negative Effekte / Trade-offs:
- Risiken:

## Evidence
- Offizielle Quellen:
  - https://nuxt.com/docs/guide/concepts/rendering
  - https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
- Ergänzende Praxisquellen (optional):
  - https://stackoverflow.com/questions/77710465/nuxt-3-route-rules-ssr-false-for-specific-routes

## Umsetzung / Rollout
1. Route-Entscheidungen finalisieren
2. `routeRules` konfigurieren
3. Review + CI-Gates

## Verifikation
- Build erfolgreich
- Route-Verhalten wie spezifiziert
- KPI-Check (z. B. TTFB/SEO/Caching)

## Rollback
Rücknahme der `routeRules` auf letzten stabilen Stand; Regression via Vergleichsmessung bestätigen.

## Follow-ups
- KPI-Baseline dokumentieren
- Entscheidung nach erstem produktionsnahen Lauf revalidieren
