/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetSchemasRequest = {
  /**
   * The ID of the Api to retrieve schemas for.
   */
  apiID: string;
  /**
   * The version ID of the Api to delete metadata for.
   */
  versionID: string;
};

export type GetSchemasResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  schemata?: Array<components.Schema> | undefined;
  /**
   * Default error response
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetSchemasRequest$inboundSchema: z.ZodType<
  GetSchemasRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/** @internal */
export type GetSchemasRequest$Outbound = {
  apiID: string;
  versionID: string;
};

/** @internal */
export const GetSchemasRequest$outboundSchema: z.ZodType<
  GetSchemasRequest$Outbound,
  z.ZodTypeDef,
  GetSchemasRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemasRequest$ {
  /** @deprecated use `GetSchemasRequest$inboundSchema` instead. */
  export const inboundSchema = GetSchemasRequest$inboundSchema;
  /** @deprecated use `GetSchemasRequest$outboundSchema` instead. */
  export const outboundSchema = GetSchemasRequest$outboundSchema;
  /** @deprecated use `GetSchemasRequest$Outbound` instead. */
  export type Outbound = GetSchemasRequest$Outbound;
}

/** @internal */
export const GetSchemasResponse$inboundSchema: z.ZodType<
  GetSchemasResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Schemata: z.array(components.Schema$inboundSchema).optional(),
  Error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Schemata": "schemata",
    "Error": "error",
  });
});

/** @internal */
export type GetSchemasResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Schemata?: Array<components.Schema$Outbound> | undefined;
  Error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetSchemasResponse$outboundSchema: z.ZodType<
  GetSchemasResponse$Outbound,
  z.ZodTypeDef,
  GetSchemasResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  schemata: z.array(components.Schema$outboundSchema).optional(),
  error: errors.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    schemata: "Schemata",
    error: "Error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemasResponse$ {
  /** @deprecated use `GetSchemasResponse$inboundSchema` instead. */
  export const inboundSchema = GetSchemasResponse$inboundSchema;
  /** @deprecated use `GetSchemasResponse$outboundSchema` instead. */
  export const outboundSchema = GetSchemasResponse$outboundSchema;
  /** @deprecated use `GetSchemasResponse$Outbound` instead. */
  export type Outbound = GetSchemasResponse$Outbound;
}
