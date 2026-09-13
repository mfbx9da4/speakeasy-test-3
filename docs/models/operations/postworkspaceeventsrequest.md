# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { InteractionType } from "petstore/models/components";
import { PostWorkspaceEventsRequest } from "petstore/models/operations";

let value: PostWorkspaceEventsRequest = {
  requestBody: [
    {
      id: "<id>",
      executionId: "<id>",
      workspaceId: "<id>",
      speakeasyApiKeyName: "<value>",
      interactionType: InteractionType.Tombstone,
      localStartedAt: new Date("2025-04-20T05:34:53.347Z"),
      createdAt: new Date("2025-11-09T15:10:21.242Z"),
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