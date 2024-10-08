# UpdateWorkspaceDetailsRequest

## Example Usage

```typescript
import { UpdateWorkspaceDetailsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceDetailsRequest = {
  workspaceId: "<id>",
  workspace: {
    createdAt: new Date("2024-03-05T21:05:18.875Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2023-07-04T10:50:11.552Z"),
    verified: false,
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of the workspace.                          |
| `workspace`                                                  | [components.Workspace](../../models/components/workspace.md) | :heavy_check_mark:                                           | The workspace details to update.                             |