# GetGitHubActionResponse

## Example Usage

```typescript
import { GetGitHubActionResponse } from "petstore/models/operations";

let value: GetGitHubActionResponse = {
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
| `githubGetActionResponse`                                                                | [components.GithubGetActionResponse](../../models/components/githubgetactionresponse.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |