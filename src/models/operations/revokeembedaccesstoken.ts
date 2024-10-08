/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type RevokeEmbedAccessTokenRequest = {
  /**
   * The ID of the EmbedToken to revoke.
   */
  tokenID: string;
};

export type RevokeEmbedAccessTokenResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const RevokeEmbedAccessTokenRequest$inboundSchema: z.ZodType<
  RevokeEmbedAccessTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tokenID: z.string(),
});

/** @internal */
export type RevokeEmbedAccessTokenRequest$Outbound = {
  tokenID: string;
};

/** @internal */
export const RevokeEmbedAccessTokenRequest$outboundSchema: z.ZodType<
  RevokeEmbedAccessTokenRequest$Outbound,
  z.ZodTypeDef,
  RevokeEmbedAccessTokenRequest
> = z.object({
  tokenID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeEmbedAccessTokenRequest$ {
  /** @deprecated use `RevokeEmbedAccessTokenRequest$inboundSchema` instead. */
  export const inboundSchema = RevokeEmbedAccessTokenRequest$inboundSchema;
  /** @deprecated use `RevokeEmbedAccessTokenRequest$outboundSchema` instead. */
  export const outboundSchema = RevokeEmbedAccessTokenRequest$outboundSchema;
  /** @deprecated use `RevokeEmbedAccessTokenRequest$Outbound` instead. */
  export type Outbound = RevokeEmbedAccessTokenRequest$Outbound;
}

/** @internal */
export const RevokeEmbedAccessTokenResponse$inboundSchema: z.ZodType<
  RevokeEmbedAccessTokenResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
  });
});

/** @internal */
export type RevokeEmbedAccessTokenResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const RevokeEmbedAccessTokenResponse$outboundSchema: z.ZodType<
  RevokeEmbedAccessTokenResponse$Outbound,
  z.ZodTypeDef,
  RevokeEmbedAccessTokenResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeEmbedAccessTokenResponse$ {
  /** @deprecated use `RevokeEmbedAccessTokenResponse$inboundSchema` instead. */
  export const inboundSchema = RevokeEmbedAccessTokenResponse$inboundSchema;
  /** @deprecated use `RevokeEmbedAccessTokenResponse$outboundSchema` instead. */
  export const outboundSchema = RevokeEmbedAccessTokenResponse$outboundSchema;
  /** @deprecated use `RevokeEmbedAccessTokenResponse$Outbound` instead. */
  export type Outbound = RevokeEmbedAccessTokenResponse$Outbound;
}
