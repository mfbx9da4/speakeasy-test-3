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
          "calmly account apropos huzzah colossal ramp huge optimistically purse ha",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/etc",
          operationId: "<id>",
          description: "hopeful huzzah beside from zowie perfectly",
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
          "/var/tmp",
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