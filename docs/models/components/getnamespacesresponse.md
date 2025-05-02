# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "petstore/models/components";

let value: GetNamespacesResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2025-11-06T02:22:29.445Z"),
      updatedAt: new Date("2023-10-19T10:46:32.430Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Namespace](../../models/components/namespace.md)[] | :heavy_check_mark:                                             | N/A                                                            |