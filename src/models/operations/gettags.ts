/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetTagsRequest = {
  namespaceName: string;
};

export type GetTagsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  getTagsResponse?: components.GetTagsResponse | undefined;
};

/** @internal */
export const GetTagsRequest$inboundSchema: z.ZodType<
  GetTagsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
  });
});

/** @internal */
export type GetTagsRequest$Outbound = {
  namespace_name: string;
};

/** @internal */
export const GetTagsRequest$outboundSchema: z.ZodType<
  GetTagsRequest$Outbound,
  z.ZodTypeDef,
  GetTagsRequest
> = z.object({
  namespaceName: z.string(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsRequest$ {
  /** @deprecated use `GetTagsRequest$inboundSchema` instead. */
  export const inboundSchema = GetTagsRequest$inboundSchema;
  /** @deprecated use `GetTagsRequest$outboundSchema` instead. */
  export const outboundSchema = GetTagsRequest$outboundSchema;
  /** @deprecated use `GetTagsRequest$Outbound` instead. */
  export type Outbound = GetTagsRequest$Outbound;
}

/** @internal */
export const GetTagsResponse$inboundSchema: z.ZodType<
  GetTagsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTagsResponse: components.GetTagsResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTagsResponse": "getTagsResponse",
  });
});

/** @internal */
export type GetTagsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTagsResponse?: components.GetTagsResponse$Outbound | undefined;
};

/** @internal */
export const GetTagsResponse$outboundSchema: z.ZodType<
  GetTagsResponse$Outbound,
  z.ZodTypeDef,
  GetTagsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTagsResponse: components.GetTagsResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTagsResponse: "GetTagsResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsResponse$ {
  /** @deprecated use `GetTagsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTagsResponse$inboundSchema;
  /** @deprecated use `GetTagsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTagsResponse$outboundSchema;
  /** @deprecated use `GetTagsResponse$Outbound` instead. */
  export type Outbound = GetTagsResponse$Outbound;
}
