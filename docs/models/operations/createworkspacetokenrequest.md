# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "petstore/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceId: "<id>",
  workspaceToken: {
    id: "<id>",
    name: "<value>",
    alg: "<value>",
    key: "<key>",
    createdAt: "<value>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `workspaceId`                                                          | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier of the workspace.                                    |
| `workspaceToken`                                                       | [components.WorkspaceToken](../../models/components/workspacetoken.md) | :heavy_check_mark:                                                     | N/A                                                                    |