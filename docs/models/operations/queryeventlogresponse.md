# QueryEventLogResponse

## Example Usage

```typescript
import { QueryEventLogResponse } from "petstore/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `boundedRequests`                                                        | [components.BoundedRequest](../../models/components/boundedrequest.md)[] | :heavy_minus_sign:                                                       | OK                                                                       |
| `error`                                                                  | *errors.ErrorT*                                                          | :heavy_minus_sign:                                                       | Default error response                                                   |