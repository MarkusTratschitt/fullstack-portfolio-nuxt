# GitHub Actions CI Blueprint

## Required Pipeline
1. Install deps + cache
2. Lint
3. Typecheck
4. Unit tests
5. Build
6. E2E smoke (on preview URL)

## Branch Protection
- Require all checks before merge
- No direct pushes to main

## Caching
- Dependency cache (npm/pnpm lockfile key)
- Playwright browser cache

## Preview Deployments
- One preview per PR
- Post URL in PR status/check

## Quality Gates
- Block merge on failed checks
- Block merge on missing PR template fields

## Rollback
- Last known good release tag documented
- One-command rollback path defined
