# GetChangesReportSignedUrlResponse

## Example Usage

```typescript
import { GetChangesReportSignedUrlResponse } from "petstore/models/operations";

let value: GetChangesReportSignedUrlResponse = {
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
| `signedAccess`                                                                                                       | [operations.GetChangesReportSignedUrlSignedAccess](../../models/operations/getchangesreportsignedurlsignedaccess.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |