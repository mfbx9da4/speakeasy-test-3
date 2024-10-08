# UnboundedRequest

An UnboundedRequest represents the HAR content capture by Speakeasy when logging a request.

## Example Usage

```typescript
import { UnboundedRequest } from "petstore/models/components";

let value: UnboundedRequest = {
  createdAt: new Date("2022-11-06T20:07:53.826Z"),
  har: "<value>",
  harSizeBytes: 30235,
  requestId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `har`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The HAR content of the request.                                                               |
| `harSizeBytes`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The size of the HAR content in bytes.                                                         |
| `requestId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of this request.                                                                       |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this request was made to.                                                    |