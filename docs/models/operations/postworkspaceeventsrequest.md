# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { InteractionType } from "petstore/models/components";
import { PostWorkspaceEventsRequest } from "petstore/models/operations";

let value: PostWorkspaceEventsRequest = {
  requestBody: [
    {
      id: "<id>",
      executionId: "<value>",
      workspaceId: "<value>",
      speakeasyApiKeyName: "<value>",
      interactionType: InteractionType.Publish,
      localStartedAt: new Date("2022-10-26T19:57:04.215Z"),
      createdAt: new Date("2023-02-25T06:02:44.796Z"),
      speakeasyVersion: "<value>",
      success: false,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `workspaceID`                                                | *string*                                                     | :heavy_minus_sign:                                           | Unique identifier of the workspace.                          |
| `requestBody`                                                | [components.CliEvent](../../models/components/clievent.md)[] | :heavy_check_mark:                                           | N/A                                                          |