# DeleteBillingAddOnRequest

## Example Usage

```typescript
import { BillingAddOn } from "petstore/models/components";
import { DeleteBillingAddOnRequest } from "petstore/models/operations";

let value: DeleteBillingAddOnRequest = {
  addOn: BillingAddOn.CustomCodeRegions,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `addOn`                                                            | [components.BillingAddOn](../../models/components/billingaddon.md) | :heavy_check_mark:                                                 | The specific add-on to delete.                                     |