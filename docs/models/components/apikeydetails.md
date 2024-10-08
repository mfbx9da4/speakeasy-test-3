# ApiKeyDetails

## Example Usage

```typescript
import { AccountType, ApiKeyDetails } from "petstore/models/components";

let value: ApiKeyDetails = {
  workspaceId: "<id>",
  workspaceSlug: "<value>",
  orgSlug: "<value>",
  accountTypeV2: AccountType.ScaleUp,
  enabledFeatures: [
    "<value>",
  ],
  telemetryDisabled: false,
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
| ~~`featureFlags`~~                                                                                                      | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `telemetryDisabled`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |