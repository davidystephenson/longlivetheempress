---
name: functions
description: Apply David's named-function, parameter-object, return-type, and props conventions when writing or reviewing functions.
---

# Define functions consistently

- Use the `function` keyword for named functions
- Give named functions explicit return types
- Let inline callbacks infer their return types
- Give functions whose signatures are under project control one inline-typed
  parameter object named `props`
- Use the supplied positional arguments and inferred parameter types for
  callbacks passed to existing APIs
- Do not pass an empty `props` object to a function with no parameters
- Avoid destructuring `props`
- Require logically necessary properties in the parameter type

## Parameter objects

Bad:

```ts
function add (a: number, b: number): number {
  return a + b
}
```

Good:

```ts
function add (props: {
  a: number
  b: number
}): number {
  return props.a + props.b
}
```

## Functions without parameters

Bad:

```ts
function print (props: {}): void {
  console.info('hello world')
}
```

Good:

```ts
function print (): void {
  console.info('hello world')
}
```

## Inline parameter types

Bad:

```ts
interface AddProps {
  a: number
  b: number
}

function add (props: AddProps): number {
  return props.a + props.b
}
```

Good:

```ts
function add (props: {
  a: number
  b: number
}): number {
  return props.a + props.b
}
```

## Direct props access

Bad:

```ts
function add (props: {
  a: number
  b: number
}): number {
  const { a, b } = props
  return a + b
}
```

Good:

```ts
function add (props: {
  a: number
  b: number
}): number {
  return props.a + props.b
}
```

## Required properties

Bad:

```ts
function createFlow (props?: {
  seed: Uid
}): Flow {
  if (props?.seed == null) {
    throw new Error('Seed is required')
  }
  return { seed: props.seed }
}
```

Good:

```ts
function createFlow (props: {
  seed: Uid
}): Flow {
  return { seed: props.seed }
}
```
