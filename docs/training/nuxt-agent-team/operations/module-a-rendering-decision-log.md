# Module A — Rendering Decision Log (Round 2)

Datum: 2026-02-18  
Scope: `/`, `/dashboard`, `/settings`

## Ziel
Für drei Kernrouten belastbare Rendering-Entscheidungen treffen, inkl. `routeRules`, Trade-offs und Rollback.

---

## Route: `/` (Landing)
- Source URL: https://nuxt.com/docs/guide/concepts/rendering
- Abschnitt/Zitat: Nuxt beschreibt hybride Strategien mit per-route Steuerung via `routeRules` (SSR/Prerender/SWR).
- Applied Decision: **Prerender** für maximale Auslieferungsstabilität und SEO.
- Trade-off: Sehr schnelle Auslieferung + gut für Crawler, dafür Inhalte nur bis zum nächsten Rebuild statisch.
- Verification Step:
  - `routeRules['/'].prerender === true`
  - HTML-Seite ist ohne Runtime-Daten vollständig lesbar.

## Route: `/dashboard`
- Source URL: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
- Abschnitt/Zitat: Hybrid Rendering erlaubt Route-spezifische Regeln wie `ssr`, `swr`, `isr`, `prerender`.
- Applied Decision: **SSR + SWR (60s)** als Kompromiss aus Freshness und TTFB.
- Trade-off: Personalisierte/zeitnahe Daten möglich, Cache-Invalidierung und Revalidierung müssen beobachtet werden.
- Verification Step:
  - `routeRules['/dashboard'].swr === 60`
  - Nach Request-Spike sinkt Backend-Last gegenüber reinem SSR ohne Cache.

## Route: `/settings`
- Source URL: https://nuxt.com/docs/guide/concepts/rendering
- Abschnitt/Zitat: Client-seitige Interaktion ist sinnvoll, wenn SEO nicht kritisch und UI stark interaktiv/personenbezogen ist.
- Applied Decision: **CSR (`ssr: false`)** für stark nutzerindividuelle Einstellungsoberfläche.
- Trade-off: Weniger initiale SEO-Relevanz, dafür reduzierte Serverlast bei hochinteraktiven Formularflüssen.
- Verification Step:
  - `routeRules['/settings'].ssr === false`
  - Kein serverseitig gerenderter Formularzustand erforderlich.

---

## Geplanter `routeRules`-Ausschnitt
```ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },
    '/dashboard': { swr: 60 },
    '/settings': { ssr: false }
  }
})
```

## Official + Stack Overflow Evidence

### Entscheidung A1: Hybrid route-level statt globalem Rendering-Modus
- Official Source: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
- Guidance: Route-spezifische Rendering-Regeln sind first-class in Nuxt.
- Applied Decision: Unterschiedliche Strategien je Route statt globales One-size-fits-all.
- Trade-off: Höhere Konfig-Komplexität, dafür bessere Kosten-/Performance-Steuerung.
- Praxisquelle (Stack Overflow): https://stackoverflow.com/questions/77710465/nuxt-3-route-rules-ssr-false-for-specific-routes
- Praxisnutzen: Bestätigt typische Fallstricke bei route-spezifischem SSR-Offloading.

### Entscheidung A2: Dashboard mit SWR statt hartem Prerender
- Official Source: https://nuxt.com/docs/guide/concepts/rendering#route-rules
- Guidance: SWR kann dynamische Seiten mit Caching/Revalidation beschleunigen.
- Applied Decision: `swr: 60` für Dashboard.
- Trade-off: Eventuelle Datenstale-Phase bis zur Revalidation.
- Praxisquelle (Stack Overflow): https://stackoverflow.com/questions/77195709/nuxt-3-use-swr-route-rule-caching-behavior
- Praxisnutzen: Ergänzt erwartetes Verhalten beim ersten Request und nach Ablauf der TTL.

### Entscheidung A3: Settings als CSR aus Interaktivitätsgründen
- Official Source: https://nuxt.com/docs/guide/concepts/rendering
- Guidance: Nicht-SEO-kritische, personalisierte UIs können client-only sinnvoll sein.
- Applied Decision: `ssr: false` für `/settings`.
- Trade-off: Schlechtere Initial-Render-Indexierbarkeit, aber weniger SSR-Komplexität.
- Praxisquelle (Stack Overflow): https://stackoverflow.com/questions/76423808/nuxt-3-disable-ssr-on-a-single-page
- Praxisnutzen: Praxisvalidierung für per-route CSR-Konfiguration.

---

## Rollback-Plan
1. Bei KPI-Regress (`LCP`, `TTFB`, Error-Rate) zuerst nur `/dashboard` von `swr: 60` auf SSR ohne SWR zurücksetzen.
2. Falls Support-Feedback auf Hydration/State-Probleme bei `/settings` steigt: SSR testweise wieder aktivieren.
3. Landing-Route notfalls von Prerender auf SSR zurück, falls Content-Änderungsfrequenz hoch wird und Build-Zyklen nicht reichen.

## Offene Prüfungen
- Messwerte vor/nach Route-Rule-Änderung in PR ergänzen.
- Monitoring-Queries für Cache-Hit-Rate definieren.