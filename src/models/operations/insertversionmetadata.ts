/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type InsertVersionMetadataRequest = {
  /**
   * The ID of the Api to insert metadata for.
   */
  apiID: string;
  /**
   * The version ID of the Api to insert metadata for.
   */
  versionID: string;
  /**
   * A JSON representation of the metadata to insert.
   */
  versionMetadata: components.VersionMetadataInput;
};

export type InsertVersionMetadataResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  versionMetadata?: components.VersionMetadata | undefined;
};

/** @internal */
export const InsertVersionMetadataRequest$inboundSchema: z.ZodType<
  InsertVersionMetadataRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  VersionMetadata: components.VersionMetadataInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "VersionMetadata": "versionMetadata",
  });
});

/** @internal */
export type InsertVersionMetadataRequest$Outbound = {
  apiID: string;
  versionID: string;
  VersionMetadata: components.VersionMetadataInput$Outbound;
};

/** @internal */
export const InsertVersionMetadataRequest$outboundSchema: z.ZodType<
  InsertVersionMetadataRequest$Outbound,
  z.ZodTypeDef,
  InsertVersionMetadataRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  versionMetadata: components.VersionMetadataInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    versionMetadata: "VersionMetadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertVersionMetadataRequest$ {
  /** @deprecated use `InsertVersionMetadataRequest$inboundSchema` instead. */
  export const inboundSchema = InsertVersionMetadataRequest$inboundSchema;
  /** @deprecated use `InsertVersionMetadataRequest$outboundSchema` instead. */
  export const outboundSchema = InsertVersionMetadataRequest$outboundSchema;
  /** @deprecated use `InsertVersionMetadataRequest$Outbound` instead. */
  export type Outbound = InsertVersionMetadataRequest$Outbound;
}

/** @internal */
export const InsertVersionMetadataResponse$inboundSchema: z.ZodType<
  InsertVersionMetadataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  VersionMetadata: components.VersionMetadata$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "VersionMetadata": "versionMetadata",
  });
});

/** @internal */
export type InsertVersionMetadataResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  VersionMetadata?: components.VersionMetadata$Outbound | undefined;
};

/** @internal */
export const InsertVersionMetadataResponse$outboundSchema: z.ZodType<
  InsertVersionMetadataResponse$Outbound,
  z.ZodTypeDef,
  InsertVersionMetadataResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  versionMetadata: components.VersionMetadata$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    versionMetadata: "VersionMetadata",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InsertVersionMetadataResponse$ {
  /** @deprecated use `InsertVersionMetadataResponse$inboundSchema` instead. */
  export const inboundSchema = InsertVersionMetadataResponse$inboundSchema;
  /** @deprecated use `InsertVersionMetadataResponse$outboundSchema` instead. */
  export const outboundSchema = InsertVersionMetadataResponse$outboundSchema;
  /** @deprecated use `InsertVersionMetadataResponse$Outbound` instead. */
  export type Outbound = InsertVersionMetadataResponse$Outbound;
}