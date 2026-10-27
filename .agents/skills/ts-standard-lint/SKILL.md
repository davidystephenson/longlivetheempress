---
name: ts-standard-lint
description: Lint and automatically fix TypeScript with ts-standard in projects that install this linting standard.
---

# Lint TypeScript with ts-standard

- Use `ts-standard` for TypeScript linting
- Use the project's appropriate tools for other languages and file formats
- Run `npm run lint` from the project root to find and automatically fix
  supported problems
- Keep `npm run lint` configured to run `npx ts-standard --fix`
- Ignore the known `ts-standard` TypeScript-version warning when the configured
  TypeScript version has already been checked for compatibility
- Avoid trailing spaces and ensure files end with a newline

Automatic fixing is especially important for these findings because editor
tooling may struggle to save them correctly:

```text
Trailing spaces not allowed. (no-trailing-spaces)
Newline required at the end of file but not found (eol-last)
```
