# Module B — Contract Decisions (Round 2)

Datum: 2026-02-18

## Entscheidung B1: Server-first Datenzugriff
- Source URL: https://nuxt.com/docs/guide/directory-structure/server
- Abschnitt/Zitat: Server-Routen sind der vorgesehene Ort für backend-nahe Logik in Nuxt.
- Applied Decision: Externe Datenaggregation ausschließlich in `server/api/dashboard/summary.get.ts`.
- Trade-off: Mehr Strukturaufwand, dafür sauberere Security- und Boundary-Kontrolle.
- Verification Step: Keine direkten Fremd-API-Calls in `pages/dashboard.vue`.
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75434573/nuxt-3-usefetch-vs-useasyncdata-differences

## Entscheidung B2: Composable als einziger UI-Entry für Fetching
- Source URL: https://nuxt.com/docs/getting-started/data-fetching
- Abschnitt/Zitat: `useFetch`/`useAsyncData` sollen Datenzugriff in Nuxt idiomatisch kapseln.
- Applied Decision: `useDashboardSummary()` kapselt Query-Key, Fetch, Error-State-Mapping.
- Trade-off: Zusätzliche Abstraktion, aber höhere Wiederverwendbarkeit und Testbarkeit.
- Verification Step: Page konsumiert nur Composable-Rückgabe (`data`, `status`, `error`, `refresh`).
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/76931540/nuxt-3-where-to-place-fetch-logic-composable-or-page

## Entscheidung B3: Strikter typisierter Response-Contract
- Source URL: https://www.typescriptlang.org/docs/handbook/2/objects.html
- Abschnitt/Zitat: Explizite Object-Types stabilisieren API-Verträge und Consumer-Code.
- Applied Decision: `DashboardSummaryResponse` als shared Contract zwischen Server-Route und Composable.
- Trade-off: Pflegeaufwand bei Schemaänderungen, dafür weniger Runtime-Überraschungen.
- Verification Step: Typecheck bricht bei Contract-Drift sofort.
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/74108207/typescript-interface-for-api-response-best-practice

## Fehlermodell
- 4xx: Nutzerhinweis mit Handlungsvorschlag.
- 5xx: Technischer Fehlertext generisch + Retry-Hinweis.
- Network Timeout: dedizierter Offline/Retry-Hinweis.

## Nächster Umsetzungsschritt
- Kurztestmatrix für loading/empty/error/success in Vitest ergänzen.