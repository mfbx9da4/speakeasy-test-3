# SearchWorkspaceEventsResponse

## Example Usage

```typescript
import { SearchWorkspaceEventsResponse } from "petstore/models/operations";

let value: SearchWorkspaceEventsResponse = {
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
| `cliEventBatch`                                                    | [components.CliEvent](../../models/components/clievent.md)[]       | :heavy_minus_sign:                                                 | Success                                                            |