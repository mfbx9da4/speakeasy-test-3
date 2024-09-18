/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type DownloadSchemaRequest = {
  /**
   * The ID of the Api to download the schema for.
   */
  apiID: string;
  /**
   * The version ID of the Api to delete metadata for.
   */
  versionID: string;
};

export type DownloadSchemaResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  twoHundredApplicationJsonSchema?: ReadableStream<Uint8Array> | undefined;
  /**
   * OK
   */
  twoHundredApplicationXYamlSchema?: ReadableStream<Uint8Array> | undefined;
  /**
   * Default error response
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const DownloadSchemaRequest$inboundSchema: z.ZodType<
  DownloadSchemaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/** @internal */
export type DownloadSchemaRequest$Outbound = {
  apiID: string;
  versionID: string;
};

/** @internal */
export const DownloadSchemaRequest$outboundSchema: z.ZodType<
  DownloadSchemaRequest$Outbound,
  z.ZodTypeDef,
  DownloadSchemaRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadSchemaRequest$ {
  /** @deprecated use `DownloadSchemaRequest$inboundSchema` instead. */
  export const inboundSchema = DownloadSchemaRequest$inboundSchema;
  /** @deprecated use `DownloadSchemaRequest$outboundSchema` instead. */
  export const outboundSchema = DownloadSchemaRequest$outboundSchema;
  /** @deprecated use `DownloadSchemaRequest$Outbound` instead. */
  export type Outbound = DownloadSchemaRequest$Outbound;
}

/** @internal */
export const DownloadSchemaResponse$inboundSchema: z.ZodType<
  DownloadSchemaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  "200_application/json_Schema": z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  "200_application/x-yaml_Schema": z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  Error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "200_application/json_Schema": "twoHundredApplicationJsonSchema",
    "200_application/x-yaml_Schema": "twoHundredApplicationXYamlSchema",
    "Error": "error",
  });
});

/** @internal */
export type DownloadSchemaResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  "200_application/json_Schema"?: ReadableStream<Uint8Array> | undefined;
  "200_application/x-yaml_Schema"?: ReadableStream<Uint8Array> | undefined;
  Error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const DownloadSchemaResponse$outboundSchema: z.ZodType<
  DownloadSchemaResponse$Outbound,
  z.ZodTypeDef,
  DownloadSchemaResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  twoHundredApplicationJsonSchema: z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  twoHundredApplicationXYamlSchema: z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  error: errors.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    twoHundredApplicationJsonSchema: "200_application/json_Schema",
    twoHundredApplicationXYamlSchema: "200_application/x-yaml_Schema",
    error: "Error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadSchemaResponse$ {
  /** @deprecated use `DownloadSchemaResponse$inboundSchema` instead. */
  export const inboundSchema = DownloadSchemaResponse$inboundSchema;
  /** @deprecated use `DownloadSchemaResponse$outboundSchema` instead. */
  export const outboundSchema = DownloadSchemaResponse$outboundSchema;
  /** @deprecated use `DownloadSchemaResponse$Outbound` instead. */
  export type Outbound = DownloadSchemaResponse$Outbound;
}
