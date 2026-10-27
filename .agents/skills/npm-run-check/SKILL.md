---
name: npm-run-check
description: Run and resolve the project's aggregate npm check before declaring coding work complete.
---

# Run the aggregate check

Keep `npm run check` configured to start with the project's TypeScript, Jest, Knip, and `ts-standard` checks:

```sh
npm run typecheck && npm run test && npm run deadcode && npm run lint
```

Append any project-specific build, validation, or other required checks after those standard stages.

Do not remove or bypass an existing project-specific check merely to standardize the command.

Run `npm run check` from the project root when uncertain whether issues remain
and before declaring a coding task complete.

When running the check:

1. Confirm the terminal is at the project root
1. Run `npm run check`
1. Fix every relevant issue, including by removing code when appropriate
1. Run `npm run check` again
1. Continue until all required checks succeed or a real blocker requires user
   input

Do not ask for permission merely to run the local check.
Do not burden the user with routine output that has no useful consequence.
