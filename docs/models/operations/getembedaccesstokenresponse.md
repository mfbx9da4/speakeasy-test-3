# GetEmbedAccessTokenResponse

## Example Usage

```typescript
import { GetEmbedAccessTokenResponse } from "petstore/models/operations";

let value: GetEmbedAccessTokenResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `embedAccessTokenResponse`                                                                 | [components.EmbedAccessTokenResponse](../../models/components/embedaccesstokenresponse.md) | :heavy_minus_sign:                                                                         | OK                                                                                         |