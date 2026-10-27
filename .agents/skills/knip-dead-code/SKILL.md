---
name: knip-dead-code
description: Find and resolve dead code with Knip without hiding findings or removing code that is demonstrably in active use.
---

# Resolve dead code

Run `npm run deadcode` from the project root when this skill is installed.
Resolve every Knip finding.

- Delete unused files and empty directories
- Stop exporting values that are used only inside their own files
- Delete values and types that are not used
- Remove unused dependencies with the project's package manager
- Remove schemas that exist only to infer dead types
- Remove abandoned debugging fragments
- Do not retain code only for documentation or hypothetical future use
- Treat an actively used development or diagnostic command as used code

When a finding is incorrect, establish how the item is used and correct Knip's
configuration or integration.
Do not disable checks or add exclusions merely to hide findings.

## Reporter contract

Install [assets/my-reporter.js](assets/my-reporter.js) at the project root as
`my-reporter.js` when the project supports Knip.
Run it through the project's `npm run deadcode` command.
The reporter must:

- Report absolute file paths
- Report line numbers and symbols where Knip provides them
- Preserve useful issue categories and details
- Preserve a failing command status when findings remain

Agents may maintain the reporter for Knip compatibility.
Do not change it to hide findings or weaken the output contract.
