# OrganizationBillingAddOnResponse

Billing add on response

## Example Usage

```typescript
import { BillingAddOn, OrganizationBillingAddOnResponse } from "petstore/models/components";

let value: OrganizationBillingAddOnResponse = {
  addOns: [
    BillingAddOn.Webhooks,
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `addOns`                                                             | [components.BillingAddOn](../../models/components/billingaddon.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |