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
        "calmly account apropos huzzah colossal ramp huge optimistically purse ha",
      version: "<value>",
      license: {},
    },
    operations: [],
  },
  suggestionType: SuggestRequestBodySuggestionType.DiagnosticsOnly,
  diagnostics: [
    {
      message: "<value>",
      path: [
        "/usr/local/bin",
        "/var/yp",
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