# Filters

Filters are used to query requests.

## Example Usage

```typescript
import { Filters } from "petstore/models/components";

let value: Filters = {
  filters: [
    {
      key: "<key>",
      operator: "<value>",
      value: "<value>",
    },
  ],
  limit: 879235,
  offset: 543678,
  operator: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `filters`                                                | [components.Filter](../../models/components/filter.md)[] | :heavy_check_mark:                                       | A list of filters to apply to the query.                 |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | The maximum number of results to return.                 |
| `offset`                                                 | *number*                                                 | :heavy_check_mark:                                       | The offset to start the query from.                      |
| `operator`                                               | *string*                                                 | :heavy_check_mark:                                       | The operator to use when combining filters.              |