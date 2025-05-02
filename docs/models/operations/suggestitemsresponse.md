# SuggestItemsResponse

## Example Usage

```typescript
import { SuggestItemsResponse } from "petstore/models/operations";

let value: SuggestItemsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `httpMeta`                                                                    | [components.HTTPMetadata](../../models/components/httpmetadata.md)            | :heavy_check_mark:                                                            | N/A                                                                           |
| `strings`                                                                     | *string*[]                                                                    | :heavy_minus_sign:                                                            | One suggestion per item. Guaranteed to be the same length as the input items. |