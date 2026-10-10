# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspace: {
    createdAt: new Date("2024-11-15T00:00:08.537Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2025-06-14T01:29:49.528Z"),
    verified: true,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the workspace.                          |
| `workspace`                                                  | [components.Workspace](../../models/components/workspace.md) | :heavy_check_mark:                                           | The workspace details to update.                             |