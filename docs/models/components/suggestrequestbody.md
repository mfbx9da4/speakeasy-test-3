# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody, SuggestRequestBodySuggestionType } from "petstore/models/components";

let value: SuggestRequestBody = {
  oasSummary: {
    info: {
      title: "<value>",
      summary: "<value>",
      description: "burgeon pupil great vice",
      version: "<value>",
      license: {},
    },
    operations: [
      {
        method: "<value>",
        path: "/etc/mail",
        operationId: "<id>",
        description: "joshingly overload nor",
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
        "/opt/sbin",
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