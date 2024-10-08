# GetWorkspaceAccessResponse

## Example Usage

```typescript
import { GetWorkspaceAccessResponse } from "petstore/models/operations";

let value: GetWorkspaceAccessResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `accessDetails`                                                      | [components.AccessDetails](../../models/components/accessdetails.md) | :heavy_minus_sign:                                                   | OK                                                                   |