/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import {
  encodeJSON as encodeJSON$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * (DEPRECATED) Generate suggestions for improving an OpenAPI document.
 *
 * @remarks
 * Get suggestions from an LLM model for improving an OpenAPI document.
 */
export async function suggestSuggestOpenAPI(
  client$: SDKCore,
  xSessionId: string,
  requestBody: operations.SuggestOpenAPIRequestBody,
  options?: RequestOptions,
): Promise<
  Result<
    operations.SuggestOpenAPIResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.SuggestOpenAPIRequest = {
    xSessionId: xSessionId,
    requestBody: requestBody,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.SuggestOpenAPIRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = new FormData();

  if (isBlobLike(payload$.RequestBody.schema)) {
    body$.append("schema", payload$.RequestBody.schema);
  } else if (isReadableStream(payload$.RequestBody.schema.content)) {
    const buffer = await readableStreamToArrayBuffer(
      payload$.RequestBody.schema.content,
    );
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body$.append("schema", blob);
  } else {
    body$.append(
      "schema",
      new Blob([payload$.RequestBody.schema.content], {
        type: "application/octet-stream",
      }),
      payload$.RequestBody.schema.fileName,
    );
  }
  if (payload$.RequestBody.opts !== undefined) {
    body$.append(
      "opts",
      encodeJSON$("opts", payload$.RequestBody.opts, { explode: true }),
    );
  }

  const path$ = pathToFunc("/v1/suggest/openapi")();

  const headers$ = new Headers({
    Accept: "application/json",
    "x-session-id": encodeSimple$("x-session-id", payload$["x-session-id"], {
      explode: false,
      charEncoding: "none",
    }),
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID: "suggestOpenAPI",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    operations.SuggestOpenAPIResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.stream(200, operations.SuggestOpenAPIResponse$inboundSchema, {
      ctype: "application/json",
      key: "Schema",
    }),
    m$.fail(["4XX", "5XX"]),
  )(response, request$, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
