# SuggestRequest

## Example Usage

```typescript
import { SuggestRequestBodySuggestionType } from "petstore/models/components";
import { SuggestRequest } from "petstore/models/operations";

let value: SuggestRequest = {
  xSessionId: "<id>",
  suggestRequestBody: {
    oasSummary: {
      info: {
        title: "<value>",
        summary: "<value>",
        description: "queasily ha intensely",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/usr/include",
          operationId: "<id>",
          description: "immediately geez justly pfft",
          tags: [
            "<value>",
          ],
        },
      ],
    },
    suggestionType: SuggestRequestBodySuggestionType.MethodNames,
    diagnostics: [
      {
        message: "<value>",
        path: [
          "/opt/share",
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