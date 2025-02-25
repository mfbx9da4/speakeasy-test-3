# Revision

## Example Usage

```typescript
import { Revision } from "petstore/models/components";

let value: Revision = {
  id: "<id>",
  digest:
    "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
  namespaceName: "<value>",
  tags: [
    "<value>",
  ],
  createdAt: new Date("2025-08-29T09:21:28.573Z"),
  updatedAt: new Date("2024-05-04T05:57:31.337Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Format {namespace_id}/{revision_digest}                                                       |                                                                                               |
| `digest`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f                       |
| `namespaceName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `contentsMetadata`                                                                            | [components.RevisionContentsMetadata](../../models/components/revisioncontentsmetadata.md)    | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |