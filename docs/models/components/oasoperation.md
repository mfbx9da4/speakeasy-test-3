# OASOperation

## Example Usage

```typescript
import { OASOperation } from "petstore/models/components";

let value: OASOperation = {
  method: "<value>",
  path: "/usr/obj",
  operationId: "<id>",
  description: "hence hence per",
  tags: [
    "<value>",
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `method`             | *string*             | :heavy_check_mark:   | N/A                  |
| `path`               | *string*             | :heavy_check_mark:   | N/A                  |
| `operationId`        | *string*             | :heavy_check_mark:   | N/A                  |
| `description`        | *string*             | :heavy_check_mark:   | N/A                  |
| `tags`               | *string*[]           | :heavy_check_mark:   | N/A                  |
| `methodNameOverride` | *string*             | :heavy_minus_sign:   | N/A                  |
| `groupOverride`      | *string*             | :heavy_minus_sign:   | N/A                  |