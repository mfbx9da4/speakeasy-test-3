# FindApiEndpointRequest

## Example Usage

```typescript
import { FindApiEndpointRequest } from "petstore/models/operations";

let value: FindApiEndpointRequest = {
  apiID: "<id>",
  versionID: "<id>",
  displayName: "Keyon.Yundt20",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `apiID`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the Api the ApiEndpoint belongs to.                                        |
| `versionID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The version ID of the Api the ApiEndpoint belongs to.                                |
| `displayName`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The displayName of the ApiEndpoint to find (set by operationId from OpenAPI schema). |