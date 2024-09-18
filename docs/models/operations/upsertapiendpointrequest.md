# UpsertApiEndpointRequest

## Example Usage

```typescript
import { UpsertApiEndpointRequest } from "petstore/models/operations";

let value: UpsertApiEndpointRequest = {
  apiID: "<value>",
  versionID: "<value>",
  apiEndpointID: "<value>",
  apiEndpoint: {
    apiEndpointId: "<value>",
    description: "Managed mobile moderator",
    displayName: "Gerda89",
    method: "<value>",
    path: "/boot/defaults",
    versionId: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `apiID`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the Api the ApiEndpoint belongs to.                              |
| `versionID`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The version ID of the Api the ApiEndpoint belongs to.                      |
| `apiEndpointID`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the ApiEndpoint to upsert.                                       |
| `apiEndpoint`                                                              | [components.ApiEndpointInput](../../models/components/apiendpointinput.md) | :heavy_check_mark:                                                         | A JSON representation of the ApiEndpoint to upsert.                        |