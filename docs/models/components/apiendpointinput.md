# ApiEndpointInput

An ApiEndpoint is a description of an Endpoint for an API.

## Example Usage

```typescript
import { ApiEndpointInput } from "petstore/models/components";

let value: ApiEndpointInput = {
  apiEndpointId: "<id>",
  description: "submissive whether aha furthermore geez um scenario",
  displayName: "Edwardo.Ondricka",
  method: "<value>",
  path: "/opt/sbin",
  versionId: "<id>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `apiEndpointId`                                                    | *string*                                                           | :heavy_check_mark:                                                 | The ID of this ApiEndpoint. This is a hash of the method and path. |
| `description`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A detailed description of the ApiEndpoint.                         |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | A human-readable name for the ApiEndpoint.                         |
| `method`                                                           | *string*                                                           | :heavy_check_mark:                                                 | HTTP verb.                                                         |
| `path`                                                             | *string*                                                           | :heavy_check_mark:                                                 | Path that handles this Api.                                        |
| `versionId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | The version ID of the Api this ApiEndpoint belongs to.             |