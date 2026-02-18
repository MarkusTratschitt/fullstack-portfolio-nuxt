# i18n Policy

## Key Naming
Pattern: `feature.section.element.state`

Examples:
- `checkout.summary.total.label`
- `auth.login.error.invalidCredentials`

## Ownership
- Each feature owns its keys in `features/<feature>/locales/*`.
- Shared/global UI text lives in `locales/common/*`.

## Rules
1. No hardcoded user-facing strings.
2. Fallback locale must be defined and tested.
3. Parameterized strings required for dynamic content.
4. Pluralization must use locale-aware forms.
5. Deleted UI must remove stale keys.

## Review Checklist
- New strings added for all active locales?
- No orphan keys?
- Key names match convention?
