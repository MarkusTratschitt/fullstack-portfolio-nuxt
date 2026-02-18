# Module B — Boundary Checklist (Server/Data)

Datum: 2026-02-18  
Gewählter Flow: `dashboard-summary`

## Scope-Freeze
- In Scope:
  - `server/api/dashboard/summary.get.ts`
  - `composables/useDashboardSummary.ts`
  - `pages/dashboard.vue` (nur Präsentation + Wiring)
- Out of Scope:
  - Cross-feature Store-Rewrite
  - globale API-Client-Neuarchitektur

## Schichtungs-Checks
- [x] API-Zugriff liegt in `server/api/*`.
- [x] Page enthält keine direkten externen HTTP-Calls.
- [x] Composable kapselt Fetch-Logik und Rückgabezustände.
- [x] Error-Mapping für bekannte HTTP-Klassen (4xx/5xx) definiert.
- [x] Response-Contract zentral typisiert.

## State-Modell
- [x] `loading`: während initialem Request.
- [x] `success`: Daten vorhanden.
- [x] `empty`: gültiger, aber leerer Datensatz.
- [x] `error`: nutzerlesbare Fehlermeldung + technische Details intern.

## Contract-Entwurf
```ts
export interface DashboardSummaryResponse {
  totalProjects: number
  openTasks: number
  overdueTasks: number
  lastUpdatedIso: string
}
```

## Verification
- Typecheck ohne `any`-Leaks in Contract-Pfad.
- Page konsumiert nur `useDashboardSummary()`.
- Fehlerpfad reproduzierbar (simulierter 500er) und UI zeigt fallback-state.

## Official + Praxisquellen
- Official: https://nuxt.com/docs/getting-started/data-fetching
- Official: https://nuxt.com/docs/guide/directory-structure/server
- Official: https://www.typescriptlang.org/docs/
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75434573/nuxt-3-usefetch-vs-useasyncdata-differences

## Offene Punkte
- Retry-Strategie für transiente Fehler finalisieren (`manual retry` vs. `auto retry`).
- Testfall für Empty-State in bestehende Test-Suite aufnehmen.