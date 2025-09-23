# CreateWorkspaceTokenRequest

## Example Usage

```typescript
import { CreateWorkspaceTokenRequest } from "petstore/models/operations";

let value: CreateWorkspaceTokenRequest = {
  workspaceToken: {
    id: "<id>",
    name: "<value>",
    workspaceId: "<id>",
    alg: "<value>",
    key: "<key>",
    createdAt: new Date("2023-10-18T04:12:26.286Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `workspaceId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier of the workspace.                                    |
| `workspaceToken`                                                       | [components.WorkspaceToken](../../models/components/workspacetoken.md) | :heavy_check_mark:                                                     | N/A                                                                    |