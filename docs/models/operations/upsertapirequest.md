# UpsertApiRequest

## Example Usage

```typescript
import { UpsertApiRequest } from "petstore/models/operations";

let value: UpsertApiRequest = {
  apiID: "<id>",
  api: {
    apiId: "<id>",
    description: "tapioca blaring the mismatch plagiarise past interestingly",
    versionId: "<id>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `apiID`                                                    | *string*                                                   | :heavy_check_mark:                                         | The ID of the Api to upsert.                               |
| `api`                                                      | [components.ApiInput](../../models/components/apiinput.md) | :heavy_check_mark:                                         | A JSON representation of the Api to upsert                 |