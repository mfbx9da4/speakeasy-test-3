# GetSchemaRequest

## Example Usage

```typescript
import { GetSchemaRequest } from "petstore/models/operations";

let value: GetSchemaRequest = {
  apiID: "<id>",
  versionID: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to get the schema for.          |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |