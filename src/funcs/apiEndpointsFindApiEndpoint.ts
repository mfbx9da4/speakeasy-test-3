/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Find an ApiEndpoint via its displayName.
 *
 * @remarks
 * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
 * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
 */
export async function apiEndpointsFindApiEndpoint(
  client: SDKCore,
  apiID: string,
  versionID: string,
  displayName: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.FindApiEndpointResponse,
    | errors.ErrorT
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.FindApiEndpointRequest = {
    apiID: apiID,
    versionID: versionID,
    displayName: displayName,
  };

  const parsed = safeParse(
    input,
    (value) => operations.FindApiEndpointRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    apiID: encodeSimple("apiID", payload.apiID, {
      explode: false,
      charEncoding: "percent",
    }),
    displayName: encodeSimple("displayName", payload.displayName, {
      explode: false,
      charEncoding: "percent",
    }),
    versionID: encodeSimple("versionID", payload.versionID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "findApiEndpoint",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.FindApiEndpointResponse,
    | errors.ErrorT
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json("2XX", operations.FindApiEndpointResponse$inboundSchema, {
      key: "ApiEndpoint",
    }),
    M.jsonErr("4XX", errors.ErrorT$inboundSchema),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
