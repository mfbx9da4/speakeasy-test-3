# SuggestItemsResponse

## Example Usage

```typescript
import { SuggestItemsResponse } from "petstore/models/operations";

let value: SuggestItemsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `httpMeta`                                                                    | [components.HTTPMetadata](../../models/components/httpmetadata.md)            | :heavy_check_mark:                                                            | N/A                                                                           |
| `strings`                                                                     | *string*[]                                                                    | :heavy_minus_sign:                                                            | One suggestion per item. Guaranteed to be the same length as the input items. |