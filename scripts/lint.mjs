import { existsSync } from 'node:fs'

const requiredPaths = [
  'package.json',
  'nuxt.config.ts',
  'pages/index.vue'
]

const missing = requiredPaths.filter((p) => !existsSync(new URL(`../${p}`, import.meta.url)))

if (missing.length) {
  console.error('Lint failed: missing required files:', missing.join(', '))
  process.exit(1)
}

console.log('Lint OK: required project files are present')
