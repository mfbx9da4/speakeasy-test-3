# GetBillingAddOnsResponse

## Example Usage

```typescript
import { GetBillingAddOnsResponse } from "petstore/models/operations";

let value: GetBillingAddOnsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `organizationBillingAddOnResponse`                                                                         | [components.OrganizationBillingAddOnResponse](../../models/components/organizationbillingaddonresponse.md) | :heavy_minus_sign:                                                                                         | Success                                                                                                    |