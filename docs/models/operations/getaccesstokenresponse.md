# GetAccessTokenResponse

## Example Usage

```typescript
import { GetAccessTokenResponse } from "petstore/models/operations";

let value: GetAccessTokenResponse = {
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
| `accessToken`                                                      | [components.AccessToken](../../models/components/accesstoken.md)   | :heavy_minus_sign:                                                 | OK                                                                 |