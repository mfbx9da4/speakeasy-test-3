# GithubCheckPublishingPRsResponse

## Example Usage

```typescript
import { GithubCheckPublishingPRsResponse } from "petstore/models/operations";

let value: GithubCheckPublishingPRsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `githubPublishingPRResponse`                                                                   | [components.GithubPublishingPRResponse](../../models/components/githubpublishingprresponse.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |