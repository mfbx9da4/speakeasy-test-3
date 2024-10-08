/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetAccessTokenRequest = {
  /**
   * The workspace ID
   */
  workspaceId: string;
};

export type GetAccessTokenResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  accessToken?: components.AccessToken | undefined;
};

/** @internal */
export const GetAccessTokenRequest$inboundSchema: z.ZodType<
  GetAccessTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type GetAccessTokenRequest$Outbound = {
  workspace_id: string;
};

/** @internal */
export const GetAccessTokenRequest$outboundSchema: z.ZodType<
  GetAccessTokenRequest$Outbound,
  z.ZodTypeDef,
  GetAccessTokenRequest
> = z.object({
  workspaceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccessTokenRequest$ {
  /** @deprecated use `GetAccessTokenRequest$inboundSchema` instead. */
  export const inboundSchema = GetAccessTokenRequest$inboundSchema;
  /** @deprecated use `GetAccessTokenRequest$outboundSchema` instead. */
  export const outboundSchema = GetAccessTokenRequest$outboundSchema;
  /** @deprecated use `GetAccessTokenRequest$Outbound` instead. */
  export type Outbound = GetAccessTokenRequest$Outbound;
}

/** @internal */
export const GetAccessTokenResponse$inboundSchema: z.ZodType<
  GetAccessTokenResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  AccessToken: components.AccessToken$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "AccessToken": "accessToken",
  });
});

/** @internal */
export type GetAccessTokenResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  AccessToken?: components.AccessToken$Outbound | undefined;
};

/** @internal */
export const GetAccessTokenResponse$outboundSchema: z.ZodType<
  GetAccessTokenResponse$Outbound,
  z.ZodTypeDef,
  GetAccessTokenResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  accessToken: components.AccessToken$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    accessToken: "AccessToken",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccessTokenResponse$ {
  /** @deprecated use `GetAccessTokenResponse$inboundSchema` instead. */
  export const inboundSchema = GetAccessTokenResponse$inboundSchema;
  /** @deprecated use `GetAccessTokenResponse$outboundSchema` instead. */
  export const outboundSchema = GetAccessTokenResponse$outboundSchema;
  /** @deprecated use `GetAccessTokenResponse$Outbound` instead. */
  export type Outbound = GetAccessTokenResponse$Outbound;
}
