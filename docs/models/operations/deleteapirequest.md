# DeleteApiRequest

## Example Usage

```typescript
import { DeleteApiRequest } from "petstore/models/operations";

let value: DeleteApiRequest = {
  apiID: "<value>",
  versionID: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `apiID`                              | *string*                             | :heavy_check_mark:                   | The ID of the Api to delete.         |
| `versionID`                          | *string*                             | :heavy_check_mark:                   | The version ID of the Api to delete. |