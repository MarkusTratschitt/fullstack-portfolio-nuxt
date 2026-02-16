# QA & Release Modul (Senior) – Nuxt 3 (Testing, Performance, GitHub Actions)

Kontext: Dieses Modul operationalisiert die bestehenden Team-Artefakte in `docs/testing/test-matrix.md`, `docs/performance/playbook.md` und `docs/ci/blueprint.md` für einen seniorigen Delivery-Standard.

---

## 1) Lernziele (Objectives)

Nach 25 Minuten kann das Team:

1. **Teststrategie risikobasiert anwenden** (Unit vs Component vs E2E) statt Coverage-getriebener Entscheidungen.
2. **Performance als Release-Kriterium** behandeln (Budgets, Messpunkte, Regression-Policy).
3. **Eine GitHub-Actions-Pipeline als Quality Gate** betreiben (lint → typecheck → unit → build → e2e smoke).
4. **Fehler strukturiert triagieren** (Fail-Fast, Ownership, Impact, Rollback-Entscheidung).
5. **Release-Readiness reproduzierbar prüfen** (DoD + CI + Betriebsperspektive).

---

## 2) 25-Minuten-Lesson-Plan

### Zeitbox & Ablauf

#### 0–3 min: Framing „Quality = Delivery-Geschwindigkeit"
- Warum QA/CI für Senior Teams nicht „zusätzliche Arbeit“, sondern **Risikoreduktion pro Merge** ist.
- Prinzip: Kleine PRs, harte Gates, schnelle Rückmeldung.

#### 3–8 min: Test-Pyramide für Nuxt 3 (praxisnah)
- **Unit (Vitest):** Composables, Pinia-Transitions, Mapping-Logik.
- **Component (@vue/test-utils):** Vuetify States (loading/empty/error/success), Events/Slots, i18n.
- **E2E (Playwright):** Auth + Kernfluss + Formular/Validation + Smoke auf Preview.
- Regel: Jeder Bugfix bekommt mindestens einen Regressionstest.

#### 8–13 min: Performance als CI-Gate
- Aus `performance/playbook.md`: SSR/SSG/client-only bewusst wählen.
- Budgets definieren und pro PR vergleichen:
  - Initial JS Budget
  - LCP/CLS/INP auf Key Pages
  - Bundle-Delta bei größeren Features
- Stop-Kriterium: Unbegründete Budget-Verletzung blockiert Merge.

#### 13–20 min: GitHub Actions Blueprint (inkl. Branch Protection)
- Pipeline-Stufen und parallele Jobs.
- Caching-Strategie (Dependencies + Playwright Browser).
- Preview Deployment pro PR + Smoke E2E gegen Preview URL.
- Branch Protection: Keine direkten Pushes auf `main`, alle Required Checks grün.

#### 20–25 min: Failure Triage Drill (Incident-Simulation)
- Beispiel: „E2E smoke failt nur auf Preview“.
- Team übt: Klassifikation → Verantwortliche Spur → Fix/Rollback-Entscheidung → Retest.
- Abschluss mit Readiness-Checklist (Go/No-Go).

---

## 3) CI Pipeline Blueprint (GitHub Actions)

### Zielbild
- **PR-Pipeline:** schnell, deterministisch, merge-blockend.
- **Main-Pipeline:** identisch oder strenger, plus Release/Deploy.
- **Qualitätsprinzip:** Kein „grüner Build durch Ausnahmen“. Ausnahmen sind dokumentiert und zeitlich begrenzt.

### Referenz-Workflow (Blueprint)

```yaml
name: ci

on:
  pull_request:
  push:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci

  lint_typecheck:
    runs-on: ubuntu-latest
    needs: setup
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck

  unit_component:
    runs-on: ubuntu-latest
    needs: setup
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:component

  build:
    runs-on: ubuntu-latest
    needs: [lint_typecheck, unit_component]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build

  e2e_smoke:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - name: Cache Playwright
        uses: actions/cache@v4
        with:
          path: ~/.cache/ms-playwright
          key: playwright-${{ runner.os }}-${{ hashFiles('package-lock.json') }}
      - run: npx playwright install --with-deps
      - run: npm run test:e2e:smoke

  performance_gate:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run perf:ci
```

### Required Checks (Branch Protection)
- `lint_typecheck`
- `unit_component`
- `build`
- `e2e_smoke`
- `performance_gate`

### Release-Erweiterungen (empfohlen)
- Tagging von „last known good“.
- Release-Notes-Job aus Conventional Commits.
- One-command Rollback Runbook (Dokument-Link in Pipeline Summary).

---

