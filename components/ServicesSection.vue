<template lang="pug">
section#leistungen.section
  .wrap
    h2 Leistungen im Carousel
    p.carousel-intro Das aktive Element wird vergrößert hervorgehoben. Navigation unten bleibt sticky am Carousel.

    .carousel-shell
      button.carousel-arrow(type="button" aria-label="Vorheriges Element" @click="prev") ‹

      .carousel-viewport
        .carousel-track(:style="trackStyle")
          article.carousel-card(
            v-for="(item, idx) in items"
            :key="item.title"
            :class="{ 'is-active': idx === activeIndex }"
            @click="goTo(idx)"
          )
            span.tag Element {{ String(idx + 1).padStart(2, '0') }}
            h3 {{ item.title }}
            p {{ item.text }}

      button.carousel-arrow(type="button" aria-label="Nächstes Element" @click="next") ›

      nav.carousel-sticky-nav(aria-label="Carousel Navigation")
        button.nav-pill(
          v-for="(item, idx) in items"
          :key="`nav-${item.title}`"
          type="button"
          :class="{ 'is-current': idx === activeIndex }"
          @click="goTo(idx)"
        ) {{ item.short }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          short: 'Strategie',
          title: 'Strategie & Konzeption',
          text: 'Wir definieren Ziele, Zielgruppe und Scope, damit aus Anforderungen ein klarer Produktplan wird.'
        },
        {
          short: 'Frontend',
          title: 'Frontend Experience',
          text: 'Moderne, responsive Interfaces mit Fokus auf Nutzerführung, Accessibility und Performance.'
        },
        {
          short: 'Backend',
          title: 'Backend & APIs',
          text: 'Wartbare Services, sichere Authentifizierung und robuste Datenflüsse für skalierbare Produkte.'
        },
        {
          short: 'Betrieb',
          title: 'Deployment & Betrieb',
          text: 'CI/CD, Monitoring und Release-Prozesse für verlässliche Deployments in Produktion.'
        }
      ],
      activeIndex: 0
    }
  },
  computed: {
    trackStyle() {
      return {
        transform: `translateX(-${this.activeIndex * 100}%)`
      }
    }
  },
  methods: {
    goTo(index) {
      this.activeIndex = (index + this.items.length) % this.items.length
    },
    prev() {
      this.goTo(this.activeIndex - 1)
    },
    next() {
      this.goTo(this.activeIndex + 1)
    }
  }
}
</script>
