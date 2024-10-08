# GetRevisionsResponse

## Example Usage

```typescript
import { GetRevisionsResponse } from "petstore/models/components";

let value: GetRevisionsResponse = {
  items: [
    {
      id: "<id>",
      digest:
        "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
      namespaceName: "<value>",
      tags: [
        "<value>",
      ],
      createdAt: new Date("2023-02-19T13:21:39.892Z"),
      updatedAt: new Date("2024-12-09T13:28:34.858Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `items`                                                      | [components.Revision](../../models/components/revision.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `nextPageToken`                                              | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |