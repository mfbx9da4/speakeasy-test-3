# GetWorkspaceByContextResponse

## Example Usage

```typescript
import { GetWorkspaceByContextResponse } from "petstore/models/operations";

let value: GetWorkspaceByContextResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `workspaceAndOrganization`                                                                 | [components.WorkspaceAndOrganization](../../models/components/workspaceandorganization.md) | :heavy_minus_sign:                                                                         | OK                                                                                         |