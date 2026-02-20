# Feature Blueprint (Nuxt3)

Use **feature-first** structure.

```txt
features/
  checkout/
    components/
    composables/
    stores/
    services/
    locales/
    types/
    tests/
    index.ts
```

## Conventions
- `components/`: presentational + container components (Pug + Vuetify)
- `composables/`: reusable behavior
- `stores/`: Pinia domain state only
- `services/`: API adapters, mapping, normalization
- `locales/`: feature-owned i18n keys
- `types/`: strict TS types/interfaces/schemas
- `tests/`: unit + component tests close to feature

## Rules
1. No cross-feature imports except via explicit public API (`index.ts`).
2. Keep stores thin; move logic to composables/services.
3. No hardcoded UI strings; always i18n.
4. Add/update types with each behavior change.
