<template lang="pug">
section.hero
  .wrap.hero-grid
    .copy
      p.eyebrow Full-Stack Developer
      h1 Ich baue moderne Webplattformen, die messbar Ergebnisse liefern.
      p.lead Von Produktidee bis Deployment: performante Frontends, stabile APIs und saubere CI/CD-Pipelines.
      .cta
        v-btn(color="primary" size="large" href="#kontakt") Projekt starten
        v-btn(variant="outlined" size="large" href="#projekte") Case Studies
      ul.kpis
        li
          strong +38%
          span schnellere Ladezeiten
        li
          strong 99,9%
          span Uptime in Produktion
        li
          strong -27%
          span weniger Ticketaufwand
    v-card.panel
      h3 Verfügbarkeit
      p Ich bin verfügbar für neue Projekte ab sofort.
      .chips
        v-chip(color="secondary" variant="flat") Nuxt 3
        v-chip(color="secondary" variant="flat") TypeScript
        v-chip(color="secondary" variant="flat") API Design
        v-chip(color="secondary" variant="flat") DevOps
</template>
