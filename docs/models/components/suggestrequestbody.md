# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody, SuggestRequestBodySuggestionType } from "petstore/models/components";

let value: SuggestRequestBody = {
  oasSummary: {
    info: {
      title: "<value>",
      summary: "<value>",
      description: "dress etch boo realistic recklessly very weakly",
      version: "<value>",
      license: {},
    },
    operations: [
      {
        method: "<value>",
        path: "/usr/lib",
        operationId: "<id>",
        description: "duh whose flashy",
        tags: [
          "<value>",
        ],
      },
    ],
  },
  suggestionType: SuggestRequestBodySuggestionType.DiagnosticsOnly,
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/var",
      ],
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `oasSummary`                                                                                               | [components.OASSummary](../../models/components/oassummary.md)                                             | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `suggestionType`                                                                                           | [components.SuggestRequestBodySuggestionType](../../models/components/suggestrequestbodysuggestiontype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `diagnostics`                                                                                              | [components.Diagnostic](../../models/components/diagnostic.md)[]                                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |