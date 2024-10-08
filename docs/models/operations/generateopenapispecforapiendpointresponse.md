# GenerateOpenApiSpecForApiEndpointResponse

## Example Usage

```typescript
import { GenerateOpenApiSpecForApiEndpointResponse } from "petstore/models/operations";

let value: GenerateOpenApiSpecForApiEndpointResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `generateOpenApiSpecDiff`                                                                | [components.GenerateOpenApiSpecDiff](../../models/components/generateopenapispecdiff.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |