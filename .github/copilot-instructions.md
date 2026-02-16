# Copilot Instructions for Fullstack Portfolio (Nuxt 3)

## Project Overview

This is a modern, high-performance portfolio website built with Nuxt 3, Vuetify 3, Pug templates, and Less stylesheets. The project emphasizes **performance** and **accessibility**, targeting German-speaking users.

**Key Technologies:**
- **Framework:** Nuxt 3 (v3.15.4+) with SSR enabled by default
- **UI Library:** Vuetify 3 (v3.7.6+)
- **Template Engine:** Pug (use `<template lang="pug">` in `.vue` files)
- **Styling:** Less (main stylesheet at `assets/less/main.less`)
- **Icons:** Material Design Icons (@mdi/font v7.4.47)
- **Runtime:** Node.js 20

## Project Structure

```
/
├── .github/
│   ├── workflows/
│   │   └── ci.yml              # CI pipeline (npm ci, npm run build)
│   └── copilot-instructions.md # This file
├── components/                 # Vue components
│   ├── HeroSection.vue
│   ├── ProjectsSection.vue
│   ├── ServicesSection.vue
│   ├── ContactSection.vue
│   └── PrototypeCarousel.vue
├── pages/                      # Nuxt pages (auto-routing)
│   ├── index.vue               # Homepage
│   ├── impressum.vue           # Legal notice (German requirement)
│   └── datenschutz.vue         # Privacy policy (German requirement)
├── layouts/
│   └── default.vue             # Default layout wrapper
├── plugins/
│   └── vuetify.ts              # Vuetify configuration
├── assets/
│   └── less/
│       └── main.less           # Main Less stylesheet
├── app.vue                     # Root app component
├── nuxt.config.ts              # Nuxt configuration
└── package.json                # Dependencies and scripts
```

## Build & Development Commands

**ALWAYS run these commands in this exact order:**

1. **Install Dependencies** (required before first build or when package.json changes):
   ```bash
   npm install
   ```
   - Takes ~40-50 seconds
   - If build fails with module errors, try: `rm -rf node_modules package-lock.json && npm install`

2. **Development Server:**
   ```bash
   npm run dev
   ```
   - Runs on port 3333 (http://localhost:3333)
   - Supports hot module replacement
   - SSR is enabled by default

3. **Production Build:**
   ```bash
   npm run build
   ```
   - Takes ~30-60 seconds
   - Outputs to `.nuxt/dist/`
   - **MUST succeed before committing code changes**

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```
   - Runs on port 3333
   - Tests the production build locally

## Code Style & Standards

### Vue Component Structure
All components use this format:
```vue
<template lang="pug">
v-container
  v-row
    v-col Content here
</template>

<script setup>
// Composition API with script setup
</script>

<style lang="less" scoped>
// Component-specific styles
</style>
```

### Pug Syntax
- **ALWAYS** use `<template lang="pug">` in Vue components
- Use 2-space indentation
- Vuetify components: `v-btn`, `v-card`, `v-container`, etc.
- Example:
  ```pug
  v-btn(color="primary" @click="handleClick")
    | Click me
  ```

### Less Styling
- Main styles in `assets/less/main.less`
- Component-specific styles use `<style lang="less" scoped>`
- Supports standard Less features (variables, mixins, nesting)

### Vuetify Usage
- Auto-imported components (no manual imports needed)
- Use Material Design Icons: `<v-icon>mdi-icon-name</v-icon>`
- Theme color: `#0A1020` (dark blue)

## Accessibility Requirements (Critical)

This project has **strong accessibility goals**. When making changes:

1. **Semantic HTML:** Use proper HTML5 elements (`<nav>`, `<main>`, `<section>`, etc.)
2. **Keyboard Navigation:** All interactive elements must be keyboard accessible
3. **Focus Styles:** Maintain visible focus indicators
4. **Color Contrast:** Ensure sufficient contrast ratios
5. **Skip Links:** Preserve skip-to-content functionality
6. **ARIA Labels:** Add where needed for screen readers
7. **Language:** HTML lang attribute is set to 'de' (German)

**Testing:** The project aims for Lighthouse and axe accessibility compliance.

## Performance Guidelines

1. **SSR First:** Nuxt 3 SSR is enabled by default - preserve this
2. **Minimal JS:** Keep JavaScript complexity low per view
3. **Semantic Structure:** Use shallow DOM trees
4. **Critical Content:** Ensure content is accessible without JavaScript
5. **Lazy Loading:** Use for images and heavy components when appropriate

## CI/CD Pipeline

**GitHub Actions Workflow** (`.github/workflows/ci.yml`):
- Triggers: Push and Pull Request events
- Steps:
  1. Checkout code
  2. Setup Node.js 20 with npm cache
  3. Run `npm ci` (clean install)
  4. Run `npm run build`

**Your changes MUST pass the CI build.** Always run `npm run build` locally before committing.

## Common Issues & Solutions

### Build Errors
- **Error: Cannot find module @rollup/rollup-**
  - Solution: `rm -rf node_modules package-lock.json && npm install`

### Development Server
- **Port 3333 already in use:**
  - Kill existing process or use different port: `npm run dev -- -p 3334`

### Vuetify Components Not Found
- Check that `vite-plugin-vuetify` is configured in `nuxt.config.ts`
- Vuetify components are auto-imported - don't manually import them

## Configuration Files

- **nuxt.config.ts:** Nuxt configuration, Vuetify setup, meta tags, SSR settings
- **package.json:** Scripts and dependencies (DO NOT modify versions unless necessary)
- **.github/workflows/ci.yml:** CI pipeline configuration

## File Exclusions

The following are build artifacts and should NOT be committed:
- `node_modules/`
- `.nuxt/`
- `.output/`
- `dist/`
- `package-lock.json`
- `.cache/`
- `*.log`

These are excluded via `.gitignore`.

## Making Changes

1. **Understand the context:** Review related components and pages
2. **Follow existing patterns:** Match the Pug/Less/Vue structure
3. **Test locally:**
   - Run `npm run dev` to test in development
   - Run `npm run build` to ensure production build succeeds
4. **Check accessibility:** Verify keyboard navigation and semantic HTML
5. **Preserve performance:** Avoid unnecessary JavaScript
6. **German content:** Remember that content is in German (legal pages required)

## Trust These Instructions

**These instructions are verified and accurate.** Only search for additional information if:
- The instructions are incomplete for your specific task
- You encounter errors not covered here
- The repository structure has changed significantly

When in doubt, follow the patterns established in existing components and pages.
