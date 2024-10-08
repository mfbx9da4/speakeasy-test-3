# OASSummary

## Example Usage

```typescript
import { OASSummary } from "petstore/models/components";

let value: OASSummary = {
  info: {
    title: "<value>",
    summary: "<value>",
    description: "ha gadzooks although cap cope against even noisily harangue",
    version: "<value>",
    license: {},
  },
  operations: [
    {
      method: "<value>",
      path: "/usr/share",
      operationId: "<id>",
      description:
        "ew absent mmm feline following willfully however ultimately",
      tags: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `info`                                                               | [components.OASInfo](../../models/components/oasinfo.md)             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operations`                                                         | [components.OASOperation](../../models/components/oasoperation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |