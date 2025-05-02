# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { InteractionType } from "petstore/models/components";
import { PostWorkspaceEventsRequest } from "petstore/models/operations";

let value: PostWorkspaceEventsRequest = {
  workspaceId: "<id>",
  requestBody: [
    {
      id: "<id>",
      executionId: "<id>",
      workspaceId: "<id>",
      speakeasyApiKeyName: "<value>",
      interactionType: InteractionType.Test,
      localStartedAt: new Date("2024-04-27T01:44:18.572Z"),
      createdAt: new Date("2024-04-20T05:34:53.347Z"),
      speakeasyVersion: "<value>",
      success: false,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the workspace.                          |
| `requestBody`                                                | [components.CliEvent](../../models/components/clievent.md)[] | :heavy_check_mark:                                           | N/A                                                          |