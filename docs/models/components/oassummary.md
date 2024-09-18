# OASSummary

## Example Usage

```typescript
import { OASSummary } from "petstore/models/components";

let value: OASSummary = {
  info: {
    title: "<value>",
    summary: "<value>",
    description: "Multi-layered content-based middleware",
    version: "<value>",
    license: {},
  },
  operations: [
    {
      method: "<value>",
      path: "/etc/periodic",
      operationId: "<value>",
      description: "Fundamental background neural-net",
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