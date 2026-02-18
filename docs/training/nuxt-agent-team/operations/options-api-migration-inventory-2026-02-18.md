# Options API Migration Inventory (Step 1+2)

Datum: 2026-02-18
Kontext: Team-Vorgabe = **ausschließlich Options API**
Scope-Repo: `fullstack-portfolio-nuxt`

## Ergebnis der Inventur (Composition API Treffer)

### P1 — Kritisch (größte Komponente / höchste Komplexität)
1. `components/PrototypeCarousel.vue` ✅ **DONE (2026-02-18)**
   - Migration von Composition API (`<script setup>`, `ref/computed/watch`, `onMounted/onUnmounted`) auf vollständige Options API abgeschlossen
   - Umgestellt auf `export default` mit `data`, `computed`, `methods`, `watch`, `mounted`, `beforeUnmount`
   - Verhalten/Interaktionen beibehalten (Carousel-Rotation, Navigation, Locale-/Theme-Switch, Kontaktformular/Mailto)

### P2 — Mittel
2. `components/ServicesSection.vue` ✅ **DONE (2026-02-18)**
   - Migration von Composition API (`<script setup>`, `ref`, `computed`) auf Options API abgeschlossen
   - Umgestellt auf `export default` mit `data`, `computed`, `methods`
   - Carousel-Verhalten (Navigation, aktives Element, Track-Transform) unverändert beibehalten

3. `components/ContactSection.vue` ✅ **DONE (2026-02-18)**
   - Migration von Composition API (`<script setup>`, `reactive`, `ref`) auf Options API abgeschlossen
   - Umgestellt auf `export default` mit `data` + `methods`
   - Formularverhalten und Validierung unverändert beibehalten

## Priorisierte Reihenfolge (für Migration)
1. `PrototypeCarousel.vue` (P1)
2. `ContactSection.vue` (P2)
3. `ServicesSection.vue` (P2)

## Zielzustand pro Datei
- Kein `<script setup>`
- Komponentenlogik in Options API:
  - `data()`
  - `computed` (Options API)
  - `methods`
  - `watch` (Options API)
  - Lifecycle-Hooks (`mounted`, `beforeUnmount`, ...)
- Keine Composition-API-Imports / Aufrufe in Komponenten

## Akzeptanzkriterien für Step 2-Abschluss
- 0 Treffer auf blockierende Pattern im Komponenten-Scope:
  - `<script setup>`
  - `ref(`, `reactive(`, `computed(`, `watch(`, `watchEffect(`
  - `onMounted(`, `onUnmounted(`, etc.
- `typecheck` + `build` grün
- PR enthält Migrations-Notiz mit Vorher/Nachher je Datei

## Nächster operativer Schritt
- Inventur- und Migrationsscope für die identifizierten Komponenten ist abgeschlossen (P1/P2 DONE).
