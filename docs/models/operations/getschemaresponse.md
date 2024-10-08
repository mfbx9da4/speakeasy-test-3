# GetSchemaResponse

## Example Usage

```typescript
import { GetSchemaResponse } from "petstore/models/operations";

let value: GetSchemaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `schema`                                                           | [components.Schema](../../models/components/schema.md)             | :heavy_minus_sign:                                                 | OK                                                                 |