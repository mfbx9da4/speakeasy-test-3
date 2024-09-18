# DownloadSchemaRevisionResponse

## Example Usage

```typescript
import { DownloadSchemaRevisionResponse } from "petstore/models/operations";

// No examples available for this model
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `twoHundredApplicationJsonSchema`                                  | *ReadableStream<Uint8Array>*                                       | :heavy_minus_sign:                                                 | OK                                                                 |
| `twoHundredApplicationXYamlSchema`                                 | *ReadableStream<Uint8Array>*                                       | :heavy_minus_sign:                                                 | OK                                                                 |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Default error response                                             |