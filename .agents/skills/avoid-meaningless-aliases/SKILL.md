---
name: avoid-meaningless-aliases
description: Apply direct property access, validated property access, and computed lookup rules when writing or reviewing TypeScript.
---

# Avoid meaningless aliases

Avoid aliases that only repeat an object property or a type TypeScript already
guarantees.

## Direct property access

Avoid a local constant when it only repeats an object property.

Bad:

```ts
const operationCount = props.flow.operationCount
const operationSeed = `${seedString}-op-${operationCount}`
```

Good:

```ts
const operationSeed = `${seedString}-op-${props.flow.operationCount}`
```

Do not convert a value to a type that TypeScript already guarantees.

Bad:

```ts
export default function createRand (props: {
  seed: string
}): Operation {
  const seedString = String(props.seed)
  return new Rand(seedString)
}
```

Good:

```ts
export default function createRand (props: {
  seed: string
}): Operation {
  return new Rand(props.seed)
}
```

Avoid aliases that only rename a property before validation and use.

Bad:

```ts
const token = request.auth
if (token == null) {
  throw new Error('Unauthenticated')
}
console.info('valid request:', token)
```

Good:

```ts
if (request.auth == null) {
  throw new Error('Unauthenticated')
}
console.info('valid request', request.auth)
```

## Delayed callbacks

Re-read and validate properties inside a callback when their latest values are required.

Bad:

```ts
if (request.query == null) {
  throw new Error('Missing query')
}
const component = request.query.component
setTimeout(() => {
  decodeURIComponent(component)
}, 1000)
```

Good:

```ts
setTimeout(() => {
  if (request.query == null) {
    throw new Error('Missing query')
  }
  decodeURIComponent(request.query.component)
}, 1000)
```

## Lookups

Write fixed literal lookups inline.

Bad:

```ts
const firstItem = props.items[0]
const secondItem = props.items[1]
return [firstItem, secondItem]
```

Good:

```ts
return [props.items[0], props.items[1]]
```

Give computed indices or keys and their lookup results named constants.

Bad:

```ts
const lastIndex = shuffledItems.length - 1
return [shuffledItems[0], shuffledItems[lastIndex]]
```

Good:

```ts
const lastIndex = shuffledItems.length - 1
const lastItem = shuffledItems[lastIndex]
return [shuffledItems[0], lastItem]
```

Bad:

```ts
return data[input.trim().toLowerCase()]
```

Good:

```ts
const normalizedKey = input.trim().toLowerCase()
const normalizedValue = data[normalizedKey]
return normalizedValue
```
