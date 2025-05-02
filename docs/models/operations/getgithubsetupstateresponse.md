# GetGithubSetupStateResponse

## Example Usage

```typescript
import { GetGithubSetupStateResponse } from "petstore/models/operations";

let value: GetGithubSetupStateResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `githubSetupStateResponse`                                                                 | [components.GithubSetupStateResponse](../../models/components/githubsetupstateresponse.md) | :heavy_minus_sign:                                                                         | github setup state response                                                                |