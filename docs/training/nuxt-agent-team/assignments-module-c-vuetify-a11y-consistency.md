# Assignment Modul C — Vuetify A11y & Design Consistency

## Ziel
Ein bestehendes UI-Feature auf konsistente Vuetify-Komponenten, Token-Nutzung und belastbare Accessibility-Basics umstellen.

## Offizielle Quellen (Pflicht)
- Vuetify Components: https://vuetifyjs.com/en/components/all/
- Vuetify Theming: https://vuetifyjs.com/en/features/theme/
- Vuetify Accessibility: https://vuetifyjs.com/en/features/accessibility/
- Vue Accessibility Guide: https://vuejs.org/guide/best-practices/accessibility.html

## Aufgabenstellung
1. Wähle einen UI-Bereich mit Inkonsistenzen (Spacing, Labels, States, Komponentenmix).
2. Standardisiere auf Vuetify-Konventionen:
   - einheitliche Komponentenfamilie
   - Token-basierte Varianten (Farben, Typo, Spacing)
   - klare Interaktionszustände (hover/focus/disabled/error)
3. Prüfe A11y-Mindeststandard:
   - Tastaturbedienbarkeit
   - Labels/ARIA wo nötig
   - Kontrast/Fokus-Sichtbarkeit
4. Dokumentiere verbleibende A11y-Risiken inkl. Priorisierung (P1/P2/P3).

## Deliverables
- Refactor im Feature-Branch (UI-Komponenten)
- `operations/module-c-a11y-checklist.md`
- `operations/module-c-design-consistency-report.md`

## Pflicht-Template: Evidence-Block (pro UI-Entscheidung)
```md
### UI-Entscheidung: <Titel>
- Source URL: <official link>
- Abschnitt/Zitat: "..."
- Applied Decision: <Komponente/Pattern/Theme>
- Trade-off: <Konsistenz vs. Aufwand>
- Verification Step: <A11y/Review-Check>
```

## Akzeptanzkriterien
- Vorher/Nachher-Diff zeigt reduzierte UI-Inkonsistenz.
- Keyboard-Navigation ist für den gewählten Scope funktionsfähig.
- Alle interaktiven Elemente haben nachvollziehbare Beschriftung.
- Mindestens 2 offizielle Quellen sind direkt mit Entscheidungen verknüpft.
- Offene A11y-Risiken sind priorisiert und next-step-fähig dokumentiert.

## Bewertungsraster (100 Punkte)
- 30 P: Design-Konsistenz und Wiederverwendbarkeit
- 30 P: Accessibility-Qualität im umgesetzten Scope
- 20 P: Operative Dokumentation (Checklist + Risikolog)
- 10 P: Saubere Nutzung offizieller Referenzen
- 10 P: Umsetzbarkeit im Teamalltag (klarer Follow-up-Pfad)

## Mindestscore (Pass)
- **≥ 75 Punkte** und keine kritische A11y-Blockade (P1 ungeklärt).