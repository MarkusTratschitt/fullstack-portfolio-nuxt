<template lang="pug">
section#kontakt.section
  .wrap
    h2 Kontakt
    p Für neue Produkte, Relaunches oder technische Modernisierung: kurze Nachricht genügt.
    form.contact-form(@submit.prevent="onSubmit" novalidate)
      label(for="name") Name
      input#name(type="text" name="name" v-model.trim="form.name" :aria-invalid="!!errors.name" required)
      span.error(v-if="errors.name") {{ errors.name }}

      label(for="email") E-Mail
      input#email(type="email" name="email" v-model.trim="form.email" :aria-invalid="!!errors.email" required)
      span.error(v-if="errors.email") {{ errors.email }}

      label(for="msg") Projektziel
      textarea#msg(name="msg" rows="4" v-model.trim="form.msg" :aria-invalid="!!errors.msg" required)
      span.error(v-if="errors.msg") {{ errors.msg }}

      .actions
        v-btn(color="secondary" size="large" type="submit") Anfrage senden (Prototyp)
        a.mail-link(href="mailto:hello@example.dev") oder per E-Mail

      p.status(role="status" aria-live="polite") {{ status }}
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', msg: '' })
const errors = reactive({ name: '', email: '', msg: '' })
const status = ref('')

const onSubmit = () => {
  errors.name = form.name ? '' : 'Bitte Namen eingeben.'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Bitte gültige E-Mail eingeben.'
  errors.msg = form.msg.length >= 10 ? '' : 'Bitte Ziel in mindestens 10 Zeichen beschreiben.'

  if (!errors.name && !errors.email && !errors.msg) {
    status.value = 'Danke! Der Prototyp hat die Anfrage lokal validiert.'
  } else {
    status.value = 'Bitte korrigiere die markierten Felder.'
  }
}
</script>
