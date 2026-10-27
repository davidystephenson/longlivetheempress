---
name: named-intermediate-values
description: Use named intermediate values for nested expressions, calculated method receivers, and arrow-function object returns.
---

# Use named intermediate values

Give a fallback expression or calculation its own named constant before using
it inside a larger expression.

Bad:

```ts
const variants = {
  ...oldVariants,
  ...(props.variants ?? { default: 1 })
}
```

Good:

```ts
const newVariants = props.variants ?? { default: 1 }
const variants = {
  ...oldVariants,
  ...newVariants
}
```

Give a calculated result its own named constant before calling a method on it.

Bad:

```ts
const variantValue = (variantBase + variantRandomOffset).toString(16)
```

Good:

```ts
const variantNumber = variantBase + variantRandomOffset
const variantValue = variantNumber.toString(16)
```

Never return an object literal from an arrow function with parentheses.
Use a function body and an explicit return statement.

Bad:

```ts
const docs = ids.map(id => ({ id, date: new Date() }))
```

Good:

```ts
const docs = ids.map(id => {
  return { id, date: new Date() }
})
```
