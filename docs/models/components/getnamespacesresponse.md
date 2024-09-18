# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "petstore/models/components";

let value: GetNamespacesResponse = {
  items: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2023-11-28T00:35:19.328Z"),
      updatedAt: new Date("2022-06-26T19:05:07.374Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Namespace](../../models/components/namespace.md)[] | :heavy_check_mark:                                             | N/A                                                            |