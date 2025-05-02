# OrganizationBillingAddOnRequest

A request to add billing add ons

## Example Usage

```typescript
import { BillingAddOn, OrganizationBillingAddOnRequest } from "petstore/models/components";

let value: OrganizationBillingAddOnRequest = {
  addOns: [
    BillingAddOn.SnippetAi,
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `addOns`                                                             | [components.BillingAddOn](../../models/components/billingaddon.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |