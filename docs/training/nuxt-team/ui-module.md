# Senior Training Modul: Vuetify + Pug + Less + i18n in Nuxt 3

## Zielgruppe
Senior Frontend Engineers im Nuxt-3-Team, die eine konsistente, barrierearme und lokalisierbare UI-Architektur mit Vuetify verantworten.

## Lernziele (Objectives)
Nach dem Modul können Teilnehmende:
1. **Eine Nuxt-3 UI-Schicht sauber strukturieren** (Komponenten, Tokens, Übersetzungen, Zustände) mit Vuetify als Primär-UI-Layer.
2. **Pug-Templates lesbar und wartbar** für komplexe Komponenten einsetzen (Slots, Listen, Conditionals, semantische Struktur).
3. **Less für Design-Tokens und konsistente Styling-Regeln** nutzen, ohne ad-hoc CSS/Hex-Werte.
4. **i18n robust integrieren** (Key-Namenskonvention, Parametrisierung, Fallbacks, Plurals, Key-Ownership).
5. **A11y und Team-Konsistenz systematisch reviewen** anhand klarer Standards (WCAG AA, Keyboard-Flows, States, Responsive).

---

## 20-Minuten-Lektionsplan

### 0:00–2:00 — Kontext & Qualitätsbar
- Warum diese Kombination: **Vuetify (Produktivität)** + **Pug (Template-Klarheit)** + **Less (Token-basierte Konsistenz)** + **i18n (globale Produktreife)**.
- Qualitätsmaßstab: „done“ heißt nicht nur funktional, sondern auch konsistent, zugänglich, lokalisiert.

### 2:00–6:00 — Architektur-Blueprint (Nuxt 3)
- Empfohlene Struktur:
  - `components/ui/*` für wiederverwendbare UI-Bausteine
  - `features/<feature>/*` für feature-nahe Views und Locale-Keys
  - `locales/common/*` für Shared-Text
  - `assets/styles/tokens.less` für zentrale Tokens
- Prinzipien:
  - Vuetify-Primitives vor Custom-Reimplementierung
  - Keine hardcodierten User-Strings
  - Keine zufälligen Spacing-/Color-Werte

### 6:00–10:00 — Pug + Vuetify in der Praxis
- Lesbare Pug-Struktur für komplexe UIs:
  - klare Einrückung, semantische Container, benannte Slots
  - bedingte UI-States (`loading`, `empty`, `error`, `success`) explizit modellieren
- Beispielmuster:
  - `v-form`, `v-text-field`, `v-btn`, `v-alert`, `v-progress-circular`
  - Labels/ARIA-Attribute konsequent setzen

### 10:00–14:00 — Less + Design Tokens
- Token-first statt Inline-Styles:
  - Spacing-Skala, Radius, Typografie, Farbrollen
- Regeln:
  - keine random Hex-Werte in Komponenten
  - Dark/Light Verhalten mit Tokens prüfen
  - konsistente Variantenutzung (z. B. filled/outlined/text)

### 14:00–17:00 — i18n Integration (Policy-driven)
- Key-Pattern: `feature.section.element.state`
- Ownership:
  - Feature-Texte: `features/<feature>/locales/*`
  - Shared-UI: `locales/common/*`
- Muss-Kriterien:
  - parametrisierte Strings für dynamische Inhalte
  - locale-aware Plurals
  - Fallback-Locale getestet
  - keine verwaisten Keys

### 17:00–20:00 — Review-Flow & Abschluss
- Kurz-Review gegen Checklisten (A11y, Konsistenz, i18n, DoD).
- Entscheidung: Ready / Changes required / Blocked.

---

## Standards: Accessibility & Consistency

### A) Accessibility-Standards (Minimum: WCAG AA)
1. **Form Controls mit Labels**: jedes Eingabefeld hat ein sichtbares Label oder korrektes ARIA-Label.
2. **Keyboard-Navigation vollständig**: alle interaktiven Elemente per Tastatur erreichbar.
3. **Focus-Management sichtbar/logisch**: Fokus-Indikator nicht entfernen; Reihenfolge entspricht visueller Logik.
4. **Kontraste >= WCAG AA**: insbesondere Text, Icons, Disabled/Hint-Zustände prüfen.
5. **Zustände explizit**: loading/empty/error/success immer definieren (nicht „implizit“ im Verhalten verstecken).
6. **Responsives Verhalten**: mobile/tablet/desktop prüfen, inklusive Hydration ohne Layout-Sprünge.

