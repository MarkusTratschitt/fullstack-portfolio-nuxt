# ADR Format — Nuxt Agent Team

Status: **BINDING FORMAT**  
Gültig ab: 2026-02-18 (Phase 1 Start, Woche 1–2)

## Zweck
Architecture Decision Records (ADRs) dokumentieren wichtige technische Entscheidungen nachvollziehbar und auditierbar.

## Datei- und Nummernkonvention
- Pfad: `docs/training/nuxt-agent-team/operations/adr/`
- Name: `ADR-XXXX-<kurztitel>.md`
- Beispiel: `ADR-0001-rendering-strategy-route-rules.md`

## Statuswerte
- Proposed
- Accepted
- Superseded
- Rejected

## Pflichtstruktur
```md
# ADR-XXXX — Titel

- Status: Proposed | Accepted | Superseded | Rejected
- Datum: YYYY-MM-DD
- Entscheider: Rolle/Name
- Kontextbereich: (z. B. Rendering, Data Boundaries, UI/A11y)

## Kontext
Problem, Auslöser, Randbedingungen, Constraints.

## Entscheidung
Klare Entscheidung inkl. Scope (was ist drin / nicht drin).

## Alternativen
Mindestens 2 Alternativen mit kurzer Bewertung.

## Konsequenzen
- Positive Effekte
- Negative Effekte / Trade-offs
- Risiken

## Evidence
- Offizielle Quellen (Pflicht)
- Ergänzende Praxisquellen (optional, z. B. Stack Overflow)

## Umsetzung / Rollout
Konkrete Umsetzungsschritte, Reihenfolge, Owner.

## Verifikation
Wie die Entscheidung überprüft wird (Checks, Metriken, Tests).

## Rollback
Wann und wie zurückgerollt wird.

## Follow-ups
Offene Punkte, Fristen, Folgetickets.
```

## Qualitätsregeln
- Keine ADR ohne dokumentierte Alternative
- Keine ADR ohne Evidence
- Keine „Accepted“-ADR ohne Verifikations- und Rollback-Abschnitt
