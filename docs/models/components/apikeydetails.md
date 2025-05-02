# ApiKeyDetails

## Example Usage

```typescript
import { AccountType, ApiKeyDetails, BillingAddOn } from "petstore/models/components";

let value: ApiKeyDetails = {
  workspaceId: "<id>",
  workspaceSlug: "<value>",
  orgSlug: "<value>",
  accountTypeV2: AccountType.Enterprise,
  enabledFeatures: [
    "<value>",
  ],
  billingAddOns: [
    BillingAddOn.CustomCodeRegions,
  ],
  telemetryDisabled: false,
  workspaceCreatedAt: new Date("2025-06-14T11:09:37.293Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `workspaceId`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceSlug`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `orgSlug`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `generationAccessUnlimited`                                                                                             | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `accountTypeV2`                                                                                                         | [components.AccountType](../../models/components/accounttype.md)                                                        | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `enabledFeatures`                                                                                                       | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `billingAddOns`                                                                                                         | [components.BillingAddOn](../../models/components/billingaddon.md)[]                                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`featureFlags`~~                                                                                                      | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `telemetryDisabled`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceCreatedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Workspace creation timestamp.                                                                                           |