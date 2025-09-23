# OrganizationUsageResponse

A billing summary of organization usage

## Example Usage

```typescript
import { OrganizationUsageResponse } from "petstore/models/components";

let value: OrganizationUsageResponse = {
  usage: [
    {
      numberOfOperations: 522206,
      maxOperations: 165177,
      language: "<value>",
      usedFeatures: [
        "<value 1>",
      ],
      accessibleFeatures: [],
      accessible: true,
      workspaces: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      genLockIds: [
        "<value 1>",
      ],
    },
  ],
  totalAllowedLanguages: 126305,
  allowedLanguages: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `usage`                                                                                       | [components.OrganizationUsage](../../models/components/organizationusage.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `freeTrialExpiry`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiry date of the free trial, will be null if no trial                                       |
| `totalAllowedLanguages`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Total number of allowed languages, -1 if unlimited                                            |
| `allowedLanguages`                                                                            | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of allowed languages                                                                     |