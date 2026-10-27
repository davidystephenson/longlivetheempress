---
name: clean
description: Apply David's general clean-code preferences when writing or reviewing JavaScript or TypeScript.
---

# Write clean code

- Use functional and declarative programming patterns
- Do not use classes
- Keep code DRY and do not repeat logic unnecessarily
- Prefer lines shorter than 70 characters except for template literals
- Omit semicolons unless they are syntactically necessary
- Use `async` and `await` for asynchronous logic
- Do not use `.then` for promises
- Use template literals instead of string addition
- Prefer `== null` when testing for either `null` or `undefined`
- Export individual types and values inline
- Re-export directly from the source module

## Nullish values

Bad:

```ts
if (props.seed === undefined) {
  throw new Error('Seed is required')
}
```

Good:

```ts
if (props.seed == null) {
  throw new Error('Seed is required')
}
```

## Exports

Bad:

```ts
const baseSchema = z.object({ id: z.string() })
const ownerSchema = z.object({ ownerId: z.string() })
export { baseSchema, ownerSchema }
```

Good:

```ts
export const baseSchema = z.object({ id: z.string() })
export const ownerSchema = z.object({ ownerId: z.string() })
```

Bad:

```ts
import { thing } from './thing'
export { thing }
```

Good:

```ts
export { thing } from './thing'
```
