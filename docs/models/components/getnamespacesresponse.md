# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "petstore/models/components";

let value: GetNamespacesResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2023-01-19T11:47:32.986Z"),
      updatedAt: new Date("2025-02-02T08:16:25.886Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Namespace](../../models/components/namespace.md)[] | :heavy_check_mark:                                             | N/A                                                            |