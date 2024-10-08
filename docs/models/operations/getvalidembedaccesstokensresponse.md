# GetValidEmbedAccessTokensResponse

## Example Usage

```typescript
import { GetValidEmbedAccessTokensResponse } from "petstore/models/operations";

let value: GetValidEmbedAccessTokensResponse = {
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
| `embedTokens`                                                      | [components.EmbedToken](../../models/components/embedtoken.md)[]   | :heavy_minus_sign:                                                 | OK                                                                 |