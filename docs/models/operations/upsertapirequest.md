# UpsertApiRequest

## Example Usage

```typescript
import { UpsertApiRequest } from "petstore/models/operations";

let value: UpsertApiRequest = {
  apiID: "<value>",
  api: {
    apiId: "<value>",
    description: "Optimized maximized paradigm",
    versionId: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `apiID`                                                    | *string*                                                   | :heavy_check_mark:                                         | The ID of the Api to upsert.                               |
| `api`                                                      | [components.ApiInput](../../models/components/apiinput.md) | :heavy_check_mark:                                         | A JSON representation of the Api to upsert                 |