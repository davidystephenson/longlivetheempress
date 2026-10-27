---
name: alphabetic
description: Apply David's alphabetic-order preferences when definition order has no semantic or readability requirement.
---

# Prefer alphabetic order

- Define object properties in alphabetic order when their order has no
  semantic meaning
- Prefer alphabetic order for lists when their order has no semantic meaning
- Prefer alphabetic order for method calls and arguments when their order has
  no semantic meaning
- Prefer alphabetic variable order when it does not make a block less intuitive
  or readable
- Alphabetize imports only when their order has no semantic meaning
- Alphabetize React props and destructured property names only when their
  order has no semantic meaning

```ts
const tagSchema = z.object({
  createdAt: z.string(),
  id: z.string(),
  name: z.string(),
  updatedAt: z.string()
})
```

```ts
export const statusSchema = z.enum([
  'Complete',
  'Failed',
  'Pending'
])
```

```ts
const colorList = colorController
  .blue()
  .green()
  .red()
```
