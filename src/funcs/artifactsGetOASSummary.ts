/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
import { Result } from "../types/fp.js";

export async function artifactsGetOASSummary(
  client$: SDKCore,
  namespaceName: string,
  revisionReference: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetOASSummaryResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.GetOASSummaryRequest = {
    namespaceName: namespaceName,
    revisionReference: revisionReference,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.GetOASSummaryRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
      explode: false,
      charEncoding: "percent",
    }),
    revision_reference: encodeSimple$(
      "revision_reference",
      payload$.revision_reference,
      { explode: false, charEncoding: "percent" },
    ),
  };

  const path$ = pathToFunc(
    "/v1/artifacts/namespaces/{namespace_name}/revisions/{revision_reference}/summary",
  )(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const security$ = await extractSecurity(client$.options$.security);
  const context = {
    operationID: "getOASSummary",
    oAuth2Scopes: [],
    securitySource: client$.options$.security,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
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
    operations.GetOASSummaryResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetOASSummaryResponse$inboundSchema, {
      key: "OASSummary",
    }),
    m$.fail(["4XX", "5XX"]),
    m$.json("default", operations.GetOASSummaryResponse$inboundSchema, {
      key: "Error",
    }),
  )(response, request$, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
