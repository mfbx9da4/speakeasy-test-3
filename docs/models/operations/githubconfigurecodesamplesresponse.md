# GithubConfigureCodeSamplesResponse

## Example Usage

```typescript
import { GithubConfigureCodeSamplesResponse } from "petstore/models/operations";

let value: GithubConfigureCodeSamplesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `githubConfigureCodeSamplesResponse`                                                                           | [components.GithubConfigureCodeSamplesResponse](../../models/components/githubconfigurecodesamplesresponse.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |