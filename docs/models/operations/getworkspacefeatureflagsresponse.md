# GetWorkspaceFeatureFlagsResponse

## Example Usage

```typescript
import { GetWorkspaceFeatureFlagsResponse } from "petstore/models/operations";

let value: GetWorkspaceFeatureFlagsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `workspaceFeatureFlagResponse`                                                                     | [components.WorkspaceFeatureFlagResponse](../../models/components/workspacefeatureflagresponse.md) | :heavy_minus_sign:                                                                                 | Success                                                                                            |