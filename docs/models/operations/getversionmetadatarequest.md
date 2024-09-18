# GetVersionMetadataRequest

## Example Usage

```typescript
import { GetVersionMetadataRequest } from "petstore/models/operations";

let value: GetVersionMetadataRequest = {
  apiID: "<value>",
  versionID: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `apiID`                                             | *string*                                            | :heavy_check_mark:                                  | The ID of the Api to retrieve metadata for.         |
| `versionID`                                         | *string*                                            | :heavy_check_mark:                                  | The version ID of the Api to retrieve metadata for. |