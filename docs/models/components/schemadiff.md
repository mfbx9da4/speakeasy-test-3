# SchemaDiff

A SchemaDiff represents a diff of two Schemas.

## Example Usage

```typescript
import { SchemaDiff } from "petstore/models/components";

let value: SchemaDiff = {
  additions: [
    "<value>",
  ],
  deletions: [
    "<value>",
  ],
  modifications: {
    "key": {
      from: "<value>",
      to: "<value>",
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `additions`                                                                      | *string*[]                                                                       | :heavy_check_mark:                                                               | Holds every addition change in the diff.                                         |
| `deletions`                                                                      | *string*[]                                                                       | :heavy_check_mark:                                                               | Holds every deletion change in the diff.                                         |
| `modifications`                                                                  | Record<string, [components.ValueChange](../../models/components/valuechange.md)> | :heavy_check_mark:                                                               | Holds every modification change in the diff.                                     |