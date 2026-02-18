# Performance Playbook

## Route Rendering Strategy
- SSR for SEO/public entry pages
- SSG for static marketing pages
- Client-only only when browser APIs are required

## Nitro + routeRules
- Cache stable endpoints with TTL
- Use stale-while-revalidate where possible
- CDN in front for edge caching

## Bundles
- Dynamic imports for heavy/rare components
- Keep Vuetify imports tree-shakeable
- Track bundle deltas in PRs

## Hydration Safety
- Avoid non-deterministic rendering between server/client
- Guard browser-only code with `process.client`

## Assets
- Optimize images (format, size, lazy)
- Preload critical fonts; avoid layout shift

## Budget Targets
- Initial JS budget: define and enforce in CI
- LCP/CLS/INP measured on key pages
