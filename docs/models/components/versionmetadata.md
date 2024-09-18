# VersionMetadata

A set of keys and associated values, attached to a particular version of an Api.

## Example Usage

```typescript
import { VersionMetadata } from "petstore/models/components";

let value: VersionMetadata = {
  apiId: "<value>",
  createdAt: new Date("2022-10-17T22:52:14.889Z"),
  metaKey: "<value>",
  metaValue: "<value>",
  versionId: "<value>",
  workspaceId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `apiId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the Api this Metadata belongs to.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `metaKey`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The key for this metadata.                                                                    |
| `metaValue`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | One of the values for this metadata.                                                          |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version ID of the Api this Metadata belongs to.                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this Metadata belongs to.                                                    |