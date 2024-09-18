/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type DeleteApiEndpointRequest = {
  /**
   * The ID of the Api the ApiEndpoint belongs to.
   */
  apiID: string;
  /**
   * The version ID of the Api the ApiEndpoint belongs to.
   */
  versionID: string;
  /**
   * The ID of the ApiEndpoint to delete.
   */
  apiEndpointID: string;
};

export type DeleteApiEndpointResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Default error response
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const DeleteApiEndpointRequest$inboundSchema: z.ZodType<
  DeleteApiEndpointRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  apiEndpointID: z.string(),
});

/** @internal */
export type DeleteApiEndpointRequest$Outbound = {
  apiID: string;
  versionID: string;
  apiEndpointID: string;
};

/** @internal */
export const DeleteApiEndpointRequest$outboundSchema: z.ZodType<
  DeleteApiEndpointRequest$Outbound,
  z.ZodTypeDef,
  DeleteApiEndpointRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  apiEndpointID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiEndpointRequest$ {
  /** @deprecated use `DeleteApiEndpointRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteApiEndpointRequest$inboundSchema;
  /** @deprecated use `DeleteApiEndpointRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteApiEndpointRequest$outboundSchema;
  /** @deprecated use `DeleteApiEndpointRequest$Outbound` instead. */
  export type Outbound = DeleteApiEndpointRequest$Outbound;
}

/** @internal */
export const DeleteApiEndpointResponse$inboundSchema: z.ZodType<
  DeleteApiEndpointResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Error": "error",
  });
});

/** @internal */
export type DeleteApiEndpointResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteApiEndpointResponse$outboundSchema: z.ZodType<
  DeleteApiEndpointResponse$Outbound,
  z.ZodTypeDef,
  DeleteApiEndpointResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  error: errors.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    error: "Error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteApiEndpointResponse$ {
  /** @deprecated use `DeleteApiEndpointResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteApiEndpointResponse$inboundSchema;
  /** @deprecated use `DeleteApiEndpointResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteApiEndpointResponse$outboundSchema;
  /** @deprecated use `DeleteApiEndpointResponse$Outbound` instead. */
  export type Outbound = DeleteApiEndpointResponse$Outbound;
}
