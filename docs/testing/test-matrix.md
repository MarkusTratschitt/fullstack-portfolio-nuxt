# Testing Matrix

## Unit (Vitest)
- Composables: logic branches, error handling
- Stores (Pinia): state transitions, actions/getters
- Services: mapping/normalization logic

## Component (@vue/test-utils)
- Vuetify components: props/events/slots
- State rendering: loading/empty/error/success
- i18n rendering with locale switches

## E2E (Playwright)
- Auth flow
- Core conversion path (critical business flow)
- Form submit + validation + failure recovery
- Smoke checks per preview deployment

## Coverage Guidance
- Prioritize risk-critical flows over vanity coverage
- Every bugfix gets at least one regression test
