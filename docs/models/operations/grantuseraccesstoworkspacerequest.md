# GrantUserAccessToWorkspaceRequest

## Example Usage

```typescript
import { GrantUserAccessToWorkspaceRequest } from "petstore/models/operations";

let value: GrantUserAccessToWorkspaceRequest = {
  workspaceId: "<id>",
  email: "Luis.Moen@hotmail.com",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `workspaceId`                         | *string*                              | :heavy_check_mark:                    | Unique identifier of the workspace.   |
| `email`                               | *string*                              | :heavy_check_mark:                    | Email of the user to grant access to. |