# Api

An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.

## Example Usage

```typescript
import { Api } from "petstore/models/components";

let value: Api = {
  apiId: "<id>",
  createdAt: new Date("2022-01-28T01:08:57.377Z"),
  description: "reluctantly till unless",
  updatedAt: new Date("2022-08-25T04:42:50.179Z"),
  versionId: "<id>",
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `apiId`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | The ID of this Api. This is a human-readable name (subject to change).                                |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Creation timestamp.                                                                                   |
| `description`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | A detailed description of the Api.                                                                    |
| `matched`                                                                                             | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Determines if all the endpoints within the Api are found in the OpenAPI spec associated with the Api. |
| `metaData`                                                                                            | Record<string, *string*[]>                                                                            | :heavy_minus_sign:                                                                                    | A set of values associated with a meta_data key. This field is only set on get requests.              |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | Last update timestamp.                                                                                |
| `versionId`                                                                                           | *string*                                                                                              | :heavy_check_mark:                                                                                    | The version ID of this Api. This is semantic version identifier.                                      |
| `workspaceId`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | The workspace ID this Api belongs to.                                                                 |