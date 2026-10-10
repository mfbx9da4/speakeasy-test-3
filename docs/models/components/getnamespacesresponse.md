# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "petstore/models/components";

let value: GetNamespacesResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2024-10-18T10:46:32.430Z"),
      updatedAt: new Date("2024-01-24T18:39:38.372Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Namespace](../../models/components/namespace.md)[] | :heavy_check_mark:                                             | N/A                                                            |