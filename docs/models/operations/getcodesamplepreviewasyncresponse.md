# GetCodeSamplePreviewAsyncResponse

## Example Usage

```typescript
import { GetCodeSamplePreviewAsyncResponse } from "petstore/models/operations";

let value: GetCodeSamplePreviewAsyncResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `usageSnippets`                                                                                                      | [components.UsageSnippets](../../models/components/usagesnippets.md)                                                 | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |
| `object`                                                                                                             | [operations.GetCodeSamplePreviewAsyncResponseBody](../../models/operations/getcodesamplepreviewasyncresponsebody.md) | :heavy_minus_sign:                                                                                                   | Job is still in progress                                                                                             |