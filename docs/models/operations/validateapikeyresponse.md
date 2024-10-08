# ValidateApiKeyResponse

## Example Usage

```typescript
import { ValidateApiKeyResponse } from "petstore/models/operations";

let value: ValidateApiKeyResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `apiKeyDetails`                                                      | [components.ApiKeyDetails](../../models/components/apikeydetails.md) | :heavy_minus_sign:                                                   | OK                                                                   |