## 4) Test Matrix (Senior Level)

| Testebene | Fokus | Beispiele im Nuxt 3 Stack | Trigger | Exit-Kriterium |
|---|---|---|---|---|
| Unit (Vitest) | deterministische Business-Logik | Composables (Branches), Pinia Actions/Getters, Service-Mapping | Jeder PR | Kritische Module grün, keine flakey Tests |
| Component (@vue/test-utils) | UI-Verhalten + Integrationskante | Vuetify Props/Events/Slots, State-Rendering, i18n Locale-Switch | PR bei UI-Änderung | Kernkomponenten verifiziert, Snapshots nur selektiv |
| E2E (Playwright) | Nutzerkritische Flows | Auth, Core Conversion Path, Form Submit + Validation + Recovery | PR + nightly | Smoke auf Preview immer grün |
| Performance | User-Experience unter Last/Realität | LCP/CLS/INP auf Key Pages, Bundle-Deltas, Initial JS Budget | PR + main | Budgets eingehalten oder mit ADR begründet |
| Security/Config (lightweight) | Release-Hygiene | Secrets vorhanden, ENV vollständig, Preview-Config konsistent | Vor Release | Keine offenen Blocker |

### Priorisierungsregel
1. Kritischer Business-Flow >
2. Fehlerhistorie/volatile Module >
3. Sichtbare Nutzeroberfläche >
4. Restabdeckung.

---

## 5) Failure Triage Flow (CI/Release)

### Ziel
Schnell unterscheiden zwischen **echtem Produktproblem**, **Testproblem** und **Infrastrukturproblem**.

### Entscheidungsfluss
1. **Fail erkannt** (GitHub Check rot).
2. **Klassifizieren in ≤5 Minuten**:
   - Build/Type/Lint
   - Test-Fail (Unit/Component/E2E)
   - Performance-Budget-Fail
   - Infra/Flaky (Runner, Netzwerk, externes System)
3. **Impact bewerten**:
   - Blocker für Merge/Release?
   - Nur Preview betroffen oder auch main?
4. **Ownership setzen**:
   - Primär-Owner (Feature-Team)
   - Sekundär-Owner (QA/Platform)
5. **Aktion wählen**:
   - Fix forward (sofortiger Patch)
   - Re-run (nur bei klarer Infra-Indikation)
   - Temporär quarantäne (nur mit Ticket + Ablaufdatum)
   - Rollback (wenn main/release gefährdet)
6. **Verifikation**:
   - Betroffene Stufe erneut grün
   - Regressionstest ergänzt, falls Produktbug
7. **Lernen sichern**:
   - Kurzpostmortem (1 Absatz)
   - Bei wiederholtem Muster: dauerhafte Pipeline- oder Testanpassung.

### SLA-Richtwerte
- PR-Blocker: Erstreaktion < 15 min, Entscheidung < 60 min.
- Main/Release-Blocker: Sofort, Rollback-Fenster < 30 min.

---

## 6) Final Readiness Checklist (Go/No-Go)

### A) Code & Qualität
- [ ] Lint + Typecheck grün
- [ ] Unit/Component Tests grün
- [ ] E2E Smoke auf Preview grün
- [ ] Für Bugfix existiert Regressionstest

### B) Performance
- [ ] Initial-JS-Budget eingehalten
- [ ] LCP/CLS/INP für Key Pages innerhalb Teamgrenzen
- [ ] Keine unbegründete Bundle-Regressionsspitze

### C) CI/CD & Prozess
- [ ] Alle Required Checks als Branch Protection aktiv
- [ ] PR enthält Risiko- und Rollback-Hinweis
- [ ] Preview Deployment verfügbar und geprüft
- [ ] Last known good Release-Referenz vorhanden

### D) Operative Freigabe
- [ ] Monitoring/Alerting für betroffene Kernpfade aktiv
- [ ] Rollback-Pfad dokumentiert und ausführbar
- [ ] Offene Risiken explizit akzeptiert (Owner + Datum)

### Go/No-Go-Regel
- **Go** nur, wenn alle A/B/C erfüllt sind und D keine kritischen Lücken zeigt.
- **No-Go** bei roten Checks, unbegründeten Budget-Verletzungen oder unklarem Rollback.

---

## Trainer-Hinweis (für Senior Facilitation)
- Diskutiere keine Tool-Features isoliert; diskutiere **Trade-offs unter Lieferdruck**.
- Lass Teilnehmende reale PRs/Fehlerfälle einbringen.
- Ziel ist nicht „mehr Tests“, sondern **höhere Änderungsfrequenz bei kontrolliertem Risiko**.
