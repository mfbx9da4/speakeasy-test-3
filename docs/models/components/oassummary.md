# OASSummary

## Example Usage

```typescript
import { OASSummary } from "petstore/models/components";

let value: OASSummary = {
  info: {
    title: "<value>",
    summary: "<value>",
    description:
      "calmly account apropos huzzah colossal ramp huge optimistically purse ha",
    version: "<value>",
    license: {},
  },
  operations: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `info`                                                               | [components.OASInfo](../../models/components/oasinfo.md)             | :heavy_check_mark:                                                   | N/A                                                                  |
| `operations`                                                         | [components.OASOperation](../../models/components/oasoperation.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |