<template lang="pug">
section.proto(:class="themeClass" :data-theme="theme" role="region" :aria-label="t.carouselRegion")
  .carousel(
    role="group"
    :aria-roledescription="t.carouselRole"
    :aria-label="t.carouselLabel"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  )
    .mode-switch(role="group" :aria-label="t.modeSwitch")
      button.mode-btn(
        type="button"
        :class="{ 'is-current': theme === 'light' }"
        :title="t.tooltips.light"
        :aria-label="t.tooltips.light"
        @click="setTheme('light')"
      ) Light
      button.mode-btn(
        type="button"
        :class="{ 'is-current': theme === 'dark' }"
        :title="t.tooltips.dark"
        :aria-label="t.tooltips.dark"
        @click="setTheme('dark')"
      ) Dark

    .lang-switch(role="group" :aria-label="t.languageSwitch")
      button.lang-btn(
        type="button"
        :class="{ 'is-current': locale === 'de' }"
        :title="t.tooltips.langDe"
        :aria-label="t.tooltips.langDe"
        @click="setLocale('de')"
      ) DE
      button.lang-btn(
        type="button"
        :class="{ 'is-current': locale === 'en' }"
        :title="t.tooltips.langEn"
        :aria-label="t.tooltips.langEn"
        @click="setLocale('en')"
      ) EN

    button.arrow(
      type="button"
      :title="t.tooltips.prev"
      :aria-label="t.prev"
      :aria-controls="'carousel-ring'"
      @click="prev"
    ) ‹

    .viewport(tabindex="0" @keydown.left.prevent="prev" @keydown.right.prevent="next")
      .ring#carousel-ring(:style="ringStyle" aria-live="polite")
        article.page-card(
          v-for="(page, idx) in pages"
          :key="page.id"
          :style="cardStyle(idx)"
          :class="cardClass(idx)"
          role="group"
          :aria-label="`${t.subpage}: ${page.label}`"
          :title="`${t.subpage}: ${page.label}`"
          @click="goTo(idx)"
        )
          p.page-card__kicker {{ page.label }}
          h2 {{ page.title }}

          template(v-if="page.id !== 'contact'")
            p {{ page.text }}

          template(v-else)
            .contact-content
              p {{ page.text }}
              form.contact-form(@click.stop @submit.prevent="openMailClient")
                .form-row
                  label.form-label(for="firstName") {{ t.form.firstName }}
                  input#firstName.form-input(v-model.trim="contactForm.firstName" type="text" autocomplete="given-name" :title="t.form.firstName" :aria-label="t.form.firstName")

                .form-row
                  label.form-label(for="lastName") {{ t.form.lastName }}
                  input#lastName.form-input(v-model.trim="contactForm.lastName" type="text" autocomplete="family-name" :title="t.form.lastName" :aria-label="t.form.lastName")

                .form-row
                  label.form-label(for="email") {{ t.form.email }}
                  input#email.form-input(v-model.trim="contactForm.email" type="email" autocomplete="email" :title="t.form.email" :aria-label="t.form.email")

                .form-row
                  label.form-label(for="subject") {{ t.form.subject }}
                  input#subject.form-input(v-model.trim="contactForm.subject" type="text" :title="t.form.subject" :aria-label="t.form.subject")

                button.form-btn(type="submit" :title="t.form.cta" :aria-label="t.form.cta") {{ t.form.cta }}

              .contact-separator(aria-hidden="true")

              .social-links
                a.social-link(href="https://linkedin.com/in/markus-tratschitt" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn")
                  i.mdi.mdi-linkedin
                  span LinkedIn
                a.social-link(href="https://github.com/MarkusTratschitt" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub")
                  i.mdi.mdi-github
                  span GitHub
                a.social-link(href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook")
                  i.mdi.mdi-facebook
                  span Facebook

    button.arrow(
      type="button"
      :title="t.tooltips.next"
      :aria-label="t.next"
      :aria-controls="'carousel-ring'"
      @click="next"
    ) ›

    nav.sticky-nav(:aria-label="t.navAria")
      button.nav-item(
        v-for="(page, idx) in pages"
        :key="`nav-${page.id}`"
        type="button"
        :class="{ 'is-current': idx === activeIndex }"
        :title="`${t.tooltips.goTo} ${page.label}`"
        :aria-label="`${t.tooltips.goTo} ${page.label}`"
        :aria-current="idx === activeIndex ? 'page' : undefined"
        @click="goTo(idx)"
      ) {{ page.label }}
      a.nav-item.nav-link(href="/datenschutz" target="_blank" rel="noopener noreferrer" :title="t.legal.privacy" :aria-label="t.legal.privacy") {{ t.legal.privacy }}
      a.nav-item.nav-link(href="/impressum" target="_blank" rel="noopener noreferrer" :title="t.legal.imprint" :aria-label="t.legal.imprint") {{ t.legal.imprint }}
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

type Locale = 'de' | 'en'
type ThemeMode = 'light' | 'dark'
const locale = ref<Locale>('de')
const theme = ref<ThemeMode>('dark')

const copy = {
  de: {
    seoTitle: 'Markus Tratschitt – Full Stack Engineer aus Mainz | Nuxt 3, TypeScript, Node.js',
    seoDesc:
      'Full Stack Engineer aus Mainz für skalierbare Web-Apps mit Nuxt 3, TypeScript und Node.js. Voll typisierte Datenflüsse, stabile APIs und saubere Releases.',
    prev: 'Vorherige Seite',
    next: 'Nächste Seite',
    navAria: 'Unternavigation',
    subpage: 'Bereich',
    languageSwitch: 'Sprachauswahl',
    modeSwitch: 'Darstellungsmodus',
    carouselRegion: 'Startseiten-Carousel',
    carouselRole: 'Karussell',
    carouselLabel: '3D-Karussell mit Unterseiteninhalten',
    tooltips: {
      langDe: 'Zur deutschen Version wechseln',
      langEn: 'Zur englischen Version wechseln',
      prev: 'Eine Karte nach links drehen',
      next: 'Eine Karte nach rechts drehen',
      goTo: 'Gehe zu',
      light: 'Light Mode aktivieren',
      dark: 'Dark Mode aktivieren'
    },
    legal: {
      privacy: 'Datenschutz',
      imprint: 'Impressum'
    },
    form: {
      firstName: 'Vorname',
      lastName: 'Name',
      email: 'E-Mail',
      subject: 'Betreff',
      cta: 'E-Mail mit diesen Angaben öffnen'
    },
    pages: [
      {
        id: 'home',
        label: 'Home',
        title: 'Full Stack Engineer für skalierbare Web-Apps & Nuxt 3 Lösungen',
        text: 'Ich verwandle komplexe Geschäftsideen in digitale Realität. Als Full Stack Developer aus Mainz spezialisiere ich mich auf hochperformante Webanwendungen mit Nuxt 3, TypeScript und Node.js. Mein Fokus liegt auf voll typisierten Datenflüssen und stabiler Architektur, damit Ihre Software nicht nur heute funktioniert, sondern auch morgen noch problemlos skalierbar bleibt.'
      },
      {
        id: 'about',
        label: 'Über mich',
        title: 'Enterprise-Erfahrung trifft auf pragmatische Lösungskompetenz',
        text: 'Nach meiner Ausbildung zum Fachinformatiker habe ich 18 Monate lang komplexe Webprojekte in Enterprise-Umgebungen end-to-end begleitet. Ich weiß, wie man Anforderungen direkt aus dem Business aufnimmt und in belastbaren Code übersetzt. Ich kombiniere technisches Tiefenwissen mit der notwendigen Hands-on-Mentalität, um Projekte termingerecht und sicher in die Produktion zu bringen.'
      },
      {
        id: 'services',
        label: 'Leistungen',
        title: 'Full-Stack Development: Von der Konzeption bis zum stabilen Release',
        text: 'Ich biete die vollständige Umsetzung Ihrer Webprojekte aus einer Hand. Mein Fokus liegt auf voll typisierten Frontend-Architekturen mit Vue/Nuxt, robusten Node.js-Backends und einer sauberen API-Struktur. Ich sorge für eine technische Basis, die wartbar bleibt, technische Schulden minimiert und auch bei wachsendem Funktionsumfang performant bleibt.'
      },
      {
        id: 'projects',
        label: 'Projekte',
        title: 'Praxiserprobte Lösungen für kritische Business-Logik',
        text: 'In produktiven Live-Systemen habe ich bewiesen, dass ich komplexe Features wie sichere Payment-Integrationen (PayPal), Terminbuchungs-Logiken und automatisierte Workflows stabil implementieren kann. Meine Spezialität ist die „Update-Härtung“ bestehender Plattformen sowie die Durchführung von schnellen, regressionsfreien Bugfixes unter Realbedingungen.'
      },
      {
        id: 'collab',
        label: 'Zusammenarbeit',
        title: 'Transparente Prozesse für messbare Fortschritte',
        text: 'Ich arbeite eng mit Produktverantwortlichen und UX-Teams zusammen, um technische Exzellenz mit geschäftlichem Nutzen zu vereinen. Durch iterative Lieferzyklen, klare Kommunikation und Git-basierte Workflows schaffe ich volle Transparenz. Mein Ziel ist es, als verlässlicher Partner Momentum in Ihre Entwicklung zu bringen und Risiken frühzeitig zu minimieren.'
      },
      {
        id: 'quality',
        label: 'Qualität & Standards',
        title: 'Sicherheit, Stabilität und Barrierefreiheit nach Maß',
        text: 'Sicherheit und Accessibility sind für mich integrale Bestandteile der Architektur. Ich setze auf klare API-Verträge, kontrolliertes Error-Handling und WCAG-orientierte UI-Standards. Ob Tastaturbedienbarkeit oder robuste Update-Prozesse – ich sorge dafür, dass Ihre Anwendung für alle Nutzer zugänglich und technologisch auf dem neuesten Stand ist.'
      },
      {
        id: 'contact',
        label: 'Kontakt',
        title: 'Lassen Sie uns Ihr Projekt gemeinsam realisieren',
        text: 'Sie planen eine neue Webanwendung, möchten ein bestehendes System stabilisieren oder Ihre Plattform skalieren? Ich unterstütze Sie von der ersten technischen Konzeption bis zur sauberen Produktion. Kontaktieren Sie mich für ein unverbindliches Gespräch über Ihre Ziele.'
      }
    ]
  },
  en: {
    seoTitle: 'Scalable Full Stack Development | Nuxt 3 & Node.js Expert',
    seoDesc:
      'Mainz-based Full Stack Developer for TypeScript-driven web applications with Nuxt 3 and Node.js. Clean architecture, stable APIs, and scalable delivery.',
    prev: 'Previous page',
    next: 'Next page',
    navAria: 'Sub navigation',
    subpage: 'Section',
    languageSwitch: 'Language switch',
    modeSwitch: 'Display mode',
    carouselRegion: 'Homepage carousel',
    carouselRole: 'Carousel',
    carouselLabel: '3D carousel with subpage content',
    tooltips: {
      langDe: 'Switch to German version',
      langEn: 'Switch to English version',
      prev: 'Rotate one card to the left',
      next: 'Rotate one card to the right',
      goTo: 'Go to',
      light: 'Enable light mode',
      dark: 'Enable dark mode'
    },
    legal: {
      privacy: 'Privacy',
      imprint: 'Imprint'
    },
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      subject: 'Subject',
      cta: 'Open email with these details'
    },
    pages: [
      {
        id: 'home',
        label: 'Home',
        title: 'Scalable Full Stack Development | Nuxt 3 & Node.js Expert',
        text: 'Turning complex requirements into high-performance digital products. I am a Mainz-based Full Stack Developer specializing in TypeScript-driven web applications. I build software that scales, ensuring your business stays ahead with clean code, stable APIs, and seamless production delivery.'
      },
      {
        id: 'about',
        label: 'About',
        title: 'Practical Expertise for Demanding Tech Environments',
        text: 'With 18 months of intensive end-to-end delivery in enterprise contexts, I have a proven track record of launching and maintaining live systems. I bridge the gap between business goals and technical execution, focusing on predictable results, long-term maintainability, and software that grows with your needs.'
      },
      {
        id: 'services',
        label: 'Services',
        title: 'End-to-End Engineering: From Initial Concept to Production',
        text: 'I take full ownership of your tech stack. Whether it’s crafting responsive Nuxt 3 frontends or architecting secure Node.js backends, I ensure every component is fully typed and future-proof. My approach eliminates technical debt early on, allowing for rapid iteration and stable service layers.'
      },
      {
        id: 'projects',
        label: 'Projects',
        title: 'Real-World Solutions for Business-Critical Logic',
        text: 'My portfolio includes high-stakes features like PayPal payment flows, complex scheduling engines, and regression-free system upgrades. I thrive on stabilizing existing platforms and building new ones that handle real-world traffic with ease, ensuring zero downtime and maximum reliability.'
      },
      {
        id: 'collab',
        label: 'Collaboration',
        title: 'Partnering with Product and UX for Maximum Impact',
        text: 'I collaborate closely with stakeholders, product owners, and UX teams to translate business needs into practical technical solutions. With clear communication, iterative delivery, and Git-based workflows, I provide full visibility and momentum throughout the entire development process.'
      },
      {
        id: 'quality',
        label: 'Quality & Standards',
        title: 'Top-Tier Accessibility and Practical Security',
        text: 'Security and accessibility are core engineering requirements, not afterthoughts. I implement clear API contracts, robust error handling, and WCAG-oriented UI standards. From keyboard support to stable update processes, I ensure your application is accessible, secure, and technologically advanced.'
      },
      {
        id: 'contact',
        label: 'Contact',
        title: 'Let’s Build Your Next Digital Product',
        text: 'Looking for a developer who prioritizes momentum and code quality? Whether you’re starting from scratch or need to scale an existing system, I’m here to support you from initial concept to reliable production delivery. Reach out today and let’s get started.'
      }
    ]
  }
} as const

const t = computed(() => copy[locale.value])
const pages = computed(() => t.value.pages)
const themeClass = computed(() => (theme.value === 'light' ? 'theme-light' : 'theme-dark'))

const activeIndex = ref(0)
const rotationStepCount = ref(0)
const rotationDirection = ref<1 | -1>(1)
const isPaused = ref(false)
const contactEmail = 'tratschitt.m@icloud.com'
const contactForm = ref({ firstName: '', lastName: '', email: '', subject: '' })
let timer: ReturnType<typeof setInterval> | null = null

const step = computed(() => 360 / 7)
const radius = 1280

const ringStyle = computed(() => ({
  transform: `translateZ(-${radius}px) rotateY(${-rotationStepCount.value * step.value}deg)`
}))

const normalizedDelta = (idx: number) => {
  const len = pages.value.length
  let d = idx - activeIndex.value
  if (d > len / 2) d -= len
  if (d < -len / 2) d += len
  return d
}

const cardStyle = (idx: number) => {
  const d = normalizedDelta(idx)
  const abs = Math.abs(d)
  const hidden = abs > 2
  return {
    transform: `rotateY(${idx * step.value}deg) translateZ(${radius}px)`,
    opacity: hidden ? '0' : d === 0 ? '1' : abs === 1 ? '.78' : '.42',
    pointerEvents: hidden ? 'none' : 'auto',
    zIndex: String(100 - abs)
  }
}

const cardClass = (idx: number) => ({
  'is-active': idx === activeIndex.value,
  'is-hidden': Math.abs(normalizedDelta(idx)) > 2
})

const goTo = (index: number) => {
  const len = pages.value.length
  const target = (index + len) % len
  if (target === activeIndex.value) return

  if (rotationDirection.value === 1) {
    const steps = (target - activeIndex.value + len) % len
    rotationStepCount.value += steps
  } else {
    const steps = (activeIndex.value - target + len) % len
    rotationStepCount.value -= steps
  }
  activeIndex.value = target
}

const rotateOne = (direction: 1 | -1) => {
  const len = pages.value.length
  activeIndex.value = (activeIndex.value + direction + len) % len
  rotationStepCount.value += direction
}

const prev = () => {
  rotationDirection.value = 1
  rotateOne(1)
}

const next = () => {
  rotationDirection.value = -1
  rotateOne(-1)
}

const setLocale = (value: Locale) => {
  locale.value = value
}

const setTheme = (value: ThemeMode) => {
  theme.value = value
}

const openMailClient = () => {
  const firstName = contactForm.value.firstName || '-'
  const lastName = contactForm.value.lastName || '-'
  const email = contactForm.value.email || '-'
  const subject = contactForm.value.subject || (locale.value === 'de' ? 'Projektanfrage' : 'Project request')
  const body = locale.value === 'de'
    ? `Vorname: ${firstName}\nName: ${lastName}\nE-Mail: ${email}\n\nHallo Markus,\n`
    : `First name: ${firstName}\nLast name: ${lastName}\nEmail: ${email}\n\nHi Markus,\n`
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

watch(locale, () => {
  activeIndex.value = 0
  rotationStepCount.value = 0
  rotationDirection.value = 1
})

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: t.value.seoTitle,
  meta: [{ name: 'description', content: t.value.seoDesc }]
}))

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    isPaused.value = true
    return
  }
  timer = setInterval(() => {
    if (!isPaused.value) {
      rotateOne(rotationDirection.value)
    }
  }, 3200)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
