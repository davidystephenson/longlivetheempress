---
name: avoid-let
description: Avoid let variables and compute values without reassignment when writing or reviewing code.
---

# Avoid reassignment

Avoid `let` variables.
Prefer computing values without reassignment.

## Transform collections

Bad:

```ts
let result = []
for (const item of items) {
  result.push(processItem(item))
}
```

Good:

```ts
const result = items.map(processItem)
```

## Build keyed objects

Use `Object.fromEntries` when converting a collection into a keyed object.

```ts
interface User {
  id: string
  name: string
}

function indexUsers (props: {
  users: User[]
}): Record<string, User> {
  const entries = props.users.map(
    user => [user.id, user] as const
  )
  return Object.fromEntries(entries)
}
```

## Select conditional values

Put conditional selection in a named function when direct assignment would
require reassignment.

```ts
function getMessage (props: {
  error: boolean
  loading: boolean
}): string {
  if (props.error) {
    return 'Error occurred'
  }
  if (props.loading) {
    return 'Loading...'
  }
  return 'Success!'
}

const message = getMessage({ error: isError, loading: isLoading })
```

## Return values from try and catch

Put a `try` and `catch` operation in a function that returns the value instead of assigning it to a `let` variable in the caller.

```ts
async function create (props: {
  email: string
}): Promise<User> {
  try {
    return await createUser({ email: props.email })
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message)
    }
    throw error
  }
}

const user = await create({ email: input.email })
```
