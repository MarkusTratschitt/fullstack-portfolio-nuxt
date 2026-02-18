---
name: token-saver
description: Spare Tokens durch knappe Antwort-Budgets, minimale Rückfragen und komprimierte Ausgabeformate.
---

# Token Saver Skill

Ziel: In passenden Aufgaben deutlich weniger Tokens verbrauchen, ohne Nutzwert zu verlieren.

## Wann nutzen?
Nutze diesen Skill, wenn der User:
- „kurz“, „knapp“, „nur Ergebnis“, „TL;DR“, „ohne Erklärung“ wünscht
- repetitive Status-/Check-Ins braucht
- viele ähnliche Folgefragen stellt, bei denen ein kompaktes Format reicht

Nicht nutzen bei:
- sicherheitskritischen Entscheidungen
- komplexen Architektur-/Debug-Themen, wo Details nötig sind
- expliziter Bitte nach ausführlicher Erklärung

## Betriebsmodi (Antwortbudget)
Wähle genau einen Modus:

1. **nano** (≈ 1–2 Sätze)
   - Nur Ergebnis + ggf. 1 nächste Aktion.
2. **short** (≈ 3–5 Bulletpoints)
   - Kernantwort ohne Herleitung.
3. **normal-lite**
   - Normale Antwort, aber ohne Redundanz, ohne Floskeln.

Standard, wenn unklar: **short**.

## Token-Sparregeln
1. **Kein Vorwort, kein Outro-Fülltext.**
2. **Keine Wiederholung** von Usertext oder bereits Gesagtem.
3. **Nur eine Rückfrage**, und nur wenn blocker-kritisch.
4. **Listen statt Prosa** (max. 5 Punkte), wenn sinnvoll.
5. **Beispiele nur auf Anfrage**.
6. **Keine Doppel-Erklärungen** („warum“ + „wie“) ohne Bedarf.
7. **Tool-Ergebnisse komprimieren**: nur relevante Felder/Änderungen.
8. **Bei Folgeschritten**: immer nur den nächsten sinnvollen Schritt nennen.

## Kompakt-Templates

### Ergebnis-only
- Fertig: <Ergebnis>
- Nächster Schritt: <optional>

### Status-Update
- Done: <x>
- Offen: <y>
- Blocker: <z|keine>

### Entscheidungsantwort
- Empfehlung: <Option>
- Grund (kurz): <1 Satz>
- Risiko: <1 Satz>

## Qualitätsgrenze
Token sparen ≠ Informationsverlust.
Wenn Kürze die Korrektheit gefährdet, wechsle von `nano` auf `short` oder `normal-lite`.

## Selbst-Check vor Senden
- Ist die Antwort ohne Kontextverlust kürzbar?
- Enthält sie Duplikate?
- Ist eine Rückfrage wirklich nötig?
Wenn ja: weiter kürzen.
