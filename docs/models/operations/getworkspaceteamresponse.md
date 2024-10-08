# GetWorkspaceTeamResponse

## Example Usage

```typescript
import { GetWorkspaceTeamResponse } from "petstore/models/operations";

let value: GetWorkspaceTeamResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `workspaceTeamResponse`                                                              | [components.WorkspaceTeamResponse](../../models/components/workspaceteamresponse.md) | :heavy_minus_sign:                                                                   | OK                                                                                   |