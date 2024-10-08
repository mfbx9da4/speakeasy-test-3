# SearchWorkspaceEventsRequest

## Example Usage

```typescript
import { SearchWorkspaceEventsRequest } from "petstore/models/operations";

let value: SearchWorkspaceEventsRequest = {
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `workspaceId`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | Unique identifier of the workspace.                                      |
| `sourceRevisionDigest`                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier of the source revision digest.                         |
| `lintReportDigest`                                                       | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier of the lint report digest.                             |
| `openapiDiffReportDigest`                                                | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier of the openapi diff report digest.                     |
| `interactionType`                                                        | [components.InteractionType](../../models/components/interactiontype.md) | :heavy_minus_sign:                                                       | Specified interaction type for events.                                   |
| `generateGenLockId`                                                      | *string*                                                                 | :heavy_minus_sign:                                                       | A specific gen lock ID for the events.                                   |