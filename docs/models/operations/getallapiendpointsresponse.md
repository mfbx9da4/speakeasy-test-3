# GetAllApiEndpointsResponse

## Example Usage

```typescript
import { GetAllApiEndpointsResponse } from "petstore/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `apiEndpoints`                                                     | [components.ApiEndpoint](../../models/components/apiendpoint.md)[] | :heavy_minus_sign:                                                 | OK                                                                 |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Default error response                                             |