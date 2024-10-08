# GetSchemaRevisionRequest

## Example Usage

```typescript
import { GetSchemaRevisionRequest } from "petstore/models/operations";

let value: GetSchemaRevisionRequest = {
  apiID: "<id>",
  versionID: "<id>",
  revisionID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to retrieve schemas for.        |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |
| `revisionID`                                      | *string*                                          | :heavy_check_mark:                                | The revision ID of the schema to retrieve.        |