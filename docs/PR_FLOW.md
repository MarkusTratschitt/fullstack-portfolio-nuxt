# PR Flow (No Merge Before Green Checks)

## Ziel
Ein klarer, wiederholbarer Ablauf für Änderungen mit harter Regel:
**Kein Merge, bevor alle required Checks erfolgreich sind.**

## Standard-Ablauf

1. **Branch erstellen**
   - Nie direkt auf `master` arbeiten/pushen.
   - Beispiel:
     ```bash
     git checkout -b fix/<kurze-beschreibung>
     ```

2. **Änderungen umsetzen**
   - Dateien anlegen/anpassen.
   - Lokal (wenn möglich) kurz prüfen.

3. **Commit + Push auf Feature-Branch**
   ```bash
   git add .
   git commit -m "<prägnante message>"
   git push -u origin HEAD
   ```

4. **PR erstellen (gegen `master`)**
   ```bash
   gh pr create --base master --head <branch> --title "<title>" --body "<body>"
   ```

5. **Checks beobachten**
   ```bash
   gh pr checks <pr-number> --watch
   ```
   Alternativ:
   ```bash
   gh run list --branch <branch> --limit 10
   gh run view <run-id> --log-failed
   ```

6. **Failing Checks beheben**
   - Fehlerlog analysieren.
   - Fix committen.
   - Auf denselben PR-Branch pushen:
     ```bash
     git push origin HEAD:<branch>
     ```
   - Wieder zu Schritt 5.

7. **Merge-Gates (alle Pflichtbedingungen)**
   Merge nur wenn **alles** erfüllt ist:
   - Required Checks: **grün**
   - Mindestens 1 Approval (Write Access)
   - Alle Review-Kommentare resolved

8. **Erst dann mergen**
   - UI oder CLI:
     ```bash
     gh pr merge <pr-number> --squash --delete-branch
     ```

9. **Lokal aufräumen**
   ```bash
   git checkout master
   git fetch origin
   git pull --ff-only
   ```

---

## Harte Policy für den Agenten
- Kein Merge-Vorschlag vor grünen Checks.
- Kein "wird schon passen".
- Bei roten Checks immer erst Logs holen, dann gezielt fixen.
- Immer auf PR-Branch pushen, nie auf protected `master`.
