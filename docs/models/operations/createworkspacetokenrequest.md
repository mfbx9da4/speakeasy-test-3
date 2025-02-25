# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "petstore/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceId: "<id>",
  workspaceToken: {
    id: "<id>",
    name: "<value>",
    workspaceId: "<id>",
    alg: "<value>",
    key: "<key>",
    createdAt: new Date("2025-08-11T12:47:58.371Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `workspaceId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier of the workspace.                                    |
| `workspaceToken`                                                       | [components.WorkspaceToken](../../models/components/workspacetoken.md) | :heavy_check_mark:                                                     | N/A                                                                    |