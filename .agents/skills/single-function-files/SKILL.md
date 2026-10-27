---
name: single-function-files
description: Prefer one primary function per file with a matching filename and an inline default export.
---

# Prefer single-function files

- Prefer one primary function per file
- Match the filename to the primary function name
- Default-export the function on its declaration line
- Do not create a separate exception or category for helper functions

```ts
export default function add (props: {
  a: number
  b: number
}): number {
  return props.a + props.b
}
```
