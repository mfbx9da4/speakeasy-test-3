# UpdateWorkspaceSettingsRequest

## Example Usage

```typescript
import { UpdateWorkspaceSettingsRequest } from "petstore/models/operations";

let value: UpdateWorkspaceSettingsRequest = {
  workspaceId: "<id>",
  workspaceSettings: {
    workspaceId: "<id>",
    webhookUrl: "https://any-pinstripe.com/",
    createdAt: new Date("2025-04-16T23:08:06.808Z"),
    updatedAt: new Date("2025-11-10T20:47:23.658Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `workspaceId`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | Unique identifier of the workspace.                                          |
| `workspaceSettings`                                                          | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | The workspace settings to update.                                            |