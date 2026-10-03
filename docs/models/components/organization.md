# Organization

A speakeasy organization

## Example Usage

```typescript
import { AccountType, Organization } from "petstore/models/components";

let value: Organization = {
  id: "<id>",
  name: "<value>",
  slug: "<value>",
  accountType: AccountType.Enterprise,
  telemetryDisabled: true,
  createdAt: new Date("2025-09-21T03:00:08.692Z"),
  updatedAt: new Date("2025-07-11T06:03:56.483Z"),
  ssoActivated: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `accountType`                                                                                 | [components.AccountType](../../models/components/accounttype.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `telemetryDisabled`                                                                           | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `freeTrialExpiry`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ssoConnectionId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `ssoActivated`                                                                                | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `internal`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |