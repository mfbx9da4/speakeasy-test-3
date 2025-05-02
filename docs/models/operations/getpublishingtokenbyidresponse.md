# GetPublishingTokenByIDResponse

## Example Usage

```typescript
import { GetPublishingTokenByIDResponse } from "petstore/models/operations";

let value: GetPublishingTokenByIDResponse = {
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
| `publishingToken`                                                        | [components.PublishingToken](../../models/components/publishingtoken.md) | :heavy_minus_sign:                                                       | OK                                                                       |