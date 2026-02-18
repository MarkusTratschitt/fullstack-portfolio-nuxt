# Day 01 — Assignment PR Tasks (Senior)

## Assignment 1: Nuxt3 Modular Feature Slice

### Ziel
Ein klar modularisiertes Feature mit strikter Typisierung und sauberer PR-Disziplin liefern.

### Owner
- Lead: Markus
- Reviewer: QA Review

### Scope (Pflicht)
- `components/` für UI-Teile
- `composables/` für wiederverwendbare Logik
- `services/` für externe/business-nahe Calls
- optional `stores/` (nur wenn State-Sharing nötig)

### Akzeptanzkriterien
- Keine Business-Logik im Page-Glue.
- Service-Vertrag strikt typisiert.
- Loading/Empty/Error/Success States vorhanden.
- i18n-konforme User-Texte (keine hardcoded UX-Texte).
- Required checks grün: lint/typecheck/unit-tests/e2e-smoke/build.

### PR-Checkliste (muss vollständig sein)
- [ ] Scope und Ziel im PR klar beschrieben
- [ ] Risiko + Rollback notiert
- [ ] Tests ergänzt/angepasst
- [ ] Review-Kommentare resolved
- [ ] Mindestens 1 erforderliches Approval
- [ ] Kein Merge vor grünen Required Checks

### Ready-to-run Git Flow
```bash
# branch
 git checkout -b training/day1-modular-feature

# implement + commit
 git add .
 git commit -m "feat(training): day1 modular nuxt feature slice"
 git push -u origin HEAD

# create PR
 gh pr create --base master --head training/day1-modular-feature \
   --title "training(day1): modular nuxt feature slice" \
   --body "Implements day1 modular feature slice with strict typing and required quality gates."

# watch checks
 gh pr checks --watch
```
