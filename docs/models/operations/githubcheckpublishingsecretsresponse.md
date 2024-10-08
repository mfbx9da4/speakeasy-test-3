# GithubCheckPublishingSecretsResponse

## Example Usage

```typescript
import { GithubCheckPublishingSecretsResponse } from "petstore/models/operations";

let value: GithubCheckPublishingSecretsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `githubMissingPublishingSecretsResponse`                                                                               | [components.GithubMissingPublishingSecretsResponse](../../models/components/githubmissingpublishingsecretsresponse.md) | :heavy_minus_sign:                                                                                                     | OK                                                                                                                     |