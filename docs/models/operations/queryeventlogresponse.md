# QueryEventLogResponse

## Example Usage

```typescript
import { QueryEventLogResponse } from "petstore/models/operations";

let value: QueryEventLogResponse = {
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
| `boundedRequests`                                                        | [components.BoundedRequest](../../models/components/boundedrequest.md)[] | :heavy_minus_sign:                                                       | OK                                                                       |