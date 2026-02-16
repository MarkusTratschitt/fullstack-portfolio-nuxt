# Decision Matrix: Composables vs Pinia vs Server API (Nitro)

## Rule of Thumb
- **Composable**: shared logic, local state, no cross-app persistence needed.
- **Pinia Store**: shared client state across pages/components, needs reactivity + central ownership.
- **Server API (Nitro)**: secrets, auth-sensitive logic, data aggregation, rate-limited/external integrations.

## Use This Table

| Situation | Use | Why |
|---|---|---|
| Reusable form validation or UI logic | Composable | Keeps components thin and testable |
| Cart/session-like shared state in app | Pinia | Single source of truth on client |
| Access token / API key required | Server API | Secrets must stay server-side |
| Need cached backend response for many clients | Server API + routeRules/cache | Better performance and control |
| Feature-specific transient state | Composable | Avoid over-centralizing in stores |
| Domain state reused across routes | Pinia | Predictable app behavior |

## Anti-Patterns
- Business logic only in components ❌
- Massive “god store” in Pinia ❌
- Secrets in client runtime/config ❌

## Enforcement
- Every new feature must declare chosen pattern in PR description.
- Reviewer blocks PRs without explicit decision rationale.
