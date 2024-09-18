# SuggestRequest

## Example Usage

```typescript
import { SuggestRequestBodySuggestionType } from "petstore/models/components";
import { SuggestRequest } from "petstore/models/operations";

let value: SuggestRequest = {
  xSessionId: "<value>",
  suggestRequestBody: {
    oasSummary: {
      info: {
        title: "<value>",
        summary: "<value>",
        description: "Profit-focused 3rd generation framework",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/usr/obj",
          operationId: "<value>",
          description: "User-friendly reciprocal budgetary management",
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
          "/usr/share",
        ],
        type: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xSessionId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `suggestRequestBody`                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md) | :heavy_check_mark:                                                             | The OAS summary and diagnostics to use for the suggestion.                     |