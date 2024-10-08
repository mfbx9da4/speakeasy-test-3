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
 * Get manifest for a particular reference
 */
export async function artifactsGetManifest(
  client: SDKCore,
  organizationSlug: string,
  workspaceSlug: string,
  namespaceName: string,
  revisionReference: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GetManifestResponse,
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
  const input: operations.GetManifestRequest = {
    organizationSlug: organizationSlug,
    workspaceSlug: workspaceSlug,
    namespaceName: namespaceName,
    revisionReference: revisionReference,
  };

  const parsed = safeParse(
    input,
    (value) => operations.GetManifestRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    namespace_name: encodeSimple("namespace_name", payload.namespace_name, {
      explode: false,
      charEncoding: "percent",
    }),
    organization_slug: encodeSimple(
      "organization_slug",
      payload.organization_slug,
      { explode: false, charEncoding: "percent" },
    ),
    revision_reference: encodeSimple(
      "revision_reference",
      payload.revision_reference,
      { explode: false, charEncoding: "percent" },
    ),
    workspace_slug: encodeSimple("workspace_slug", payload.workspace_slug, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/manifests/{revision_reference}",
  )(pathParams);

  const headers = new Headers({
    Accept: "application/vnd.oci.image.manifest.v1+json",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "getManifest",
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
    operations.GetManifestResponse,
    | errors.ErrorT
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json("2XX", operations.GetManifestResponse$inboundSchema, {
      ctype: "application/vnd.oci.image.manifest.v1+json",
      key: "Manifest",
    }),
    M.jsonErr("4XX", errors.ErrorT$inboundSchema),
    M.fail("5XX"),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}