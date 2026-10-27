---
name: throw-errors
description: Preserve useful errors and avoid indiscriminate catching when implementing or reviewing failure handling.
---

# Prefer throwing useful errors

- Do not catch every error indiscriminately
- Throwing an error is often the correct response to a logic failure
- Preserve the original error message when it is the most useful explanation
- Catch errors only when you can handle them meaningfully. Otherwise, let them
  propagate.
