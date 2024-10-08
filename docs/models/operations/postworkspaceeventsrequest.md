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
      interactionType: InteractionType.OpenapiDiff,
      localStartedAt: new Date("2023-11-09T08:16:40.240Z"),
      createdAt: new Date("2023-04-15T22:19:54.875Z"),
      speakeasyVersion: "<value>",
      success: false,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of the workspace.                          |
| `requestBody`                                                | [components.CliEvent](../../models/components/clievent.md)[] | :heavy_check_mark:                                           | N/A                                                          |