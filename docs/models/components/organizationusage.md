# OrganizationUsage

## Example Usage

```typescript
import { OrganizationUsage } from "petstore/models/components";

let value: OrganizationUsage = {
  numberOfOperations: 622231,
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
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `numberOfOperations`                     | *number*                                 | :heavy_check_mark:                       | Number of operations performed           |
| `language`                               | *string*                                 | :heavy_check_mark:                       | The programming language used            |
| `usedFeatures`                           | *string*[]                               | :heavy_check_mark:                       | Features that have been used             |
| `accessibleFeatures`                     | *string*[]                               | :heavy_check_mark:                       | Features that are accessible             |
| `accessible`                             | *boolean*                                | :heavy_check_mark:                       | Indicates if the features are accessible |
| `workspaces`                             | *string*[]                               | :heavy_check_mark:                       | List of workspace IDs                    |
| `genLockIds`                             | *string*[]                               | :heavy_check_mark:                       | List of generation lock IDs              |