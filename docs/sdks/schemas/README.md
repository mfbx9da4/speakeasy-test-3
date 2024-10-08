# Schemas
(*schemas*)

## Overview

REST APIs for managing Schema entities

### Available Operations

* [getSchema](#getschema) - Get information about the latest schema.
* [registerSchema](#registerschema) - Register a schema.
* [downloadSchema](#downloadschema) - Download the latest schema for a particular apiID.
* [getSchemaDiff](#getschemadiff) - Get a diff of two schema revisions for an Api.
* [deleteSchema](#deleteschema) - Delete a particular schema revision for an Api.
* [getSchemaRevision](#getschemarevision) - Get information about a particular schema revision for an Api.
* [downloadSchemaRevision](#downloadschemarevision) - Download a particular schema revision for an Api.
* [getSchemas](#getschemas) - Get information about all schemas associated with a particular apiID.

## getSchema

Returns information about the last uploaded schema for a particular API version.
This won't include the schema itself, that can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.getSchema("<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasGetSchema } from "petstore/funcs/schemasGetSchema.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasGetSchema(sdk, "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to get the schema for.                                                                                                                                       |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSchemaResponse](../../models/operations/getschemaresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## registerSchema

Allows uploading a schema for a particular API version.
This will be used to populate ApiEndpoints and used as a base for any schema generation if present.

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
  const result = await sdk.schemas.registerSchema({
    file: await openAsBlob("example.file"),
  }, "<id>", "<id>");

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
import { schemasRegisterSchema } from "petstore/funcs/schemasRegisterSchema.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasRegisterSchema(sdk, {
    file: await openAsBlob("example.file"),
  }, "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to get the schema for.                                                                                                                                       |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `requestBody`                                                                                                                                                                  | [operations.RegisterSchemaRequestBody](../../models/operations/registerschemarequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The schema file to upload provided as a multipart/form-data file segment.                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RegisterSchemaResponse](../../models/operations/registerschemaresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## downloadSchema

Download the latest schema for a particular apiID.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.downloadSchema("<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasDownloadSchema } from "petstore/funcs/schemasDownloadSchema.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasDownloadSchema(sdk, "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to download the schema for.                                                                                                                                  |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DownloadSchemaResponse](../../models/operations/downloadschemaresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## getSchemaDiff

Get a diff of two schema revisions for an Api.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.getSchemaDiff("<id>", "<id>", "<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasGetSchemaDiff } from "petstore/funcs/schemasGetSchemaDiff.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasGetSchemaDiff(sdk, "<id>", "<id>", "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to retrieve schemas for.                                                                                                                                     |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `baseRevisionID`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The base revision ID of the schema to retrieve.                                                                                                                                |
| `targetRevisionID`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The target revision ID of the schema to retrieve.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSchemaDiffResponse](../../models/operations/getschemadiffresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## deleteSchema

Delete a particular schema revision for an Api.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.deleteSchema("<id>", "<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasDeleteSchema } from "petstore/funcs/schemasDeleteSchema.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasDeleteSchema(sdk, "<id>", "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to delete schemas for.                                                                                                                                       |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `revisionID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The revision ID of the schema to delete.                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSchemaResponse](../../models/operations/deleteschemaresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## getSchemaRevision

Returns information about the last uploaded schema for a particular schema revision.
This won't include the schema itself, that can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.getSchemaRevision("<id>", "<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasGetSchemaRevision } from "petstore/funcs/schemasGetSchemaRevision.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasGetSchemaRevision(sdk, "<id>", "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to retrieve schemas for.                                                                                                                                     |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `revisionID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The revision ID of the schema to retrieve.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSchemaRevisionResponse](../../models/operations/getschemarevisionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## downloadSchemaRevision

Download a particular schema revision for an Api.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.downloadSchemaRevision("<id>", "<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasDownloadSchemaRevision } from "petstore/funcs/schemasDownloadSchemaRevision.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasDownloadSchemaRevision(sdk, "<id>", "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to retrieve schemas for.                                                                                                                                     |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `revisionID`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The revision ID of the schema to retrieve.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DownloadSchemaRevisionResponse](../../models/operations/downloadschemarevisionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |

## getSchemas

Returns information the schemas associated with a particular apiID.
This won't include the schemas themselves, they can be retrieved via the downloadSchema operation.

### Example Usage

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.schemas.getSchemas("<id>", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "petstore/core.js";
import { schemasGetSchemas } from "petstore/funcs/schemasGetSchemas.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await schemasGetSchemas(sdk, "<id>", "<id>");

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
| `apiID`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the Api to retrieve schemas for.                                                                                                                                     |
| `versionID`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the Api to delete metadata for.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSchemasResponse](../../models/operations/getschemasresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 5XX              | \*/\*            |