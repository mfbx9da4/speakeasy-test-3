# GenerateCodeSamplePreviewAsyncResponse

## Example Usage

```typescript
import { GenerateCodeSamplePreviewAsyncResponse } from "petstore/models/operations";

let value: GenerateCodeSamplePreviewAsyncResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `object`                                                                                                                       | [operations.GenerateCodeSamplePreviewAsyncResponseBody](../../models/operations/generatecodesamplepreviewasyncresponsebody.md) | :heavy_minus_sign:                                                                                                             | Job accepted, returns a job ID to poll for status and result                                                                   |