# GetWorkspaceTokensResponse

## Example Usage

```typescript
import { GetWorkspaceTokensResponse } from "petstore/models/operations";

let value: GetWorkspaceTokensResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `workspaceTokens`                                                        | [components.WorkspaceToken](../../models/components/workspacetoken.md)[] | :heavy_minus_sign:                                                       | OK                                                                       |