# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    workspaceId: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workspaceId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier of the workspace.                                          |
| `workspaceSettings`                                                          | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | The workspace settings to update.                                            |