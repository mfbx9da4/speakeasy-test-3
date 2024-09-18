# GetWorkspaceEventsByTargetResponse

## Example Usage

```typescript
import { GetWorkspaceEventsByTargetResponse } from "petstore/models/operations";

let value: GetWorkspaceEventsByTargetResponse = {
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