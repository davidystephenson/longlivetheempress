---
name: typescript
description: Apply David's type-safety and type-definition preferences when writing or reviewing TypeScript.
---

# Use TypeScript safely

- Use TypeScript for project code
- Preserve safe type inference
- Prefer interfaces over type aliases when defining object types directly
- Prefer named types, except for a function's inline `props` parameter type
- Avoid TypeScript enums and use const maps instead
- Use guard clauses that throw errors when runtime validation is logically
  necessary
- Avoid type assertions except `as const`
- Never use `any`, use `unknown` or generic type parameters instead
- Avoid custom type guards whose internal logic TypeScript cannot verify
- Avoid the non-null assertion operator
- Give implicit `any` values a safe type
- Check imports and types carefully

Bad:

```ts
const user: { id: number, name: string } = {
  id: 1,
  name: 'zelda'
}
```

Good:

```ts
interface User {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'zelda'
}
```
