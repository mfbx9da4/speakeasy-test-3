# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "petstore/models/components";

let value: GetNamespacesResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2022-11-30T16:09:25.804Z"),
      updatedAt: new Date("2024-12-29T18:23:56.613Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Namespace](../../models/components/namespace.md)[] | :heavy_check_mark:                                             | N/A                                                            |