# CreateSchemaStoreItemResponse

## Example Usage

```typescript
import { CreateSchemaStoreItemResponse } from "petstore/models/operations";

let value: CreateSchemaStoreItemResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `schemaStoreItem`                                                        | [components.SchemaStoreItem](../../models/components/schemastoreitem.md) | :heavy_minus_sign:                                                       | OK                                                                       |