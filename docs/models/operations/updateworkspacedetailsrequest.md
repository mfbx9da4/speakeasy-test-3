# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspaceId: "<id>",
  workspace: {
    createdAt: new Date("2024-04-09T07:48:57.030Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-12-08T21:35:55.501Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the workspace.                          |
| `workspace`                                                  | [components.Workspace](../../models/components/workspace.md) | :heavy_check_mark:                                           | The workspace details to update.                             |