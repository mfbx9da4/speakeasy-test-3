# GetAllForVersionApiEndpointsRequest

## Example Usage

```typescript
import { GetAllForVersionApiEndpointsRequest } from "petstore/models/operations";

let value: GetAllForVersionApiEndpointsRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `apiID`                                                 | *string*                                                | :heavy_check_mark:                                      | The ID of the Api to retrieve ApiEndpoints for.         |
| `versionID`                                             | *string*                                                | :heavy_check_mark:                                      | The version ID of the Api to retrieve ApiEndpoints for. |