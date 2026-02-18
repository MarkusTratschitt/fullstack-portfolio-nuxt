# Review Standard Policy — Nuxt Agent Team (Verbindlich)

Status: **BINDING**  
Gültig ab: 2026-02-18 (Phase 1 Start, Woche 1–2)

## 1) Zielbild
Reviews sichern Architektur, Qualität und Lieferfähigkeit.  
Policy gilt für alle PRs (A/B/C + Folgearbeiten) und ergänzt die `senior-dod-policy.md`.

## 2) Verbindlicher Review-Flow
1. Author erstellt PR mit vollständigem Template (siehe unten)
2. Selbstcheck gegen DoD + Gate-Checklist
3. Review-Request an zuständigen Reviewer
4. Reviewer bewertet in Reihenfolge:
   - Scope & Architekturgrenzen
   - Typisierung/Contracts
   - Tests & CI-Gates
   - A11y/Performance/Risiko
5. Blocking Comments werden vor Merge aufgelöst
6. Merge erst bei grünen Merge-Gates

## 3) PR-Template (Pflicht)
Copy/Paste für jede neue PR:

```md
## Summary
- Problem:
- Scope:
- Out of scope:

## Source-backed Decisions
1. Decision:
   - Source URL:
   - Section/Quote:
   - Applied Decision:
   - Trade-off:
   - Verification Step:

2. Decision:
   - Source URL:
   - Section/Quote:
   - Applied Decision:
   - Trade-off:
   - Verification Step:

## Validation
- [ ] lint
- [ ] typecheck
- [ ] unit-tests
- [ ] e2e-smoke
- [ ] build

## Evidence Block
- Architecture Boundary Evidence:
- A11y Evidence (falls UI betroffen):
- Performance Evidence (falls Rendering/Data/UI betroffen):
- Test Evidence (inkl. negative/edge paths):

## Risk & Rollback
- Risks (P1/P2/P3):
- Mitigations:
- Rollback plan (konkret, schrittweise):
- Trigger für Rollback:

## Reviewer Guide
- Files to review first:
- What to test manually:
- Known limitations:
```

## 4) Mindestinhalte für Reviews
Reviewer markieren PR als approve-fähig nur wenn:
- Evidence-Block vollständig ist
- Risk & Rollback konkret und plausibel ist
- CI-Gates grün sind
- keine offenen blocking comments existieren
- keine Source-of-Truth-Verletzung vorliegt (offizielle Doku fehlt)
- **keine Composition-API-Nutzung in Komponenten** enthalten ist (nur Options API)

### 4.1 Blocking-Check: Options API only
PR ist automatisch **changes requested**, wenn einer der folgenden Treffer im Komponenten-Scope auftaucht:
- `<script setup>`
- `ref(`, `reactive(`, `computed(`, `watch(`, `watchEffect(`
- `onMounted(`, `onUnmounted(`, weitere Composition-Lifecycle-Hooks

## 5) Merge-Entscheidung
**No Merge before Green Required Checks.**

Zusätzlich:
- required approval vorhanden
- unresolved blocking comments = 0
- kein offener High-Risk ohne Mitigation

## 6) Konsolidierung bestehender Artefakte
Diese Policy konsolidiert und ersetzt für den verbindlichen Prozess insbesondere:
- `operations/pr-readiness-pack.md` (Template/Gates als Referenzinhalt)
- modulbezogene PR-Beschreibungen (`pr-description-module-a.md`, `...-b.md`, `...-c.md`) als operative Instanzen

Die genannten Dokumente bleiben als Arbeits-/Beispielartefakte bestehen.
