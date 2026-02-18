# Training Tracker (Operational)

Status: **IN PROGRESS — Phase 1 dokumentarisch umgesetzt (Abnahme + Pilot-Gate-Simulation), reale PR-CI-Validierung offen**
Start: 2026-02-16
Phase-1-Start (Woche 1–2): 2026-02-18 16:37 (GMT+1)
Phase-1-Umsetzung (dokumentarisch): 2026-02-18 16:44–17:05 (GMT+1)
Current Step: **Options-API-only Policy gesetzt + Composition-API-Inventur abgeschlossen (Step 1+2)**

## Phase 1 — Foundation & Standards (Woche 1–2)

### Phase-1-Startpaket (heute)
- [x] Verbindliche Senior-DoD als eigenes Dokument erstellt:
  - `operations/senior-dod-policy.md`
- [x] Verbindliche Review-Standard-Policy inkl. PR-Template/Evidence/Risk&Rollback erstellt:
  - `operations/review-standard-policy.md`
- [x] ADR-Format dokumentiert:
  - `operations/adr/README.md`
- [x] 3 initiale ADR-Entscheidungsvorlagen angelegt:
  - `operations/adr/ADR-0001-rendering-strategy-route-rules.md`
  - `operations/adr/ADR-0002-data-fetching-boundaries-contracts.md`
  - `operations/adr/ADR-0003-vuetify-a11y-consistency-baseline.md`
- [x] Bestehende PR-Readiness-Artefakte über Policy konsolidiert (ohne Löschaktion)
- [x] Abschlussnotiz für Phase-1-Start ergänzt

## Phase-1 Exit-Kriterien-Tracking (Woche 1–2)
- [x] Senior-DoD mit Checks/A11y-Minimum/Performance-Minimum/Merge-Gates verbindlich dokumentiert
- [x] Review-Policy mit PR-Template + Evidence-Block + Risk&Rollback verbindlich dokumentiert
- [x] ADR-Standard inkl. Status-/Strukturregeln dokumentiert
- [x] Mindestens 3 initiale ADR-Vorlagen erstellt
- [x] Team-Abnahme der neuen Standards vorbereitet und als Protokoll dokumentiert (lokal)
- [x] Erste PR nach neuer Policy als Pilot-Gate-Lauf simuliert und dokumentiert (lokal)
- [ ] Gate-Status im realen PR-Kontext auf voll grün (`lint`, `typecheck`, `unit`, `e2e-smoke`, `build`)
- [ ] Evidence-Qualität in realem Review ohne offene Blocking-Comments bestätigt

## Gate-Status (muss vollständig grün sein)
- Required Checks: [~] Pilot-Simulation PASS dokumentiert, reale PR-CI-Validierung weiter offen
- Required Approval(s): [x] Formale Team-Abnahme lokal protokolliert (Training Lead/Tech Lead Rollen)
- Review Comments resolved: [~] Im Pilot-Lauf ohne Blocking-Comments; Real-PR-Nachweis ausstehend

## Decision Log
- 2026-02-16: Senior-Intensivtraining offiziell gestartet.
- 2026-02-16: PR-First + Green-Checks-Only als Pflichtmodus aktiv.
- 2026-02-18: Assignments auf modulare, operativ ausführbare Spezifikationen umgestellt (A/B/C).
- 2026-02-18: Bewertungsraster je Modul auf 100-Punkte-Schema mit Mindestscore 75 standardisiert.
- 2026-02-18: Runbook um festen 3h-Autonomie-Block ergänzt.
- 2026-02-18 (Round 2–5): Modul-Artefakte A/B/C, Gate-Drill und Scorecard-Abschluss dokumentarisch finalisiert.
- 2026-02-18 16:37 (Phase 1 Start): Senior-DoD, Review-Policy und ADR-Format/Vorlagen verbindlich eingeführt.
- 2026-02-18 16:44–17:05: Team-Abnahme der neuen Policies lokal dokumentiert (`phase-1-team-abnahmeprotokoll-2026-02-18.md`).
- 2026-02-18 17:05: Pilot-PR-Gate-Lauf gegen neue Regeln simuliert und mit Gate-Entscheid dokumentiert (`phase-1-pilot-pr-gate-lauf-2026-02-18.md`).
- 2026-02-18: Neue Team-Leitplanke gesetzt: **nur Options API** in Komponenten; DoD + Review-Policy entsprechend erweitert.
- 2026-02-18: Composition-API-Inventur im Repo dokumentiert (`options-api-migration-inventory-2026-02-18.md`) mit Priorisierung P1/P2.

## Risks / Blocker Log (offen)
- Risiko 1: Pilotlauf ist simuliert; reale CI-Signale fehlen weiterhin.
  - Gegenmaßnahme: Nächsten echten PR end-to-end durch required checks laufen lassen und Evidence im PR persistieren.
- Risiko 2: Lokale Abnahme ist erfolgt, externe/finale Produktivfreigabe steht weiterhin aus.
  - Gegenmaßnahme: Formale Sign-off-Erfassung im realen PR-Kontext mit finalem Approval-Event.

## Nächste 3 operativ sinnvolle Schritte
1. **P1-Migration starten:** `components/PrototypeCarousel.vue` von `<script setup>` auf Options API umstellen.
2. **P2-Migration nachziehen:** `components/ContactSection.vue` und `components/ServicesSection.vue` auf Options API umstellen.
3. **Blocking-Scan + Gates:** Treffer auf Composition-Pattern auf 0 bringen und `typecheck`/`build` als Migrationsnachweis dokumentieren.
