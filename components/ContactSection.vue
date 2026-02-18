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

<script lang="ts">
interface ContactForm {
  name: string
  email: string
  msg: string
}

interface ContactErrors {
  name: string
  email: string
  msg: string
}

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        msg: ''
      } as ContactForm,
      errors: {
        name: '',
        email: '',
        msg: ''
      } as ContactErrors,
      status: ''
    }
  },
  methods: {
    onSubmit() {
      this.errors.name = this.form.name ? '' : 'Bitte Namen eingeben.'
      this.errors.email = /^\S+@\S+\.\S+$/.test(this.form.email) ? '' : 'Bitte gültige E-Mail eingeben.'
      this.errors.msg = this.form.msg.length >= 10 ? '' : 'Bitte Ziel in mindestens 10 Zeichen beschreiben.'

      if (!this.errors.name && !this.errors.email && !this.errors.msg) {
        this.status = 'Danke! Der Prototyp hat die Anfrage lokal validiert.'
      } else {
        this.status = 'Bitte korrigiere die markierten Felder.'
      }
    }
  }
}
</script>
