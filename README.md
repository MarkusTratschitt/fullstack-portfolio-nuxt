# Fullstack Portfolio (Nuxt 3 + Vuetify + Pug + Less)

## Ziel
Moderne, hochperformante Portfolio-Website mit starker Accessibility-Ausrichtung.

## Stack
- Nuxt 3
- Vuetify 3
- Pug (`template lang="pug"`)
- Less (`assets/less/main.less`)

## Start
```bash
npm install
npm run dev
```

## Performance-Leitlinien
- SSR standardmäßig (Nuxt)
- Reduzierte JS-Komplexität pro View
- Semantische Struktur + geringe DOM-Tiefe
- Kritische Inhalte ohne JS erreichbar

## Accessibility-Ziele
- Semantisches HTML
- Skip-Link
- Sichtbare Fokus-Styles
- ausreichender Farbkontrast
- Tastaturbedienbarkeit

Hinweis: "100%" ist nur mit echter Laufzeitprüfung erreichbar (z. B. Lighthouse + axe + manuelle Tastatur/SR-Tests).
