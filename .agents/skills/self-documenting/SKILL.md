---
name: self-documenting
description: Apply David's comment, naming, decomposition, and self-documenting-code preferences.
---

# Write self-documenting code

Do not add explanatory code comments, JSDoc, or license boilerplate.
Put rationale and design documentation in the project's specifications.
Tool directives are permitted when necessary.

This rule controls code written for the project.
It does not direct agents to remove third-party notices as unrelated cleanup.

- Prefer descriptive and explicit names over short or ambiguous names
- Give hardcoded values named constants in `ALL_CAPS`
- Break multi-step logic into single-step lines with named constants
- Prefer early returns over nested conditions
- Avoid abbreviations while favoring short, common words when possible
- Name functions with verbs or verbal phrases
- Name boolean variables with adjectives
- Do not prefix boolean variables with forms such as `is` or `has`
- Prefix event handlers with `handle`
- Give TypeScript types the clearest direct names
- Do not add `Type`, `I`, or `Interface` to a type name without a meaningful
  reason
- Include a feature or entity name in a type name when it improves clarity
- Permit camelCase and PascalCase filenames in the same folder

Bad:

```ts
const isEmpty = count === 0
```

Good:

```ts
const empty = count === 0
```
