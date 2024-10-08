# GetWorkspacesResponse

## Example Usage

```typescript
import { GetWorkspacesResponse } from "petstore/models/operations";

let value: GetWorkspacesResponse = {
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
| `workspaces`                                                       | [components.Workspace](../../models/components/workspace.md)[]     | :heavy_minus_sign:                                                 | OK                                                                 |