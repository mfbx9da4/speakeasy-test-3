# GetWorkspaceTargetsDeprecatedResponse

## Example Usage

```typescript
import { GetWorkspaceTargetsDeprecatedResponse } from "petstore/models/operations";

let value: GetWorkspaceTargetsDeprecatedResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `targetSDKList`                                                    | [components.TargetSDK](../../models/components/targetsdk.md)[]     | :heavy_minus_sign:                                                 | Success                                                            |