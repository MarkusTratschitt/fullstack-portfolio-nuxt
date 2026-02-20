# Branch Protection + Required Checks Rollout (Operational)

Status: **Ready to execute**
Scope: Governance rollout for Nuxt team repos

## 0) Preconditions
- Repository admin access available
- Default branch confirmed (`main`)
- CI workflow names finalized (required for branch rules)

## 1) Required Checks Definition (target)
Set these as **required** before merge:
1. `lint`
2. `typecheck`
3. `unit-tests`
4. `build`
5. `e2e-smoke` (or optional in phase 1, mandatory in phase 2)

> Note: Required check names must match GitHub Actions job names exactly.

## 2) Branch Protection Policy (main)
Enable on `main`:
- Require a pull request before merging
- Require approvals: **1** (or **2** for high-risk repos)
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Require conversation resolution before merging
- Restrict who can push directly to `main` (recommended)
- Include administrators (recommended)

## 3) PR Governance
Enforce `.github/PULL_REQUEST_TEMPLATE.md` usage:
- Approval-gate checkbox present
- Risk + rollback section required
- Typing + i18n confirmations required

## 4) Rollout Phases

## Phase 1 (Day 1–2)
- Apply branch protection
- Mark `lint`, `typecheck`, `build` as required
- Keep `e2e-smoke` non-blocking if flaky

## Phase 2 (Day 3–5)
- Stabilize CI runtime + cache
- Promote `unit-tests` to required
- Promote `e2e-smoke` to required once stable

## Phase 3 (Day 6–10)
- Enable include-admins (if initially disabled)
- Tune CODEOWNERS/reviewer ownership
- Audit bypasses and direct pushes (must be zero)

## 5) CLI Execution (with gh)
If `gh` is authenticated, execute:

```bash
# 1) Confirm auth
gh auth status

# 2) Show repo
gh repo view --json nameWithOwner,defaultBranchRef

# 3) Create/update branch protection via API
# (replace ORG/REPO and branch if needed)

gh api \
  -X PUT \
  repos/ORG/REPO/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  -f required_status_checks.strict=true \
  -F required_status_checks.contexts[]='lint' \
  -F required_status_checks.contexts[]='typecheck' \
  -F required_status_checks.contexts[]='build' \
  -f enforce_admins=true \
  -f required_pull_request_reviews.required_approving_review_count=1 \
  -f required_pull_request_reviews.dismiss_stale_reviews=true \
  -f required_conversation_resolution=true \
  -f restrictions='null'
```

## 6) Verification Checklist
- [ ] PR to main cannot merge with failing required checks
- [ ] Direct push to main blocked
- [ ] Missing approvals block merge
- [ ] Missing conversation resolution blocks merge
- [ ] PR template appears on every new PR

## 7) Failure / Rollback Plan
If rollout blocks delivery unexpectedly:
1. Temporarily set `e2e-smoke` to non-required
2. Keep `lint`, `typecheck`, `build` required
3. Open incident note with root cause + recovery ETA
4. Re-enable full policy within 24–48h

## 8) Ownership
- Release/Ops: policy setup + CI check mapping
- Reviewer: governance audit
- Builder/Debugger: stabilize failing checks
