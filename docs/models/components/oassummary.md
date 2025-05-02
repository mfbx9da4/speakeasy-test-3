# OASSummary

## Example Usage

```typescript
import { OASSummary } from "petstore/models/components";

let value: OASSummary = {
  info: {
    title: "<value>",
    summary: "<value>",
    description: "tensely transplant quip over meh jaggedly",
    version: "<value>",
    license: {},
  },
  operations: [
    {
      method: "<value>",
      path: "/selinux",
      operationId: "<id>",
      description: "aboard how cutover provided if the",
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