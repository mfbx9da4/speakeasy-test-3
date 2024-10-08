/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as components from "../components/index.js";

export type UploadReportFile = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The report file to upload provided as a multipart/form-data file segment.
 */
export type UploadReportRequestBody = {
  data: components.Report;
  file: UploadReportFile | Blob;
};

/**
 * OK
 */
export type UploadReportUploadedReport = {
  url: string;
};

export type UploadReportResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  uploadedReport?: UploadReportUploadedReport | undefined;
};

/** @internal */
export const UploadReportFile$inboundSchema: z.ZodType<
  UploadReportFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type UploadReportFile$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const UploadReportFile$outboundSchema: z.ZodType<
  UploadReportFile$Outbound,
  z.ZodTypeDef,
  UploadReportFile
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
export namespace UploadReportFile$ {
  /** @deprecated use `UploadReportFile$inboundSchema` instead. */
  export const inboundSchema = UploadReportFile$inboundSchema;
  /** @deprecated use `UploadReportFile$outboundSchema` instead. */
  export const outboundSchema = UploadReportFile$outboundSchema;
  /** @deprecated use `UploadReportFile$Outbound` instead. */
  export type Outbound = UploadReportFile$Outbound;
}

/** @internal */
export const UploadReportRequestBody$inboundSchema: z.ZodType<
  UploadReportRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Report$inboundSchema,
  file: z.lazy(() => UploadReportFile$inboundSchema),
});

/** @internal */
export type UploadReportRequestBody$Outbound = {
  data: components.Report$Outbound;
  file: UploadReportFile$Outbound | Blob;
};

/** @internal */
export const UploadReportRequestBody$outboundSchema: z.ZodType<
  UploadReportRequestBody$Outbound,
  z.ZodTypeDef,
  UploadReportRequestBody
> = z.object({
  data: components.Report$outboundSchema,
  file: z.lazy(() => UploadReportFile$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportRequestBody$ {
  /** @deprecated use `UploadReportRequestBody$inboundSchema` instead. */
  export const inboundSchema = UploadReportRequestBody$inboundSchema;
  /** @deprecated use `UploadReportRequestBody$outboundSchema` instead. */
  export const outboundSchema = UploadReportRequestBody$outboundSchema;
  /** @deprecated use `UploadReportRequestBody$Outbound` instead. */
  export type Outbound = UploadReportRequestBody$Outbound;
}

/** @internal */
export const UploadReportUploadedReport$inboundSchema: z.ZodType<
  UploadReportUploadedReport,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type UploadReportUploadedReport$Outbound = {
  url: string;
};

/** @internal */
export const UploadReportUploadedReport$outboundSchema: z.ZodType<
  UploadReportUploadedReport$Outbound,
  z.ZodTypeDef,
  UploadReportUploadedReport
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportUploadedReport$ {
  /** @deprecated use `UploadReportUploadedReport$inboundSchema` instead. */
  export const inboundSchema = UploadReportUploadedReport$inboundSchema;
  /** @deprecated use `UploadReportUploadedReport$outboundSchema` instead. */
  export const outboundSchema = UploadReportUploadedReport$outboundSchema;
  /** @deprecated use `UploadReportUploadedReport$Outbound` instead. */
  export type Outbound = UploadReportUploadedReport$Outbound;
}

/** @internal */
export const UploadReportResponse$inboundSchema: z.ZodType<
  UploadReportResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  uploadedReport: z.lazy(() => UploadReportUploadedReport$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
  });
});

/** @internal */
export type UploadReportResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  uploadedReport?: UploadReportUploadedReport$Outbound | undefined;
};

/** @internal */
export const UploadReportResponse$outboundSchema: z.ZodType<
  UploadReportResponse$Outbound,
  z.ZodTypeDef,
  UploadReportResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  uploadedReport: z.lazy(() => UploadReportUploadedReport$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportResponse$ {
  /** @deprecated use `UploadReportResponse$inboundSchema` instead. */
  export const inboundSchema = UploadReportResponse$inboundSchema;
  /** @deprecated use `UploadReportResponse$outboundSchema` instead. */
  export const outboundSchema = UploadReportResponse$outboundSchema;
  /** @deprecated use `UploadReportResponse$Outbound` instead. */
  export type Outbound = UploadReportResponse$Outbound;
}
