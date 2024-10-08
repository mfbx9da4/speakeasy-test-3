/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PostTagsRequest = {
  namespaceName: string;
  /**
   * A JSON representation of the tags to add
   */
  addTags?: components.AddTags | undefined;
};

export type PostTagsResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const PostTagsRequest$inboundSchema: z.ZodType<
  PostTagsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  namespace_name: z.string(),
  AddTags: components.AddTags$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
    "AddTags": "addTags",
  });
});

/** @internal */
export type PostTagsRequest$Outbound = {
  namespace_name: string;
  AddTags?: components.AddTags$Outbound | undefined;
};

/** @internal */
export const PostTagsRequest$outboundSchema: z.ZodType<
  PostTagsRequest$Outbound,
  z.ZodTypeDef,
  PostTagsRequest
> = z.object({
  namespaceName: z.string(),
  addTags: components.AddTags$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
    addTags: "AddTags",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostTagsRequest$ {
  /** @deprecated use `PostTagsRequest$inboundSchema` instead. */
  export const inboundSchema = PostTagsRequest$inboundSchema;
  /** @deprecated use `PostTagsRequest$outboundSchema` instead. */
  export const outboundSchema = PostTagsRequest$outboundSchema;
  /** @deprecated use `PostTagsRequest$Outbound` instead. */
  export type Outbound = PostTagsRequest$Outbound;
}

/** @internal */
export const PostTagsResponse$inboundSchema: z.ZodType<
  PostTagsResponse,
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
export type PostTagsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const PostTagsResponse$outboundSchema: z.ZodType<
  PostTagsResponse$Outbound,
  z.ZodTypeDef,
  PostTagsResponse
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
export namespace PostTagsResponse$ {
  /** @deprecated use `PostTagsResponse$inboundSchema` instead. */
  export const inboundSchema = PostTagsResponse$inboundSchema;
  /** @deprecated use `PostTagsResponse$outboundSchema` instead. */
  export const outboundSchema = PostTagsResponse$outboundSchema;
  /** @deprecated use `PostTagsResponse$Outbound` instead. */
  export type Outbound = PostTagsResponse$Outbound;
}
