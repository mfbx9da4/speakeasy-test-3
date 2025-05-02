# GetPublishingTokenResponse

## Example Usage

```typescript
import { GetPublishingTokenResponse } from "petstore/models/operations";

let value: GetPublishingTokenResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `publishingTokens`                                                         | [components.PublishingToken](../../models/components/publishingtoken.md)[] | :heavy_minus_sign:                                                         | OK                                                                         |