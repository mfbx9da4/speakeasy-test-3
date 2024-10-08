/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as components from "../components/index.js";

export type Schema = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The schema file to upload provided as a multipart/form-data file segment.
 */
export type SuggestOpenAPIRequestBody = {
  schema: Schema | Blob;
  opts?: components.SuggestOptsOld | undefined;
};

export type SuggestOpenAPIRequest = {
  xSessionId: string;
  /**
   * The schema file to upload provided as a multipart/form-data file segment.
   */
  requestBody: SuggestOpenAPIRequestBody;
};

export type SuggestOpenAPIResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * An overlay containing the suggested spec modifications.
   */
  schema?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const Schema$inboundSchema: z.ZodType<Schema, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type Schema$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const Schema$outboundSchema: z.ZodType<
  Schema$Outbound,
  z.ZodTypeDef,
  Schema
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Schema$ {
  /** @deprecated use `Schema$inboundSchema` instead. */
  export const inboundSchema = Schema$inboundSchema;
  /** @deprecated use `Schema$outboundSchema` instead. */
  export const outboundSchema = Schema$outboundSchema;
  /** @deprecated use `Schema$Outbound` instead. */
  export type Outbound = Schema$Outbound;
}

/** @internal */
export const SuggestOpenAPIRequestBody$inboundSchema: z.ZodType<
  SuggestOpenAPIRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  schema: z.lazy(() => Schema$inboundSchema),
  opts: components.SuggestOptsOld$inboundSchema.optional(),
});

/** @internal */
export type SuggestOpenAPIRequestBody$Outbound = {
  schema: Schema$Outbound | Blob;
  opts?: components.SuggestOptsOld$Outbound | undefined;
};

/** @internal */
export const SuggestOpenAPIRequestBody$outboundSchema: z.ZodType<
  SuggestOpenAPIRequestBody$Outbound,
  z.ZodTypeDef,
  SuggestOpenAPIRequestBody
> = z.object({
  schema: z.lazy(() => Schema$outboundSchema).or(blobLikeSchema),
  opts: components.SuggestOptsOld$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestOpenAPIRequestBody$ {
  /** @deprecated use `SuggestOpenAPIRequestBody$inboundSchema` instead. */
  export const inboundSchema = SuggestOpenAPIRequestBody$inboundSchema;
  /** @deprecated use `SuggestOpenAPIRequestBody$outboundSchema` instead. */
  export const outboundSchema = SuggestOpenAPIRequestBody$outboundSchema;
  /** @deprecated use `SuggestOpenAPIRequestBody$Outbound` instead. */
  export type Outbound = SuggestOpenAPIRequestBody$Outbound;
}

/** @internal */
export const SuggestOpenAPIRequest$inboundSchema: z.ZodType<
  SuggestOpenAPIRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-session-id": z.string(),
  RequestBody: z.lazy(() => SuggestOpenAPIRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "x-session-id": "xSessionId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type SuggestOpenAPIRequest$Outbound = {
  "x-session-id": string;
  RequestBody: SuggestOpenAPIRequestBody$Outbound;
};

/** @internal */
export const SuggestOpenAPIRequest$outboundSchema: z.ZodType<
  SuggestOpenAPIRequest$Outbound,
  z.ZodTypeDef,
  SuggestOpenAPIRequest
> = z.object({
  xSessionId: z.string(),
  requestBody: z.lazy(() => SuggestOpenAPIRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    xSessionId: "x-session-id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestOpenAPIRequest$ {
  /** @deprecated use `SuggestOpenAPIRequest$inboundSchema` instead. */
  export const inboundSchema = SuggestOpenAPIRequest$inboundSchema;
  /** @deprecated use `SuggestOpenAPIRequest$outboundSchema` instead. */
  export const outboundSchema = SuggestOpenAPIRequest$outboundSchema;
  /** @deprecated use `SuggestOpenAPIRequest$Outbound` instead. */
  export type Outbound = SuggestOpenAPIRequest$Outbound;
}

/** @internal */
export const SuggestOpenAPIResponse$inboundSchema: z.ZodType<
  SuggestOpenAPIResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Schema: z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Schema": "schema",
  });
});

/** @internal */
export type SuggestOpenAPIResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Schema?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const SuggestOpenAPIResponse$outboundSchema: z.ZodType<
  SuggestOpenAPIResponse$Outbound,
  z.ZodTypeDef,
  SuggestOpenAPIResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  schema: z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    schema: "Schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SuggestOpenAPIResponse$ {
  /** @deprecated use `SuggestOpenAPIResponse$inboundSchema` instead. */
  export const inboundSchema = SuggestOpenAPIResponse$inboundSchema;
  /** @deprecated use `SuggestOpenAPIResponse$outboundSchema` instead. */
  export const outboundSchema = SuggestOpenAPIResponse$outboundSchema;
  /** @deprecated use `SuggestOpenAPIResponse$Outbound` instead. */
  export type Outbound = SuggestOpenAPIResponse$Outbound;
}