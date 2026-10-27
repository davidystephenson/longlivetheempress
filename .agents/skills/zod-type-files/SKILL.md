---
name: zod-type-files
description: Keep Zod schemas and their inferred types together in dedicated camelCase Types.ts or Types.tsx files.
---

# Keep Zod schemas in type files

- Keep schemas and their inferred types together in files dedicated to types
- End type filenames with `Types.ts` or `Types.tsx`
- Use camelCase filenames such as `authTypes.ts`
- Modify and compose schemas only inside type files
- Infer schema types only inside type files
- Outside type files, use schemas only to parse values
- Give every inferred type a name instead of inferring it inline inside another
  type or schema
- Infer a type directly below its schema
- Declare a type above a schema when the type must annotate that schema

Bad:

```ts
const baseCategorySchema = z.object({ name: z.string() })

type Category = z.infer<typeof baseCategorySchema> & {
  subcategories: Category[]
}
```

Good:

```ts
const baseCategorySchema = z.object({ name: z.string() })
type BaseCategory = z.infer<typeof baseCategorySchema>

type Category = BaseCategory & {
  subcategories: Category[]
}
```

Good:

```ts
const userSchema = z.object({ name: z.string() })
type User = z.infer<typeof userSchema>

const postSchema = z.object({ title: z.string() })
type Post = z.infer<typeof postSchema>
```

For a recursive schema that requires an annotation, declare the recursive type
before the schema:

```ts
const baseCategorySchema = z.object({ name: z.string() })
type BaseCategory = z.infer<typeof baseCategorySchema>
type Category = BaseCategory & { subcategories: Category[] }

const categorySchema: z.ZodType<Category> = baseCategorySchema.and(
  z.object({
    subcategories: z.lazy(() => categorySchema.array())
  })
)
```
