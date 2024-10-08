# GetSchemaDiffResponse

## Example Usage

```typescript
import { GetSchemaDiffResponse } from "petstore/models/operations";

let value: GetSchemaDiffResponse = {
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
| `schemaDiff`                                                       | [components.SchemaDiff](../../models/components/schemadiff.md)     | :heavy_minus_sign:                                                 | OK                                                                 |