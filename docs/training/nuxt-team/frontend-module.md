# Senior Training Modul: Nuxt 3 + Pinia + VueUse Architektur

## Ziele (Objectives)
Nach 25 Minuten können Senior-Entwickler:innen:
- Architekturentscheidungen sauber treffen: **Composable vs. Pinia Store vs. Server API**.
- Eine skalierbare Feature-Struktur für Nuxt 3 umsetzen (klare Verantwortlichkeiten, SSR/CSR-Grenzen).
- Pinia mit **strikter Typisierung** und minimaler Store-Logik einsetzen (Business-Logik in Composables/Services).
- VueUse gezielt verwenden, wenn es Komplexität reduziert (nicht als Standard-Hammer).
- Qualität gegen Team-Governance prüfen: **Clean Code, strict typing, Best Practices, DoD/CI-Denke**.

---

## 25-Minuten-Lesson-Plan

### 0–4 min — Architektur-Frame (Nuxt Runtime + Grenzen)
- Nuxt 3 Rendering-Modi (SSR/CSR/Hybrid) und Konsequenzen für State-Haltung.
- Regel: Server-nahe Daten über `useAsyncData`/Server-Routen, UI-State lokal, domänenweiter Zustand in Pinia.
- Entscheidungsheuristik:
  - **Composable**: wiederverwendbare Logik mit begrenztem Lebenszyklus.
  - **Pinia**: geteilter Domain-State über Views hinweg.
  - **Server API**: Autorität für persistente Daten, Security, Caching.

### 4–10 min — Pinia-Architektur für Senior-Level
- Thin Stores: State/Getters/Actions schlank, keine überfettete Geschäftslogik.
- Typenpflicht: API-Contracts, Store-State, Return-Typen, Fehlerobjekte strikt modellieren.
- Anti-Pattern: `any`, implizite `unknown`-Casts, Stores als „God Objects“.

### 10–15 min — VueUse bewusst einsetzen
- Gute Einsätze: `useDebounceFn`, `useLocalStorage`, `useNetwork`, `watchPausable`.
- Design-Regel: VueUse nur, wenn Lesbarkeit/Wartbarkeit steigt.
- SSR-Achtung: Browser-APIs nur client-safe nutzen (z. B. guards/lazy init).

### 15–21 min — Integrationsmuster (Nuxt + Pinia + VueUse)
- Beispielmuster: Search Feature
  - UI-State (Filter, Sort) im Composable
  - geteilter Domain-State (Result Cache, Selection) im Store
  - Fetch/Caching über Nuxt-Datenlayer + Route Rules
- i18n/UX: keine hardcoded Strings, konsistente Fehler- und Empty-States.

### 21–25 min — Governance Check + Team DoD
- Mini-Review gegen Playbook:
  - Clean Code
  - Strict TypeScript
  - Best Practices/Konsistenz
  - SSR/CSR-Verhalten plausibel
  - Risiko- und Rollback-Denken

---

## Advanced Exercises (3)

### Übung 1: Decision Matrix in der Praxis
**Aufgabe:** Für ein neues „Order Dashboard“ 12 Anforderungen klassifizieren (Composable/Pinia/Server API) und begründen.
**Constraints:** SSR-fähig, i18n-ready, kein `any`, keine Duplikation von Geschäftslogik.

**Solution Outline:**
- Persistente, gemeinsame Domänendaten in Pinia (z. B. aktive Order, Cache-Meta).
- Kurzlebige UI-Interaktion in Composables (z. B. Dialog-/Filterzustände).
- Autoritative Schreib-/Leseoperationen ausschließlich über Server API.
- Begründung je Entscheidung entlang: Lebensdauer, Scope, Sicherheit, Testbarkeit.

### Übung 2: Store-Schnitt redesignen (ohne God-Store)
**Aufgabe:** Ein überladener Store wird in Domain-Store + Service-Composable zerlegt. Ziel: klare API, bessere Testbarkeit.
**Constraints:** Strict typing, keine Breaking-API für Consumer, Fehlerzustände typisieren.

**Solution Outline:**
- Store reduziert auf: `state`, wenige `getters`, orchestrierende `actions`.
- Seiteneffekte/Business-Regeln in `useOrderService()` auslagern.
- Discriminated unions für Lade-/Fehlerzustände (`idle|loading|success|error`).
- Öffentliche Store-API stabil halten; intern Migrationsschicht dokumentieren.

### Übung 3: VueUse-Refactor unter SSR-Bedingungen
**Aufgabe:** Bestehende client-lastige Interaktion (Search + Persistenz + Offline-Hinweise) mit VueUse verbessern.
**Constraints:** Kein Hydration-Mismatch, progressive enhancement, messbarer DX-Gewinn.

**Solution Outline:**
- `useDebounceFn` für Suchtrigger, `useLocalStorage` nur client-safe initialisieren.
- `useNetwork` für Offline-Indikator, Fallback-UX serverneutral halten.
- Nebenwirkungen in watch-Flows entkoppeln (`watchPausable`/cleanup).
- Ergebnis validieren über SSR-Start, Rehydrate, Navigation und State-Konsistenz.

---

## Assessment Checklist (Senior)

- [ ] Entscheidungen Composable vs Pinia vs Server API sind nachvollziehbar und konsistent.
- [ ] Store-Design ist schlank, domänenfokussiert, ohne God-Object-Tendenz.
- [ ] TypeScript ist strikt (keine unbegründeten `any`/unsicheren Casts).
- [ ] VueUse wird gezielt eingesetzt und erhöht nachweislich Lesbarkeit/Wartbarkeit.
- [ ] SSR/CSR-Grenzen sind korrekt berücksichtigt (keine Browser-API-Leaks im Server-Kontext).
- [ ] i18n-Disziplin eingehalten (keine hardcoded User-Texte).
- [ ] Fehler-, Loading- und Empty-States sind robust und UX-konsistent.
- [ ] Architektur folgt Team-Governance (Clean Code, Best Practices, DoD-orientiert).
- [ ] Lösung ist testbar (Unit für Composables/Stores, kritische Flows klar benannt).

---

## Governance-Hinweis
Dieses Modul ist auf die Team-Non-Negotiables ausgerichtet: **Clean Code only, strikte Typisierung, Best Practices only**. Fokus liegt auf Architektur-Exzellenz ohne Änderungen an bestehender Projektcodebasis.