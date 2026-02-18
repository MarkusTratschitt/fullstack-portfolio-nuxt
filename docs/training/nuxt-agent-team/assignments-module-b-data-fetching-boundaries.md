# Assignment Modul B — Data Fetching & Server Boundaries

## Ziel
Einen bestehenden Datenfluss auf server-first Datenzugriff umstellen und klare Verantwortlichkeiten zwischen `server/`, `composables/` und `pages/` herstellen.

## Offizielle Quellen (Pflicht)
- Nuxt Data Fetching: https://nuxt.com/docs/getting-started/data-fetching
- Nuxt Server Directory/API Routes: https://nuxt.com/docs/guide/directory-structure/server
- TypeScript Handbook (Narrowing/Types): https://www.typescriptlang.org/docs/

## Aufgabenstellung
1. Wähle einen realen Flow mit API-Zugriff (z. B. Dashboard-Widget oder Settings-Load).
2. Implementiere/Refactore:
   - `server/api/...` Endpoint mit typisiertem Response-Contract
   - `composables/useXxx.ts` als konsumierende Abstraktion
   - `pages/...` ohne Business-Logik-Leaks
3. Ergänze explizite Zustände: loading, empty, error, success.
4. Dokumentiere Fehlerstrategie (HTTP-Fehler, Retry-Verhalten, Nutzerfeedback).

## Deliverables
- Code-Änderungen im Feature-Branch (server + composable + page)
- `operations/module-b-boundary-checklist.md`
- Kurzprotokoll: `operations/module-b-contract-decisions.md`

## Pflicht-Template: Evidence-Block (pro Kernentscheidung)
```md
### Entscheidung: <Titel>
- Source URL: <official link>
- Abschnitt/Zitat: "..."
- Applied Decision: <Boundary/Contract-Entscheidung>
- Trade-off: <Komplexität, DX, Runtime>
- Verification Step: <Test/Check im PR>
```

## Akzeptanzkriterien
- Server-Logik liegt in `server/`, nicht in Page-Komponenten.
- Response-Contract ist typisiert und im Consumer wiederverwendet.
- Fehler-/Empty-/Loading-State sind sichtbar und testbar.
- Mindestens 2 source-backed Architekturentscheidungen im PR-Text.
- Lint/Typecheck/Tests laufen ohne neue Warnungen.

## Bewertungsraster (100 Punkte)
- 35 P: Saubere Schichtung und Boundary-Disziplin
- 25 P: Typensicherheit (Contract, Consumer, Fehlerpfade)
- 20 P: Fehlerbehandlung und UX-Resilienz
- 10 P: Qualität der offiziellen Quellenbezüge
- 10 P: PR-Reife (Nachvollziehbarkeit, Reviewbarkeit)

## Mindestscore (Pass)
- **≥ 75 Punkte** und keine kritische Boundary-Verletzung.