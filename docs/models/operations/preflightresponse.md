# PreflightResponse

## Example Usage

```typescript
import { PreflightResponse } from "petstore/models/operations";

let value: PreflightResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `httpMeta`                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `preflightToken`                                                       | [components.PreflightToken](../../models/components/preflighttoken.md) | :heavy_minus_sign:                                                     | OK                                                                     |