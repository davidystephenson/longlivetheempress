---
name: prefer-if
description: Prefer clear if statements for conditional logic and replace switch blocks when writing or reviewing code.
---

# Prefer if statements

Prefer `if` statements when they express the same logic clearly.
This is a preference, not a universal ban on ternary expressions.

Bad:

```ts
return single
  ? importSingleItem({ flow: baseFlow, item: props.items[0] })
  : importMultipleItems({ flow: baseFlow, items: props.items })
```

Good:

```ts
if (single) {
  return importSingleItem({ flow: baseFlow, item: props.items[0] })
}
return importMultipleItems({ flow: baseFlow, items: props.items })
```

Use guard clauses when they make multi-part conditional logic easier to read.

Bad:

```ts
function isOutputOperation (props: {
  operation: Operation
}): boolean {
  return props.operation.output.length > 0 &&
    props.operation.aInput.length === 0 &&
    props.operation.bInput.length === 0
}
```

Good:

```ts
function isOutputOperation (props: {
  operation: Operation
}): boolean {
  const empty = props.operation.output.length <= 0
  if (empty) {
    return false
  }
  const aFull = props.operation.aInput.length !== 0
  if (aFull) {
    return false
  }
  const bFull = props.operation.bInput.length !== 0
  if (bFull) {
    return false
  }
  return true
}
```

Do not use `switch` and `case` blocks.
Use `if` statements instead.

Bad:

```ts
switch (input.type) {
  case 'boolean': {
    return { type: 'boolean' }
  }
  case 'text': {
    return { type: 'text' }
  }
  default: {
    throw new Error('Invalid type')
  }
}
```

Good:

```ts
if (input.type === 'boolean') {
  return { type: 'boolean' }
}
if (input.type === 'text') {
  return { type: 'text' }
}
throw new Error('Invalid type')
```
