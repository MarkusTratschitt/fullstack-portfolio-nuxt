# Vuetify UI Consistency Checklist

## Layout & Spacing
- Use shared spacing scale only
- No ad-hoc margins/paddings unless justified

## Components
- Prefer Vuetify primitives before custom reimplementation
- Keep props strictly typed
- Variant usage consistent (filled/outlined/text)

## Accessibility
- Labels for all form controls
- Keyboard navigation works
- Focus visible and logical
- Color contrast meets WCAG AA

## States
- Loading, empty, error, success states defined
- Disabled states communicated clearly

## Theming
- Use design tokens/variables; no random hex values
- Dark/light behavior verified

## Responsive
- Check core breakpoints (mobile/tablet/desktop)
- No layout jump on hydration
