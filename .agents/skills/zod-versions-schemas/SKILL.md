---
name: zod-versions-schemas
description: Compose reusable versioned Zod schemas with .or() and .and() while avoiding union, discriminatedUnion, extend, and shape spreading.
---

# Compose versioned schemas

- Use `.or()` instead of `z.union()` or `z.discriminatedUnion()`
- Use `.and()` instead of `.extend()`
- Define separate object schemas and compose them instead of spreading schema
  shapes
- Use intermediate types when they make the composition easier to understand
- Apply the same composition pattern to versioned subtypes
- Avoid recursive schemas when they do not fit this pattern
- Reuse shared base and version schemas when that is logically simpler than
  recreating them

```ts
const baseSchema = z.object({ id: z.string() })
const aVersionSchema = z.object({
  data: z.string(),
  type: z.literal('a')
})
const bVersionSchema = z.object({
  data: z.number(),
  type: z.literal('b')
})
const versionsSchema = aVersionSchema.or(bVersionSchema)

export const schema = baseSchema.and(versionsSchema)
export type Schema = z.infer<typeof schema>
```

```ts
const labelSpecificSchema = z.object({ label: z.string() })
const labelBaseSchema = baseSchema.and(labelSpecificSchema)

export const labelSchema = labelBaseSchema.and(versionsSchema)
export type LabelSchema = z.infer<typeof labelSchema>

export const labelDocSchema = labelSpecificSchema.and(versionsSchema)
```
