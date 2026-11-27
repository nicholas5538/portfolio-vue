## Code changes require approval

**Never create, edit, rename or delete any file without the user's explicit approval.** This is a strict rule with no exceptions for small or obvious changes. Markdown (`.md`) files are exempt from this rule.

- Before changing anything, describe the proposed change and the files it affects, then wait for a clear "yes".
- This covers every way of changing files, including edit tools, shell commands, formatters, `--fix` flags, code generators and dependency installs.
- Approval covers only the change described. Ask again for anything beyond it, including follow-up fixes.
- Questions, bug reports, review findings and hook failures are not approval. Report them and propose a fix.
- Subagents follow the same rule.

## Agent skills

### Issue tracker

Issues and specs live in GitHub Issues for `nicholas5538/portfolio-vue`, managed with the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context. See `docs/agents/domain.md`.
