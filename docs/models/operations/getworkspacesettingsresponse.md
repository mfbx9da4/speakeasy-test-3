# GetWorkspaceSettingsResponse

## Example Usage

```typescript
import { GetWorkspaceSettingsResponse } from "petstore/models/operations";

let value: GetWorkspaceSettingsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `workspaceSettings`                                                          | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_minus_sign:                                                           | OK                                                                           |