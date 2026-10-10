# CodeSamples

## Overview

REST APIs for retrieving Code Samples

### Available Operations

* [get](#get) - Retrieve usage snippets
* [generateCodeSamplePreview](#generatecodesamplepreview) - Generate Code Sample previews from a file and configuration parameters.
* [generateCodeSamplePreviewAsync](#generatecodesamplepreviewasync) - Initiate asynchronous Code Sample preview generation from a file and configuration parameters, receiving an async JobID response for polling.
* [getCodeSamplePreviewAsync](#getcodesamplepreviewasync) - Poll for the result of an asynchronous Code Sample preview generation.

## get

Retrieve usage snippets from an OpenAPI document stored in the registry. Supports filtering by language and operation ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCodeSamples" method="get" path="/v1/code_sample" example="default" -->
```typescript
import { SDK } from "petstore";
import { HttpMethod } from "petstore/models/components";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.codeSamples.get("https://spec.speakeasy.com/my-org/my-workspace/my-source", [
    "getPets",
  ], [
    {
      method: HttpMethod.Get,
      path: "/pets",
    },
  ], [
    "python",
    "javascript",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { codeSamplesGet } from "petstore/funcs/codeSamplesGet.js";
import { HttpMethod } from "petstore/models/components";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await codeSamplesGet(sdk, "https://spec.speakeasy.com/my-org/my-workspace/my-source", [
    "getPets",
  ], [
    {
      method: HttpMethod.Get,
      path: "/pets",
    },
  ], [
    "python",
    "javascript",
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeSamplesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `registryUrl`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The registry URL from which to retrieve the snippets.                                                                                                                          | https://spec.speakeasy.com/my-org/my-workspace/my-source                                                                                                                       |
| `operationIds`                                                                                                                                                                 | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The operation IDs to retrieve snippets for.                                                                                                                                    | getPets                                                                                                                                                                        |
| `methodPaths`                                                                                                                                                                  | [operations.MethodPaths](../../models/operations/methodpaths.md)[]                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | The method paths to retrieve snippets for.                                                                                                                                     | [<br/>{<br/>"method": "get",<br/>"path": "/pets"<br/>}<br/>]                                                                                                                   |
| `languages`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The languages to retrieve snippets for.                                                                                                                                        | [<br/>"python",<br/>"javascript"<br/>]                                                                                                                                         |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.GetCodeSamplesResponse](../../models/operations/getcodesamplesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## generateCodeSamplePreview

This endpoint generates Code Sample previews from a file and configuration parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generateCodeSamplePreview" method="post" path="/v1/code_sample/preview" example="default" -->
```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.codeSamples.generateCodeSamplePreview({
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "petstore/core.js";
import { codeSamplesGenerateCodeSamplePreview } from "petstore/funcs/codeSamplesGenerateCodeSamplePreview.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await codeSamplesGenerateCodeSamplePreview(sdk, {
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeSamplesGenerateCodeSamplePreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CodeSampleSchemaInput](../../models/components/codesampleschemainput.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateCodeSamplePreviewResponse](../../models/operations/generatecodesamplepreviewresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.ErrorT    | 5XX              | application/json |

## generateCodeSamplePreviewAsync

This endpoint generates Code Sample previews from a file and configuration parameters, receiving an async JobID response for polling.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generateCodeSamplePreviewAsync" method="post" path="/v1/code_sample/preview/async" -->
```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.codeSamples.generateCodeSamplePreviewAsync({
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { openAsBlob } from "node:fs";
import { SDKCore } from "petstore/core.js";
import { codeSamplesGenerateCodeSamplePreviewAsync } from "petstore/funcs/codeSamplesGenerateCodeSamplePreviewAsync.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await codeSamplesGenerateCodeSamplePreviewAsync(sdk, {
    language: "<value>",
    schemaFile: await openAsBlob("example.file"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeSamplesGenerateCodeSamplePreviewAsync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CodeSampleSchemaInput](../../models/components/codesampleschemainput.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateCodeSamplePreviewAsyncResponse](../../models/operations/generatecodesamplepreviewasyncresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.ErrorT    | 5XX              | application/json |

## getCodeSamplePreviewAsync

Poll for the result of an asynchronous Code Sample preview generation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCodeSamplePreviewAsync" method="get" path="/v1/code_sample/preview/async/{jobID}" example="default" -->
```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.codeSamples.getCodeSamplePreviewAsync("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { codeSamplesGetCodeSamplePreviewAsync } from "petstore/funcs/codeSamplesGetCodeSamplePreviewAsync.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await codeSamplesGetCodeSamplePreviewAsync(sdk, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("codeSamplesGetCodeSamplePreviewAsync failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `jobID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the job to check the status and retrieve results                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCodeSamplePreviewAsyncResponse](../../models/operations/getcodesamplepreviewasyncresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.ErrorT    | 5XX              | application/json |