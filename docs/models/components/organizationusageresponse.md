# OrganizationUsageResponse

A billing summary of organization usage

## Example Usage

```typescript
import { OrganizationUsageResponse } from "petstore/models/components";

let value: OrganizationUsageResponse = {
  usage: [
    {
      numberOfOperations: 24313,
      language: "<value>",
      usedFeatures: [
        "<value>",
      ],
      accessibleFeatures: [
        "<value>",
      ],
      accessible: false,
      workspaces: [
        "<value>",
      ],
      genLockIds: [
        "<value>",
      ],
    },
  ],
  totalAllowedLanguages: 342611,
  allowedLanguages: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `usage`                                                                                       | [components.OrganizationUsage](../../models/components/organizationusage.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `freeTrialExpiry`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Expiry date of the free trial, will be null if no trial                                       |
| `totalAllowedLanguages`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Total number of allowed languages, -1 if unlimited                                            |
| `allowedLanguages`                                                                            | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of allowed languages                                                                     |