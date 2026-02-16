import type { NuxtApp } from '#app'
import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'darkModern',
      themes: {
        darkModern: {
          dark: true,
          colors: {
            background: '#0A1020',
            surface: '#131C35',
            primary: '#6C8CFF',
            secondary: '#47E2B7',
            info: '#8FA9FF'
          }
        }
      }
    },
    defaults: {
      VBtn: { rounded: 'lg' },
      VCard: { rounded: 'xl', elevation: 0 }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})