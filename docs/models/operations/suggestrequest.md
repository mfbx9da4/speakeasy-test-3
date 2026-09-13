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
      operations: [],
    },
    suggestionType: SuggestRequestBodySuggestionType.MethodNames,
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `xSessionId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `suggestRequestBody`                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md) | :heavy_check_mark:                                                             | The OAS summary and diagnostics to use for the suggestion.                     |