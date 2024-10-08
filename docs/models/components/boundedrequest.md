# BoundedRequest

A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.

## Example Usage

```typescript
import { BoundedRequest } from "petstore/models/components";

let value: BoundedRequest = {
  apiEndpointId: "<id>",
  apiId: "<id>",
  createdAt: new Date("2024-01-16T20:15:10.483Z"),
  customerId: "<id>",
  latency: 622385,
  method: "<value>",
  path: "/usr/bin",
  requestFinishTime: new Date("2022-08-13T14:18:45.582Z"),
  requestId: "<id>",
  requestStartTime: new Date("2023-01-10T12:01:37.968Z"),
  status: 676243,
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiEndpointId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the ApiEndpoint this request was made to.                                           |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this request was made to.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the customer that made this request.                                                |
| `latency`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The latency of the request.                                                                   |
| `method`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP verb.                                                                                    |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The path of the request.                                                                      |
| `requestFinishTime`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the request finished.                                                                |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of this request.                                                                       |
| `requestStartTime`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the request was made.                                                                |
| `status`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The status code of the request.                                                               |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this request was made to.                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this request was made to.                                                    |
| `metadata`                                                                                    | [components.RequestMetadata](../../models/components/requestmetadata.md)[]                    | :heavy_minus_sign:                                                                            | Metadata associated with this request                                                         |