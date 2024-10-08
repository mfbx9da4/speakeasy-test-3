# GetEmbedAccessTokenRequest

## Example Usage

```typescript
import { GetEmbedAccessTokenRequest } from "petstore/models/operations";

let value: GetEmbedAccessTokenRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | The description of the embed access token.               |
| `duration`                                               | *number*                                                 | :heavy_minus_sign:                                       | The duration (in minutes) of the embed access token.     |
| `filters`                                                | [components.Filters](../../models/components/filters.md) | :heavy_minus_sign:                                       | The filter to apply to the query.                        |