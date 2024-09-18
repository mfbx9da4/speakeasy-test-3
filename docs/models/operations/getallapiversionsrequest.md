# GetAllApiVersionsRequest

## Example Usage

```typescript
import { GetAllApiVersionsRequest } from "petstore/models/operations";

let value: GetAllApiVersionsRequest = {
  apiID: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `apiID`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The ID of the Api to retrieve.                                     |
| `op`                                                               | [operations.QueryParamOp](../../models/operations/queryparamop.md) | :heavy_minus_sign:                                                 | Configuration for filter operations                                |
| `metadata`                                                         | Record<string, *string*[]>                                         | :heavy_minus_sign:                                                 | Metadata to filter Apis on                                         |