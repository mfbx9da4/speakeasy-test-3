# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    workspaceId: "<id>",
    webhookUrl: "https://unique-veto.info/",
    createdAt: new Date("2025-05-17T17:32:07.447Z"),
    updatedAt: new Date("2024-08-02T16:03:07.089Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workspaceId`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier of the workspace.                                          |
| `workspaceSettings`                                                          | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | The workspace settings to update.                                            |