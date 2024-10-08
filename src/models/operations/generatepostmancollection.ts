/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GeneratePostmanCollectionRequest = {
  /**
   * The ID of the Api to generate a Postman collection for.
   */
  apiID: string;
  /**
   * The version ID of the Api to generate a Postman collection for.
   */
  versionID: string;
};

export type GeneratePostmanCollectionResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  postmanCollection?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const GeneratePostmanCollectionRequest$inboundSchema: z.ZodType<
  GeneratePostmanCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/** @internal */
export type GeneratePostmanCollectionRequest$Outbound = {
  apiID: string;
  versionID: string;
};

/** @internal */
export const GeneratePostmanCollectionRequest$outboundSchema: z.ZodType<
  GeneratePostmanCollectionRequest$Outbound,
  z.ZodTypeDef,
  GeneratePostmanCollectionRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePostmanCollectionRequest$ {
  /** @deprecated use `GeneratePostmanCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = GeneratePostmanCollectionRequest$inboundSchema;
  /** @deprecated use `GeneratePostmanCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = GeneratePostmanCollectionRequest$outboundSchema;
  /** @deprecated use `GeneratePostmanCollectionRequest$Outbound` instead. */
  export type Outbound = GeneratePostmanCollectionRequest$Outbound;
}

/** @internal */
export const GeneratePostmanCollectionResponse$inboundSchema: z.ZodType<
  GeneratePostmanCollectionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  PostmanCollection: z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "PostmanCollection": "postmanCollection",
  });
});

/** @internal */
export type GeneratePostmanCollectionResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  PostmanCollection?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const GeneratePostmanCollectionResponse$outboundSchema: z.ZodType<
  GeneratePostmanCollectionResponse$Outbound,
  z.ZodTypeDef,
  GeneratePostmanCollectionResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  postmanCollection: z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    postmanCollection: "PostmanCollection",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GeneratePostmanCollectionResponse$ {
  /** @deprecated use `GeneratePostmanCollectionResponse$inboundSchema` instead. */
  export const inboundSchema = GeneratePostmanCollectionResponse$inboundSchema;
  /** @deprecated use `GeneratePostmanCollectionResponse$outboundSchema` instead. */
  export const outboundSchema =
    GeneratePostmanCollectionResponse$outboundSchema;
  /** @deprecated use `GeneratePostmanCollectionResponse$Outbound` instead. */
  export type Outbound = GeneratePostmanCollectionResponse$Outbound;
}
