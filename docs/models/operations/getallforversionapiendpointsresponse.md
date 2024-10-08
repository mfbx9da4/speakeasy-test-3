# GetAllForVersionApiEndpointsResponse

## Example Usage

```typescript
import { GetAllForVersionApiEndpointsResponse } from "petstore/models/operations";

let value: GetAllForVersionApiEndpointsResponse = {
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
| `apiEndpoints`                                                     | [components.ApiEndpoint](../../models/components/apiendpoint.md)[] | :heavy_minus_sign:                                                 | OK                                                                 |