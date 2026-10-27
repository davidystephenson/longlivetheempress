---
name: jest-test
description: Test code with the project's Jest command while keeping tests and implementation aligned with current specifications.
---

# Test code with Jest

- Treat current specifications, requirements, and intended behavior as the authority for both tests and implementation
- Add, update, or remove tests when behavior changes or coverage is missing
- Fix the implementation when a valid test exposes a defect
- Run `npm run test` when the implementation and tests are expected to agree
- Install [assets/parse-jest-failures.cjs](assets/parse-jest-failures.cjs) at the project root as `parse-jest-failures.cjs`
- Keep `npm run test` configured to run `npx jest --json > jest-results.json || node parse-jest-failures.cjs`
- When the project uses Git, add `jest-results.json` to `.gitignore`
