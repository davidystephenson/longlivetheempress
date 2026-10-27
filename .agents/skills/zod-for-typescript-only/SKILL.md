---
name: zod-for-typescript-only
description: Keep Zod schemas limited to TypeScript-supported data shapes and enforce business constraints in ordinary code.
---

# Use Zod for TypeScript-supported shapes

Use Zod to establish TypeScript-supported data shapes at untrusted boundaries.
Keep business validation in ordinary code.

Do not use these Zod methods for business constraints:

- `.default`
- `.email`
- `.max`
- `.min`
- `.refine`
- `.transform`

Instead, parse the TypeScript-supported shape and use ordinary conditional
logic for the additional requirement.

```ts
import { z } from 'zod'

export const passwordSchema = z.string()
```

```ts
import { passwordSchema } from './passwordTypes'

export default function validatePassword (props: {
  password: unknown
}): string {
  const password = passwordSchema.parse(props.password)

  if (password.length < 8) {
    throw new Error('The password must be at least 8 characters')
  }

  return password
}
```
