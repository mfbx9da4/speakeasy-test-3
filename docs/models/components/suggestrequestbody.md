# SuggestRequestBody

## Example Usage

```typescript
import { SuggestRequestBody, SuggestRequestBodySuggestionType } from "petstore/models/components";

let value: SuggestRequestBody = {
  oasSummary: {
    info: {
      title: "<value>",
      summary: "<value>",
      description:
        "inside morbidity owlishly regarding fatally politely dereference unaccountably mash astride",
      version: "<value>",
      license: {},
    },
    operations: [
      {
        method: "<value>",
        path: "/etc",
        operationId: "<id>",
        description:
          "kindheartedly yowza strategy iterate and first inside nearly creaking",
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
        "/root",
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