# ListRemoteSourcesResponse

## Example Usage

```typescript
import { ListRemoteSourcesResponse } from "petstore/models/operations";

let value: ListRemoteSourcesResponse = {
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
| `remoteSource`                                                     | [components.RemoteSource](../../models/components/remotesource.md) | :heavy_minus_sign:                                                 | OK                                                                 |