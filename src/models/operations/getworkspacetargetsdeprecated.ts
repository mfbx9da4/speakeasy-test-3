/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetWorkspaceTargetsDeprecatedRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId: string;
  /**
   * Filter to only return targets with events created after this timestamp
   */
  afterLastEventCreatedAt?: Date | undefined;
};

export type GetWorkspaceTargetsDeprecatedResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Success
   */
  targetSDKList?: Array<components.TargetSDK> | undefined;
};

/** @internal */
export const GetWorkspaceTargetsDeprecatedRequest$inboundSchema: z.ZodType<
  GetWorkspaceTargetsDeprecatedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  after_last_event_created_at: z.string().datetime({ offset: true }).transform(
    v => new Date(v)
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "after_last_event_created_at": "afterLastEventCreatedAt",
  });
});

/** @internal */
export type GetWorkspaceTargetsDeprecatedRequest$Outbound = {
  workspace_id: string;
  after_last_event_created_at?: string | undefined;
};

/** @internal */
export const GetWorkspaceTargetsDeprecatedRequest$outboundSchema: z.ZodType<
  GetWorkspaceTargetsDeprecatedRequest$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsDeprecatedRequest
> = z.object({
  workspaceId: z.string(),
  afterLastEventCreatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    afterLastEventCreatedAt: "after_last_event_created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsDeprecatedRequest$ {
  /** @deprecated use `GetWorkspaceTargetsDeprecatedRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetWorkspaceTargetsDeprecatedRequest$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsDeprecatedRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetWorkspaceTargetsDeprecatedRequest$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsDeprecatedRequest$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsDeprecatedRequest$Outbound;
}

/** @internal */
export const GetWorkspaceTargetsDeprecatedResponse$inboundSchema: z.ZodType<
  GetWorkspaceTargetsDeprecatedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  TargetSDKList: z.array(components.TargetSDK$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "TargetSDKList": "targetSDKList",
  });
});

/** @internal */
export type GetWorkspaceTargetsDeprecatedResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  TargetSDKList?: Array<components.TargetSDK$Outbound> | undefined;
};

/** @internal */
export const GetWorkspaceTargetsDeprecatedResponse$outboundSchema: z.ZodType<
  GetWorkspaceTargetsDeprecatedResponse$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsDeprecatedResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  targetSDKList: z.array(components.TargetSDK$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    targetSDKList: "TargetSDKList",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsDeprecatedResponse$ {
  /** @deprecated use `GetWorkspaceTargetsDeprecatedResponse$inboundSchema` instead. */
  export const inboundSchema =
    GetWorkspaceTargetsDeprecatedResponse$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsDeprecatedResponse$outboundSchema` instead. */
  export const outboundSchema =
    GetWorkspaceTargetsDeprecatedResponse$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsDeprecatedResponse$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsDeprecatedResponse$Outbound;
}