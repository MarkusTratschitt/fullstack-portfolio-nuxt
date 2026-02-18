# Senior Definition of Done (DoD) — Verbindliche Policy

Status: **BINDING**  
Gültig ab: 2026-02-18 (Phase 1 Start, Woche 1–2)  
Geltungsbereich: Alle PRs im Nuxt-Agenten-Team (Modul A/B/C und Folgemodule)

## 1) Zweck
Diese DoD definiert die minimale senior-level Lieferqualität.  
Ein PR gilt nur dann als „done“, wenn **alle** Pflichtpunkte erfüllt und belegbar sind.

## 2) Pflicht-Checks (Quality Gates)
Vor Merge müssen folgende Gates auf **grün** stehen:
- `lint`
- `typecheck`
- `unit-tests`
- `e2e-smoke` (oder dokumentierter äquivalenter Smoke-Nachweis)
- `build`

Zusätzlich verpflichtend:
- Kein unbegründetes `any` in Kernlogik
- Kein offener blocker/critical Defect
- Scope entspricht PR-Beschreibung (keine stillen Scope-Erweiterungen)

## 3) A11y-Minimum (MUSS)
Jeder UI-relevante PR muss mindestens nachweisen:
- Semantisch korrekte Interaktionselemente (Button/Link/Inputs)
- Sichtbarer Focus-State bei Keyboard-Navigation
- Bedienbarkeit via Tastatur im betroffenen Scope
- Labels/Accessible Names für Inputs/Icon-Buttons
- Kontrastprüfung für neue/angepasste kritische UI-Flächen (kein P1-A11y-Risiko offen)

Nicht erfüllt, wenn:
- P1-A11y-Risiko offen bleibt
- Keyboard-Flow bricht
- Interaktive Elemente keinen zugänglichen Namen haben

## 4) Performance-Minimum (MUSS)
Jeder PR mit Rendering-/Data-/UI-Auswirkung muss mindestens enthalten:
- Klaren Performance-Impact-Check (z. B. TTFB, Payload/Bundles, Cache/routeRules)
- Dokumentierte Entscheidung zu SSR/CSR/Hybrid (falls routing-/rendering-relevant)
- Keine offensichtliche Regression ohne Mitigation + Rollback

Nicht erfüllt, wenn:
- Performance-Risiko bekannt, aber unbehandelt bleibt
- routeRules/Fetch-Strategie ohne begründete Entscheidung geändert werden

## 5) Merge-Gates (hart, nicht verhandelbar)
Merge ist nur erlaubt, wenn:
1. Alle required checks grün sind
2. Mindestens 1 qualifiziertes required Approval vorliegt
3. Alle Review-Kommentare (blocking) aufgelöst sind
4. Risiko- und Rollback-Block im PR ausgefüllt ist
5. Evidence-Block mit offiziellen Quellen vollständig ist

## 6) Nachweisformat im PR (Pflicht)
Jeder PR muss enthalten:
- Source-backed Decisions (offizielle Quelle, Abschnitt/Übernahme)
- Validation-Status je Check
- A11y-/Performance-Nachweise (wo relevant)
- Risk & Rollback
- Reviewer Guide

## 7) Abweichungen (Exception Handling)
Abweichungen sind nur temporär erlaubt mit:
- expliziter Freigabe durch Training Lead/Tech Lead
- dokumentierter Begründung
- Ticket/Follow-up inkl. Frist

Ohne diese drei Punkte gilt der PR als **nicht done**.
