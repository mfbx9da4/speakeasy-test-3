# Namespace

A namespace contains many revisions.

## Example Usage

```typescript
import { Namespace } from "petstore/models/components";

let value: Namespace = {
  id: "<id>",
  name: "<value>",
  createdAt: new Date("2024-12-26T20:21:35.186Z"),
  updatedAt: new Date("2023-12-17T19:21:40.693Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | {organization_slug}/{workspace_slug}/{namespace_name}                                         |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | A human-readable name for the namespace.                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |