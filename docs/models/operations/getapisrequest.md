# GetApisRequest

## Example Usage

```typescript
import { GetApisRequest } from "petstore/models/operations";

let value: GetApisRequest = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `op`                                           | [operations.Op](../../models/operations/op.md) | :heavy_minus_sign:                             | Configuration for filter operations            |
| `metadata`                                     | Record<string, *string*[]>                     | :heavy_minus_sign:                             | Metadata to filter Apis on                     |