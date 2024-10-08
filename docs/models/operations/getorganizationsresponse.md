# GetOrganizationsResponse

## Example Usage

```typescript
import { GetOrganizationsResponse } from "petstore/models/operations";

let value: GetOrganizationsResponse = {
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
| `organizations`                                                      | [components.Organization](../../models/components/organization.md)[] | :heavy_minus_sign:                                                   | OK                                                                   |