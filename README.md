# petstore

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/mfbx9da4/speakeasy-test-3
```

### PNPM

```bash
pnpm add https://github.com/mfbx9da4/speakeasy-test-3
```

### Bun

```bash
bun add https://github.com/mfbx9da4/speakeasy-test-3
```

### Yarn

```bash
yarn add https://github.com/mfbx9da4/speakeasy-test-3 zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [apis](docs/sdks/apis/README.md)

* [getApis](docs/sdks/apis/README.md#getapis) - Get a list of Apis for a given workspace
* [getAllApiVersions](docs/sdks/apis/README.md#getallapiversions) - Get all Api versions for a particular ApiEndpoint.
* [upsertApi](docs/sdks/apis/README.md#upsertapi) - Upsert an Api
* [deleteApi](docs/sdks/apis/README.md#deleteapi) - Delete an Api.
* [generateOpenApiSpec](docs/sdks/apis/README.md#generateopenapispec) - Generate an OpenAPI specification for a particular Api.
* [generatePostmanCollection](docs/sdks/apis/README.md#generatepostmancollection) - Generate a Postman collection for a particular Api.

### [apiEndpoints](docs/sdks/apiendpoints/README.md)

* [getAllApiEndpoints](docs/sdks/apiendpoints/README.md#getallapiendpoints) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](docs/sdks/apiendpoints/README.md#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
* [findApiEndpoint](docs/sdks/apiendpoints/README.md#findapiendpoint) - Find an ApiEndpoint via its displayName.
* [deleteApiEndpoint](docs/sdks/apiendpoints/README.md#deleteapiendpoint) - Delete an ApiEndpoint.
* [getApiEndpoint](docs/sdks/apiendpoints/README.md#getapiendpoint) - Get an ApiEndpoint.
* [upsertApiEndpoint](docs/sdks/apiendpoints/README.md#upsertapiendpoint) - Upsert an ApiEndpoint.
* [generateOpenApiSpecForApiEndpoint](docs/sdks/apiendpoints/README.md#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](docs/sdks/apiendpoints/README.md#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.

### [metadata](docs/sdks/metadata/README.md)

* [getVersionMetadata](docs/sdks/metadata/README.md#getversionmetadata) - Get all metadata for a particular apiID and versionID.
* [insertVersionMetadata](docs/sdks/metadata/README.md#insertversionmetadata) - Insert metadata for a particular apiID and versionID.
* [deleteVersionMetadata](docs/sdks/metadata/README.md#deleteversionmetadata) - Delete metadata for a particular apiID and versionID.

### [schemas](docs/sdks/schemas/README.md)

* [getSchema](docs/sdks/schemas/README.md#getschema) - Get information about the latest schema.
* [registerSchema](docs/sdks/schemas/README.md#registerschema) - Register a schema.
* [downloadSchema](docs/sdks/schemas/README.md#downloadschema) - Download the latest schema for a particular apiID.
* [getSchemaDiff](docs/sdks/schemas/README.md#getschemadiff) - Get a diff of two schema revisions for an Api.
* [deleteSchema](docs/sdks/schemas/README.md#deleteschema) - Delete a particular schema revision for an Api.
* [getSchemaRevision](docs/sdks/schemas/README.md#getschemarevision) - Get information about a particular schema revision for an Api.
* [downloadSchemaRevision](docs/sdks/schemas/README.md#downloadschemarevision) - Download a particular schema revision for an Api.
* [getSchemas](docs/sdks/schemas/README.md#getschemas) - Get information about all schemas associated with a particular apiID.

### [auth](docs/sdks/auth/README.md)

* [validateApiKey](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.
* [getUser](docs/sdks/auth/README.md#getuser) - Get information about the current user.
* [getAccessToken](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getWorkspaceAccess](docs/sdks/auth/README.md#getworkspaceaccess) - Get access allowances for a particular workspace

### [requests](docs/sdks/requests/README.md)

* [queryEventLog](docs/sdks/requests/README.md#queryeventlog) - Query the event log to retrieve a list of requests.
* [getRequestFromEventLog](docs/sdks/requests/README.md#getrequestfromeventlog) - Get information about a particular request.
* [generateRequestPostmanCollection](docs/sdks/requests/README.md#generaterequestpostmancollection) - Generate a Postman collection for a particular request.

### [github](docs/sdks/github/README.md)

* [checkAccess](docs/sdks/github/README.md#checkaccess)
* [fetchPublishingPRs](docs/sdks/github/README.md#fetchpublishingprs)
* [githubCheckPublishingSecrets](docs/sdks/github/README.md#githubcheckpublishingsecrets)
* [githubStorePublishingSecrets](docs/sdks/github/README.md#githubstorepublishingsecrets)
* [configureCodeSamples](docs/sdks/github/README.md#configurecodesamples)
* [configureMintlifyRepo](docs/sdks/github/README.md#configuremintlifyrepo)
* [configureTarget](docs/sdks/github/README.md#configuretarget)
* [triggerAction](docs/sdks/github/README.md#triggeraction)
* [getAction](docs/sdks/github/README.md#getaction)

### [organizations](docs/sdks/organizations/README.md)

* [getOrganizations](docs/sdks/organizations/README.md#getorganizations) - Get organizations for a user
* [getOrganization](docs/sdks/organizations/README.md#getorganization) - Get organization
* [createFreeTrial](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
* [getOrganizationUsage](docs/sdks/organizations/README.md#getorganizationusage) - Get billing usage summary for a particular organization

### [embeds](docs/sdks/embeds/README.md)

* [getEmbedAccessToken](docs/sdks/embeds/README.md#getembedaccesstoken) - Get an embed access token for the current workspace.
* [getValidEmbedAccessTokens](docs/sdks/embeds/README.md#getvalidembedaccesstokens) - Get all valid embed access tokens for the current workspace.
* [revokeEmbedAccessToken](docs/sdks/embeds/README.md#revokeembedaccesstoken) - Revoke an embed access EmbedToken.

### [workspaces](docs/sdks/workspaces/README.md)

* [getWorkspace](docs/sdks/workspaces/README.md#getworkspace) - Get workspace

### [events](docs/sdks/events/README.md)

* [searchWorkspaceEvents](docs/sdks/events/README.md#searchworkspaceevents) - Search events for a particular workspace by any field
* [postWorkspaceEvents](docs/sdks/events/README.md#postworkspaceevents) - Post events for a specific workspace
* [getWorkspaceEventsByTarget](docs/sdks/events/README.md#getworkspaceeventsbytarget) - Load recent events for a particular workspace
* [getWorkspaceTargets](docs/sdks/events/README.md#getworkspacetargets) - Load targets for a particular workspace

### [artifacts](docs/sdks/artifacts/README.md)

* [preflight](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints
* [getNamespaces](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
* [getRevisions](docs/sdks/artifacts/README.md#getrevisions)
* [getOASSummary](docs/sdks/artifacts/README.md#getoassummary)
* [getTags](docs/sdks/artifacts/README.md#gettags)
* [postTags](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
* [getManifest](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
* [getBlob](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest

### [reports](docs/sdks/reports/README.md)

* [uploadReport](docs/sdks/reports/README.md#uploadreport) - Upload a report.
* [getLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
* [getChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.

### [suggest](docs/sdks/suggest/README.md)

* [suggestOperationIDs](docs/sdks/suggest/README.md#suggestoperationids) - Generate operation ID suggestions.
* [suggestOperationIDsRegistry](docs/sdks/suggest/README.md#suggestoperationidsregistry) - Generate operation ID suggestions.
* [applyOperationIDs](docs/sdks/suggest/README.md#applyoperationids) - Apply operation ID suggestions and download result.

### [shortURLs](docs/sdks/shorturls/README.md)

* [create](docs/sdks/shorturls/README.md#create) - Shorten a URL.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 5XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SDK } from "petstore";
import { SDKValidationError } from "petstore/models/errors";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    let result;
    try {
        result = await sdk.events.searchWorkspaceEvents({});
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.ErrorT: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.prod.speakeasyapi.dev` | None |

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    server: "prod",
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    serverURL: "https://api.prod.speakeasyapi.dev",
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "petstore";
import { HTTPClient } from "petstore/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceID` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getWorkspace`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| workspaceID | string |  | The workspaceID parameter. |


### Example

```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.workspaces.getWorkspace();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { SDK } from "petstore";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.schemas.registerSchema("<value>", "<value>", {
        file: await openAsBlob("./sample-file"),
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `apiKey`    | apiKey      | API key     |
| `bearer`    | http        | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { SDK } from "petstore";

const sdk = new SDK({
    security: {
        apiKey: "<YOUR_API_KEY_HERE>",
    },
});

async function run() {
    const result = await sdk.apis.getApis();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
# speakeasy-test-3
