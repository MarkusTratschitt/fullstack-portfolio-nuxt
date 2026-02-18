# Assignment Modul A — Rendering & Runtime Decisions (Nuxt/Nitro)

## Ziel
Für drei konkrete Routen (`/`, `/dashboard`, `/settings`) eine belastbare Rendering-Strategie (SSR, SSG/Prerender, CSR/Hybrid) festlegen und mit offiziellen Nuxt/Nitro-Quellen begründen.

## Offizielle Quellen (Pflicht)
- Nuxt Rendering Concepts: https://nuxt.com/docs/guide/concepts/rendering
- Nuxt Route Rules: https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
- Nitro Routing/Runtime: https://nitro.unjs.io/guide/routing

## Aufgabenstellung
1. Erstelle eine Entscheidungs-Matrix pro Route mit:
   - Zielgruppe/Use Case
   - SEO-Relevanz
   - Personalisierungsgrad
   - Caching-Potenzial
   - Empfohlener Rendering-Modus
2. Definiere konkrete `routeRules` in `nuxt.config.ts` (als Vorschlag oder umgesetzt im Branch).
3. Dokumentiere pro Route mindestens einen Trade-off (z. B. TTFB vs. Cache-Hit-Rate).
4. Ergänze eine Rollback-Option, falls Metriken nach Deployment regressieren.

## Deliverables
- `operations/module-a-rendering-decision-log.md`
- `operations/module-a-route-rules-proposal.md`
- PR-Beschreibung mit 3 source-backed Entscheidungen (siehe Evidence-Format)

## Pflicht-Template: Evidence-Block (pro Route)
```md
### Route: /<name>
- Source URL: <official link>
- Abschnitt/Zitat: "..."
- Applied Decision: <SSR | SSG | CSR | Hybrid + routeRules>
- Trade-off: <z. B. SEO vs. Personalisierung>
- Verification Step: <wie im Review überprüfbar>
```

## Akzeptanzkriterien
- Für alle 3 Routen ist ein Rendering-Modus explizit entschieden.
- Jede Entscheidung enthält mindestens 1 offiziellen Link + Abschnittsbezug.
- `routeRules` sind syntaktisch valide und den Routen zuordenbar.
- Trade-offs und Rollback-Schritte sind nachvollziehbar dokumentiert.
- Keine Begründung basiert ausschließlich auf inoffiziellen Quellen.

## Bewertungsraster (100 Punkte)
- 30 P: Technische Korrektheit der Rendering-Entscheidungen
- 25 P: Qualität der offiziellen Evidenz (präzise, relevant, überprüfbar)
- 20 P: Operative Umsetzbarkeit (klare Regeln, direkt ausführbar)
- 15 P: Risiko- und Rollback-Qualität
- 10 P: Klarheit/Struktur der Dokumentation

## Mindestscore (Pass)
- **≥ 75 Punkte** und keine kritische Lücke bei Evidenzpflicht.