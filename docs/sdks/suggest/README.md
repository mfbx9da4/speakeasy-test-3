# Suggest
(*suggest*)

## Overview

REST APIs for managing LLM OAS suggestions

### Available Operations

* [suggestOpenAPI](#suggestopenapi) - (DEPRECATED) Generate suggestions for improving an OpenAPI document.
* [suggest](#suggest) - Generate suggestions for improving an OpenAPI document.
* [suggestOpenAPIRegistry](#suggestopenapiregistry) - Generate suggestions for improving an OpenAPI document stored in the registry.

## suggestOpenAPI

Get suggestions from an LLM model for improving an OpenAPI document.

### Example Usage

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.suggest.suggestOpenAPI({
    schema: await openAsBlob("example.file"),
  }, "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "petstore/core.js";
import { suggestSuggestOpenAPI } from "petstore/funcs/suggestSuggestOpenAPI.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await suggestSuggestOpenAPI(sdk, {
    schema: await openAsBlob("example.file"),
  }, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xSessionId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.SuggestOpenAPIRequestBody](../../models/operations/suggestopenapirequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The schema file to upload provided as a multipart/form-data file segment.                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SuggestOpenAPIResponse](../../models/operations/suggestopenapiresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## suggest

Get suggestions from an LLM model for improving an OpenAPI document.

### Example Usage

```typescript
import { SDK } from "petstore";
import { SuggestRequestBodySuggestionType } from "petstore/models/components";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.suggest.suggest({
    oasSummary: {
      info: {
        title: "<value>",
        summary: "<value>",
        description: "ugh which garrote ashamed sarong fiddle really",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/rescue",
          operationId: "<id>",
          description: "kielbasa psst stitcher cannon devoted blindly apropos low",
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
          "/opt/share",
        ],
        type: "<value>",
      },
    ],
  }, "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { suggestSuggest } from "petstore/funcs/suggestSuggest.js";
import { SuggestRequestBodySuggestionType } from "petstore/models/components";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await suggestSuggest(sdk, {
    oasSummary: {
      info: {
        title: "<value>",
        summary: "<value>",
        description: "ugh which garrote ashamed sarong fiddle really",
        version: "<value>",
        license: {},
      },
      operations: [
        {
          method: "<value>",
          path: "/selinux",
          operationId: "<id>",
          description: "yuck carefully finished whoa however however bank",
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
          "/media",
        ],
        type: "<value>",
      },
    ],
  }, "<id>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xSessionId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `suggestRequestBody`                                                                                                                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The OAS summary and diagnostics to use for the suggestion.                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SuggestResponse](../../models/operations/suggestresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## suggestOpenAPIRegistry

Get suggestions from an LLM model for improving an OpenAPI document stored in the registry.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.suggest.suggestOpenAPIRegistry("<id>", "<value>", "<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { suggestSuggestOpenAPIRegistry } from "petstore/funcs/suggestSuggestOpenAPIRegistry.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await suggestSuggestOpenAPIRegistry(sdk, "<id>", "<value>", "<value>");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xSessionId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `namespaceName`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `revisionReference`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Tag or digest                                                                                                                                                                  |
| `suggestRequestBody`                                                                                                                                                           | [components.SuggestRequestBody](../../models/components/suggestrequestbody.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Suggest options                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SuggestOpenAPIRegistryResponse](../../models/operations/suggestopenapiregistryresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |