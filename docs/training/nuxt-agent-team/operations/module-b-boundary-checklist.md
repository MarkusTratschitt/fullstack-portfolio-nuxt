# Module B — Boundary Checklist (Server/Data)

Datum: 2026-02-18  
Status: **FINALISIERT (inkl. Testmatrix)**  
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

## Testmatrix (ausgearbeitet)
| Zustand | Testtyp | Stimulus | Erwartung |
|---|---|---|---|
| loading | Unit | Request unresolved halten | `status === 'pending'`, Loader sichtbar |
| empty | Unit | 200-Response mit neutralen/leeren Werten | Empty-State-Text + keine Fehlermeldung |
| success | Unit/E2E | 200-Response mit Summendaten | KPIs/Counter gerendert, `status === 'success'` |
| error | Unit/E2E | 500-Response simulieren | Fehlerhinweis sichtbar, `refresh()` verfügbar |

## Verification
- Typecheck ohne `any`-Leaks in Contract-Pfad.
- Page konsumiert nur `useDashboardSummary()`.
- Fehlerpfad reproduzierbar (simulierter 500er) und UI zeigt fallback-state.
- Empty-/Success-Fälle explizit im Testdesign erfasst.

## Retry-Entscheidung
- **Final:** `manual retry` (kein automatisches Retry in UI).
- Begründung: transparente Nutzerkontrolle, weniger Lastspitzen, klareres Fehlerverhalten für reproduzierbare Tests.

## Official + Praxisquellen
- Official: https://nuxt.com/docs/getting-started/data-fetching
- Official: https://nuxt.com/docs/guide/directory-structure/server
- Official: https://www.typescriptlang.org/docs/
- Supplementary (Stack Overflow): https://stackoverflow.com/questions/75434573/nuxt-3-usefetch-vs-useasyncdata-differences

## Offene Punkte
- Keine offenen Punkte im definierten Modul-B-Scope.