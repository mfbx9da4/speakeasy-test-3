# GetLintingReportSignedUrlResponse

## Example Usage

```typescript
import { GetLintingReportSignedUrlResponse } from "petstore/models/operations";

let value: GetLintingReportSignedUrlResponse = {
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
| `signedAccess`                                                                                                       | [operations.GetLintingReportSignedUrlSignedAccess](../../models/operations/getlintingreportsignedurlsignedaccess.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |