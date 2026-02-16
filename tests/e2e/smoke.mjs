import { existsSync, readFileSync } from 'node:fs'

const root = new URL('../../', import.meta.url)
const requiredPaths = [
  'package.json',
  'pages/index.vue',
  'components/HeroSection.vue'
]

const missing = requiredPaths.filter((p) => !existsSync(new URL(p, root)))

if (missing.length) {
  console.error('e2e-smoke failed: missing required files:', missing.join(', '))
  process.exit(1)
}

const indexVue = readFileSync(new URL('pages/index.vue', root), 'utf8')
if (!indexVue.includes('HeroSection')) {
  console.error('e2e-smoke failed: pages/index.vue should reference HeroSection')
  process.exit(1)
}

console.log('e2e-smoke OK')
