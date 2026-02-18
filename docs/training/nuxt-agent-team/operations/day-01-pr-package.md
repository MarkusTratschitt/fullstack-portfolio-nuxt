# Day 01 — PR Package (Start)

## PR 1: Foundation Baseline & Standards

### Branch
`training/day1-foundation-baseline`

### Scope
- Baseline checks ausführen und dokumentieren
- Architektur-/Modulgrenzen als verbindliche Regeln festhalten
- Day-1 Assignment Brief finalisieren

### Files in this package
- `docs/training/nuxt-agent-team/operations/day-01-baseline-report.md`
- `docs/training/nuxt-agent-team/operations/day-01-architecture-decisions.md`
- `docs/training/nuxt-agent-team/operations/day-01-assignment-pr-tasks.md` (review/update)

### Merge Gates
- Required checks grün
- 1 Approval
- Keine unresolved comments

---

## PR 2: Assignment 1 Implementation

### Branch
`training/day1-modular-feature`

### Scope
- Modular Feature Slice implementieren (`components/composables/services`)
- strikte Typisierung + states + i18n
- Tests ergänzen

### Merge Gates
- lint/typecheck/unit-tests/e2e-smoke/build grün
- 1 Approval
- Kommentare resolved

---

## Ready-to-run Commands
```bash
cd /Users/markustratschitt/.openclaw/workspace/fullstack-portfolio-nuxt

# PR 1
 git checkout -b training/day1-foundation-baseline
 # Dateien hinzufügen/aktualisieren
 git add .
 git commit -m "docs(training): day1 foundation baseline and architecture decisions"
 git push -u origin HEAD
 gh pr create --base master --head training/day1-foundation-baseline \
   --title "training(day1): foundation baseline and standards" \
   --body "Documents baseline checks, architecture boundaries and day1 assignment setup."

# danach PR 2 analog auf eigenem Branch
```
