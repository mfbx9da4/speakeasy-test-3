# MethodPaths

## Example Usage

```typescript
import { HttpMethod } from "petstore/models/components";
import { MethodPaths } from "petstore/models/operations";

let value: MethodPaths = {
  method: HttpMethod.Put,
  path: "/rescue",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `method`                                                       | [components.HttpMethod](../../models/components/httpmethod.md) | :heavy_check_mark:                                             | N/A                                                            |
| `path`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |