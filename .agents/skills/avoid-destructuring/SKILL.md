---
name: avoid-destructuring
description: Prefer named objects and direct property access over object destructuring in declarations, assignments, and function parameters. Does not apply to array destructuring or named imports.
---

# Avoid object destructuring

Keep objects named and access their properties directly.
Avoid object destructuring in variable declarations, assignments, and function parameters, including nested patterns and object rest bindings.
When a function returns an object, give that result a meaningful name instead of immediately destructuring it.

This rule applies only to objects.
Array and tuple destructuring, including React state pairs, is outside its scope.
Named imports and exports are module syntax, not object destructuring.

## Object properties

Bad:

```ts
const { name, email } = person
sendInvitation(name, email)
```

Good:

```ts
sendInvitation(person.name, person.email)
```

## Function results

Bad:

```ts
const { createSelectSchema } = createSchemaFactory({ coerce: { date: true } })
const personSchema = createSelectSchema(personTable)
```

Good:

```ts
const schemaFactory = createSchemaFactory({ coerce: { date: true } })
const personSchema = schemaFactory.createSelectSchema(personTable)
```

## Parameters

Bad:

```js
function printUser ({ name, id }) {
  console.log(`${name}'s id is ${id}`)
}
```

Good:

```js
function printUser (user) {
  console.log(`${user.name}'s id is ${user.id}`)
}
```