### B) Konsistenz-Standards (aus Team-Checklisten abgeleitet)
1. **Spacing nur aus gemeinsamer Skala**.
2. **Vuetify-Primitives bevorzugen** vor Custom-Komponenten.
3. **Variants konsistent** einsetzen (filled/outlined/text nicht beliebig mischen).
4. **Strict Typing** in Props/Composables beibehalten.
5. **Tokens statt ad-hoc Styles** (keine random Hex/Margins/Paddings).
6. **Dark/Light explizit validieren**.
7. **Keine hardcodierten UI-Strings**; i18n vollständig.

---

## Praktische Labs (3 Übungen)

## Lab 1 — Refactor einer Form-Komponente auf Senior-Qualität
**Dauer:** 20–30 Min (asynchron)  
**Ziel:** Eine bestehende Nuxt/Vuetify-Form in Pug + i18n + A11y standardisieren.

**Aufgabe:**
- Migriere ein Formular auf Pug-Struktur (lesbare Sections + Slots).
- Ersetze alle hardcodierten Strings mit i18n-Keys.
- Ergänze fehlende Labels, Keyboard-Flow und Statusdarstellung.

**Abnahmekriterien:**
- Kein hardcodierter User-Text.
- States: loading, error, success vorhanden.
- Fokusfolge und Labels korrekt.
- Key-Namen folgen `feature.section.element.state`.

## Lab 2 — Tokenisierung mit Less + Theme-Konsistenz
**Dauer:** 20–30 Min  
**Ziel:** Inkonsistente Styles auf zentrale Tokens migrieren.

**Aufgabe:**
- Ersetze ad-hoc Abstände/Farben durch Less-Tokens.
- Vereinheitliche Component-Variants (z. B. Buttons/Inputs).
- Prüfe Light/Dark visuell und kontrastbezogen.

**Abnahmekriterien:**
- Keine zufälligen Hex-Werte im Component-Style.
- Spacing folgt zentraler Skala.
- Variants sind teamweit konsistent.

## Lab 3 — i18n Robustness: Plurals, Params, Fallback
**Dauer:** 20–30 Min  
**Ziel:** Produktionsreife Lokalisierung sicherstellen.

**Aufgabe:**
- Implementiere parametrisierte Meldungen und Pluralformen.
- Validiere Fallback-Locale und fehlende Übersetzungen.
- Entferne verwaiste Keys nach UI-Bereinigung.

**Abnahmekriterien:**
- Dynamische Inhalte nur parametriert.
- Pluralisierung locale-aware.
- Keine orphan keys.
- Alle aktiven Locales vollständig.

---

## Review-Rubrik (Senior-Level)

Bewertungsskala je Kriterium: **0 = nicht erfüllt**, **1 = teilweise**, **2 = erfüllt**  
Maximalpunktzahl: **20**

| Kriterium | Beschreibung | Punkte (0–2) |
|---|---|---|
| Architekturklarheit | Saubere Trennung UI/Feature/Locale/Styles |  |
| Vuetify-Nutzung | Primitives priorisiert, Varianten konsistent |  |
| Pug-Qualität | Lesbarkeit, semantische Struktur, geringe Komplexität |  |
| Less-Tokenisierung | Keine ad-hoc Styles, konsequente Tokens |  |
| i18n-Key-Design | Naming-Konvention korrekt, Ownership klar |  |
| i18n-Vollständigkeit | Keine hardcodierten Strings, aktive Locales gepflegt |  |
| A11y Forms & Fokus | Labels, Tastaturzugang, Fokus sichtbar/logisch |  |
| Kontrast & visuelle A11y | WCAG-AA-konform inkl. Zustände |  |
| UI-Zustände | loading/empty/error/success vollständig |  |
| Responsive/Hydration | Breakpoints + kein Layout-Jump |  |

### Ergebnisinterpretation
- **18–20:** Produktionsreif (Senior-Qualität)
- **14–17:** Gute Basis, gezielte Nacharbeit
- **10–13:** Deutliche Lücken, erneute Iteration nötig
- **<10:** Rework erforderlich vor Merge

---

## Quick-Check vor Merge (1-Minute Gate)
- [ ] Keine hardcodierten User-Texte
- [ ] i18n-Keys folgen Konvention und sind vollständig
- [ ] A11y-Basics (Labels, Keyboard, Focus, Kontrast) erfüllt
- [ ] States vollständig und getestet
- [ ] Spacing/Colors/Variants entsprechen Team-Standards
- [ ] DoD-Kriterien für UI-Änderungen erfüllt
