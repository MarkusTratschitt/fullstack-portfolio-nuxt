# Options-API Migration — PR/CI Abschluss-Checkliste

Datum: 2026-02-18
Scope: `fullstack-portfolio-nuxt`

## 1) Commit-Plan (empfohlen)

1. Commit A (P1): `PrototypeCarousel.vue` Migration auf Options API
2. Commit B (P2): `ContactSection.vue` Migration auf Options API
3. Commit C (P2): `ServicesSection.vue` Migration auf Options API
4. Commit D (Doku): Inventory/Tracker/Policy-Referenzen aktualisiert

## 2) Pre-PR Checks

- [ ] `git status` ist sauber (keine `.nuxt`/`node_modules` Artefakte)
- [ ] Pattern-Scan ohne Treffer auf Composition API im Scope
- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run unit-tests`
- [ ] `npm run e2e-smoke`
- [ ] `npm run build`

## 3) PR-Inhalt (Pflicht)

- [ ] Summary: Migration auf Options API (kein Feature-Scope)
- [ ] Scope/Out-of-scope klar
- [ ] Evidence-Block mit verlinktem Inventory
- [ ] Risk & Rollback ergänzt
- [ ] Reviewer Guide (Dateireihenfolge + manuelle Checks)

## 4) Reviewer Guide (copy)

Review-Reihenfolge:
1. `components/PrototypeCarousel.vue`
2. `components/ContactSection.vue`
3. `components/ServicesSection.vue`
4. `docs/training/nuxt-agent-team/operations/options-api-migration-inventory-2026-02-18.md`

Manuell prüfen:
- Carousel-Navigation / Rotation / Hover-Pause
- Contact-Form Validation + Submit
- Services-Slider Navigation + Transform
- Keine Composition-API-Treffer im Komponenten-Scope

## 5) Merge-Gates

- [ ] Required checks grün
- [ ] Mindestens 1 qualifizierte Approval
- [ ] Alle Review-Comments resolved
- [ ] Kein offener High-Risk ohne Mitigation

## 6) Rollback-Plan

- Commitweise Revert (D → C → B → A)
- Nach jedem Revert: typecheck + build
- Bei Regression: betroffene Komponente isoliert zurückrollen
