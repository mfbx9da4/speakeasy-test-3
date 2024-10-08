# ApiEndpoint

An ApiEndpoint is a description of an Endpoint for an API.

## Example Usage

```typescript
import { ApiEndpoint } from "petstore/models/components";

let value: ApiEndpoint = {
  apiEndpointId: "<id>",
  apiId: "<id>",
  createdAt: new Date("2024-11-19T01:47:41.445Z"),
  description:
    "phooey restfully circulate emphasize sarong in-joke oof behind gah runny",
  displayName: "Erika16",
  method: "<value>",
  path: "/var/spool",
  updatedAt: new Date("2023-05-18T02:53:01.364Z"),
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiEndpointId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of this ApiEndpoint. This is a hash of the method and path.                            |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this ApiEndpoint belongs to.                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A detailed description of the ApiEndpoint.                                                    |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the ApiEndpoint.                                                    |
| `matched`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Determines if the endpoint was found in the OpenAPI spec associated with the parent Api.      |
| `method`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP verb.                                                                                    |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Path that handles this Api.                                                                   |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update timestamp.                                                                        |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this ApiEndpoint belongs to.                                        |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this ApiEndpoint belongs to.                                                 |