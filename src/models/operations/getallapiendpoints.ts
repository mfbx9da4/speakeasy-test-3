/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetAllApiEndpointsRequest = {
  /**
   * The ID of the Api to retrieve ApiEndpoints for.
   */
  apiID: string;
};

export type GetAllApiEndpointsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  apiEndpoints?: Array<components.ApiEndpoint> | undefined;
};

/** @internal */
export const GetAllApiEndpointsRequest$inboundSchema: z.ZodType<
  GetAllApiEndpointsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
});

/** @internal */
export type GetAllApiEndpointsRequest$Outbound = {
  apiID: string;
};

/** @internal */
export const GetAllApiEndpointsRequest$outboundSchema: z.ZodType<
  GetAllApiEndpointsRequest$Outbound,
  z.ZodTypeDef,
  GetAllApiEndpointsRequest
> = z.object({
  apiID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllApiEndpointsRequest$ {
  /** @deprecated use `GetAllApiEndpointsRequest$inboundSchema` instead. */
  export const inboundSchema = GetAllApiEndpointsRequest$inboundSchema;
  /** @deprecated use `GetAllApiEndpointsRequest$outboundSchema` instead. */
  export const outboundSchema = GetAllApiEndpointsRequest$outboundSchema;
  /** @deprecated use `GetAllApiEndpointsRequest$Outbound` instead. */
  export type Outbound = GetAllApiEndpointsRequest$Outbound;
}

/** @internal */
export const GetAllApiEndpointsResponse$inboundSchema: z.ZodType<
  GetAllApiEndpointsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ApiEndpoints: z.array(components.ApiEndpoint$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ApiEndpoints": "apiEndpoints",
  });
});

/** @internal */
export type GetAllApiEndpointsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ApiEndpoints?: Array<components.ApiEndpoint$Outbound> | undefined;
};

/** @internal */
export const GetAllApiEndpointsResponse$outboundSchema: z.ZodType<
  GetAllApiEndpointsResponse$Outbound,
  z.ZodTypeDef,
  GetAllApiEndpointsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  apiEndpoints: z.array(components.ApiEndpoint$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    apiEndpoints: "ApiEndpoints",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAllApiEndpointsResponse$ {
  /** @deprecated use `GetAllApiEndpointsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAllApiEndpointsResponse$inboundSchema;
  /** @deprecated use `GetAllApiEndpointsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAllApiEndpointsResponse$outboundSchema;
  /** @deprecated use `GetAllApiEndpointsResponse$Outbound` instead. */
  export type Outbound = GetAllApiEndpointsResponse$Outbound;
}
