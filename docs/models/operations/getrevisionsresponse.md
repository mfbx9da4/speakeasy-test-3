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
        createdAt: new Date("2022-05-29T11:30:35.227Z"),
        updatedAt: new Date("2022-11-23T22:01:05.887Z"),
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