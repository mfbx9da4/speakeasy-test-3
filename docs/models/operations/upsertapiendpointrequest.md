# UpsertApiEndpointRequest

## Example Usage

```typescript
import { UpsertApiEndpointRequest } from "petstore/models/operations";

let value: UpsertApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  apiEndpointID: "<id>",
  apiEndpoint: {
    apiEndpointId: "<id>",
    description:
      "amongst wedge colorfully orientate rally wherever minus runny",
    displayName: "Elfrieda58",
    method: "<value>",
    path: "/usr/X11R6",
    versionId: "<id>",
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