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
      createdAt: new Date("2023-11-25T19:57:38.512Z"),
      updatedAt: new Date("2023-06-25T20:56:27.257Z"),
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