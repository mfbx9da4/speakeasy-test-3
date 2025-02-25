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
        description:
          "past interestingly reassuringly amongst wedge colorfully orientate",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/Library",
          operationId: "<id>",
          description: "plus outside yippee sidetrack mature regularly mouser",
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
          "/Users",
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