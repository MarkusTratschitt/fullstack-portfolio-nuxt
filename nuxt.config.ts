import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/less/main.less'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    ssr: { noExternal: ['vuetify'] },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(vuetify({ autoImport: true }))
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Markus Tratschitt — Full-Stack Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Moderne, hochperformante Webentwicklung mit Nuxt, APIs und DevOps-Fokus.' },
        { property: 'og:title', content: 'Markus Tratschitt — Full-Stack Developer' },
        { property: 'og:description', content: 'Portfolio für moderne Webplattformen mit Fokus auf Performance und Barrierefreiheit.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#0A1020' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css' }
      ]
    }
  }
})