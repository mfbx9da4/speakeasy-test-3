# GetRevisionsResponse

## Example Usage

```typescript
import { GetRevisionsResponse } from "petstore/models/operations";

let value: GetRevisionsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  getRevisionsResponse: {
    items: [
      {
        id: "<id>",
        digest:
          "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
        namespaceName: "<value>",
        tags: [
          "<value>",
        ],
        createdAt: new Date("2024-01-20T07:01:46.379Z"),
        updatedAt: new Date("2024-07-08T03:34:57.970Z"),
      },
    ],
    nextPageToken: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `getRevisionsResponse`                                                             | [components.GetRevisionsResponse](../../models/components/getrevisionsresponse.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |