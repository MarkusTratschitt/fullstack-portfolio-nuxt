# Nuxt Team Playbook (v1)

## 1) Mission
Wir liefern Nuxt-Features schnell, stabil und nachvollziehbar — ohne Chaos, ohne Doppelarbeit.

## 2) Rollen

### Builder
- Implementiert Features in kleinen, reviewbaren Schritten
- Hält sich strikt an Akzeptanzkriterien
- Dokumentiert Annahmen und Risiken

### Reviewer
- Prüft Code auf Korrektheit, Wartbarkeit, Nuxt-Best-Practices
- Blockt unsaubere Abkürzungen
- Gibt klare, umsetzbare Review-Kommentare

### Debugger
- Reproduziert Bugs zuerst zuverlässig
- Liefert Root-Cause + minimalen Fix
- Schreibt Repro-Schritte in den Task zurück

### Release/Ops
- Verantwortet Build, Env, Deploy, Monitoring
- Prüft Rollback-Fähigkeit
- Kommuniziert Release-Risiken früh

---

## 3) Standard-Workflow pro Task

1. **Ziel (1 Satz)**
2. **Akzeptanzkriterien (3–5 Punkte)**
3. **Plan (max. 5 Schritte)**
4. **Implementierung in kleinen Commits**
5. **Selbstcheck**
- `lint` ✅
- `typecheck` ✅
- `test` (falls vorhanden) ✅
- `build` ✅
6. **Task-Report**
- Was wurde geändert?
- Warum so?
- Risiken?
- Nächster Schritt?

---

## 4) Definition of Done (DoD)

Ein Task ist nur “done”, wenn:
- Alle Akzeptanzkriterien erfüllt sind
- Lint/Typecheck/Build grün sind
- Edge Cases kurz geprüft wurden
- PR/Task-Notiz verständlich ist
- Offene Risiken klar benannt sind

---

## 5) Nuxt-spezifische Regeln

- SSR/CSR-Verhalten bewusst entscheiden (keine Zufälle)
- `runtimeConfig` sauber nutzen (keine Secrets im Client)
- Seiten haben Error-/Loading-Handling
- Data Fetching konsistent (`useFetch`/`useAsyncData` sauber)
- Keine unnötige Client-Only-Logik
- Performance beachten (Hydration, Payload, Re-Renders)

---

## 6) Eskalationsregel (Anti-Stuck)

Wenn ein Agent >15 Minuten festhängt:
- Postet:
1) Was blockiert?
2) Was wurde versucht?
3) Zwei Lösungsoptionen
4) Eigene Empfehlung
- Übergabe an passende Rolle statt weiter zu raten

---

## 7) Kommunikationsformat (kurz & klar)

### Task Start
- Ziel:
- Kriterien:
- Plan:
- Risiko:

### Task Ende
- Ergebnis:
- Checks:
- Offene Punkte:
- Empfehlung:

---

## 8) Guardrails

- Keine “magischen” Änderungen ohne Erklärung
- Kein Merge bei roten Checks
- Kein Scope-Creep ohne Rückfrage
- Sicherheit vor Geschwindigkeit bei Auth, Payments, User-Data

---

## 9) Täglicher 10-Minuten Sync

Jeder Agent meldet:
- Gestern geschafft
- Heute Fokus
- Blocker
- Brauche Hilfe bei

---

## 10) Qualitätsziel

Lieber 95% stabil + klar dokumentiert
als 100% schnell + später teuer.
