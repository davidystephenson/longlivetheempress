---
name: zod
description: Apply David's core Zod parsing, schema naming, inference, and boundary-validation preferences.
---

# Validate data with Zod

- Base needed TypeScript types on Zod schemas with `z.infer` when practical
- Do not infer types that are not currently used
- Parse data delivered over a network or read from a filesystem
- Do not parse data whose type TypeScript can already infer safely
- Use `.parse` instead of `.safeParse`, catching errors only when appropriate
- Use camelCase schema names ending in `Schema`
- Do not use `.strict` on Zod schemas
- Let Zod infer ordinary schema types
- Add an explicit schema annotation only when TypeScript cannot correctly infer
  a recursive schema
- Coerce date strings into dates with `z.coerce.date()` when appropriate
