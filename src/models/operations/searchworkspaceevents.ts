/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type SearchWorkspaceEventsRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId: string;
  /**
   * Unique identifier of the source revision digest.
   */
  sourceRevisionDigest?: string | undefined;
  /**
   * Unique identifier of the lint report digest.
   */
  lintReportDigest?: string | undefined;
  /**
   * Unique identifier of the openapi diff report digest.
   */
  openapiDiffReportDigest?: string | undefined;
  /**
   * Specified interaction type for events.
   */
  interactionType?: components.InteractionType | undefined;
  /**
   * A specific gen lock ID for the events.
   */
  generateGenLockId?: string | undefined;
};

export type SearchWorkspaceEventsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Success
   */
  cliEventBatch?: Array<components.CliEvent> | undefined;
};

/** @internal */
export const SearchWorkspaceEventsRequest$inboundSchema: z.ZodType<
  SearchWorkspaceEventsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  source_revision_digest: z.string().optional(),
  lint_report_digest: z.string().optional(),
  openapi_diff_report_digest: z.string().optional(),
  interaction_type: components.InteractionType$inboundSchema.optional(),
  generate_gen_lock_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "source_revision_digest": "sourceRevisionDigest",
    "lint_report_digest": "lintReportDigest",
    "openapi_diff_report_digest": "openapiDiffReportDigest",
    "interaction_type": "interactionType",
    "generate_gen_lock_id": "generateGenLockId",
  });
});

/** @internal */
export type SearchWorkspaceEventsRequest$Outbound = {
  workspace_id: string;
  source_revision_digest?: string | undefined;
  lint_report_digest?: string | undefined;
  openapi_diff_report_digest?: string | undefined;
  interaction_type?: string | undefined;
  generate_gen_lock_id?: string | undefined;
};

/** @internal */
export const SearchWorkspaceEventsRequest$outboundSchema: z.ZodType<
  SearchWorkspaceEventsRequest$Outbound,
  z.ZodTypeDef,
  SearchWorkspaceEventsRequest
> = z.object({
  workspaceId: z.string(),
  sourceRevisionDigest: z.string().optional(),
  lintReportDigest: z.string().optional(),
  openapiDiffReportDigest: z.string().optional(),
  interactionType: components.InteractionType$outboundSchema.optional(),
  generateGenLockId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    sourceRevisionDigest: "source_revision_digest",
    lintReportDigest: "lint_report_digest",
    openapiDiffReportDigest: "openapi_diff_report_digest",
    interactionType: "interaction_type",
    generateGenLockId: "generate_gen_lock_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchWorkspaceEventsRequest$ {
  /** @deprecated use `SearchWorkspaceEventsRequest$inboundSchema` instead. */
  export const inboundSchema = SearchWorkspaceEventsRequest$inboundSchema;
  /** @deprecated use `SearchWorkspaceEventsRequest$outboundSchema` instead. */
  export const outboundSchema = SearchWorkspaceEventsRequest$outboundSchema;
  /** @deprecated use `SearchWorkspaceEventsRequest$Outbound` instead. */
  export type Outbound = SearchWorkspaceEventsRequest$Outbound;
}

/** @internal */
export const SearchWorkspaceEventsResponse$inboundSchema: z.ZodType<
  SearchWorkspaceEventsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CliEventBatch: z.array(components.CliEvent$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CliEventBatch": "cliEventBatch",
  });
});

/** @internal */
export type SearchWorkspaceEventsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CliEventBatch?: Array<components.CliEvent$Outbound> | undefined;
};

/** @internal */
export const SearchWorkspaceEventsResponse$outboundSchema: z.ZodType<
  SearchWorkspaceEventsResponse$Outbound,
  z.ZodTypeDef,
  SearchWorkspaceEventsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  cliEventBatch: z.array(components.CliEvent$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    cliEventBatch: "CliEventBatch",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchWorkspaceEventsResponse$ {
  /** @deprecated use `SearchWorkspaceEventsResponse$inboundSchema` instead. */
  export const inboundSchema = SearchWorkspaceEventsResponse$inboundSchema;
  /** @deprecated use `SearchWorkspaceEventsResponse$outboundSchema` instead. */
  export const outboundSchema = SearchWorkspaceEventsResponse$outboundSchema;
  /** @deprecated use `SearchWorkspaceEventsResponse$Outbound` instead. */
  export type Outbound = SearchWorkspaceEventsResponse$Outbound;
}