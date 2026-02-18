# ADR-0002 — Data Fetching Boundaries & Typed Contracts

- Status: Proposed
- Datum: 2026-02-18
- Entscheider: Nuxt Agent Team (Training Lead + Tech Lead)
- Kontextbereich: Data / Server Boundary

## Kontext
Datenlogik und UI-Logik müssen sauber getrennt sein; API-Contracts sind strikt typisiert, um Fehler früh zu erkennen.

## Entscheidung
(Template) Server-first Datenbereitstellung mit klarer Schichtung (`server/` → `composables/` → `pages/components`) und typisierten Contracts.

## Alternativen
1. Fetching direkt in Pages
2. Komplett client-seitiges Fetching ohne Server-Boundary
3. Server-first + typisierte Boundary (präferierte Richtung)

## Konsequenzen
- Positive Effekte:
- Negative Effekte / Trade-offs:
- Risiken:

## Evidence
- Offizielle Quellen:
  - https://nuxt.com/docs/getting-started/data-fetching
  - https://nuxt.com/docs/guide/directory-structure/server
  - https://www.typescriptlang.org/docs/
- Ergänzende Praxisquellen (optional):
  - https://stackoverflow.com/questions/75434573/nuxt-3-usefetch-vs-useasyncdata-differences

## Umsetzung / Rollout
1. Contract-Typen definieren
2. API-Route + Composable Boundary ausrichten
3. Zustandsmatrix (loading/empty/error/success) absichern

## Verifikation
- typecheck grün
- Tests decken error + empty/success ab
- Keine Business-Logik-Leaks in Pages

## Rollback
Boundary-Refactor commitweise revertieren; stabile Contract-Version wiederherstellen.

## Follow-ups
- Error-Telemetrie ergänzen
- Retry-Strategie final standardisieren
