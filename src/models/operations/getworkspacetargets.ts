/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetWorkspaceTargetsGlobals = {
  workspaceID?: string | undefined;
};

export type GetWorkspaceTargetsRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceID?: string | undefined;
  /**
   * Filter to only return targets with events created after this timestamp
   */
  afterLastEventCreatedAt?: Date | undefined;
};

export type GetWorkspaceTargetsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Success
   */
  targetSDKList?: Array<components.TargetSDK> | undefined;
};

/** @internal */
export const GetWorkspaceTargetsGlobals$inboundSchema: z.ZodType<
  GetWorkspaceTargetsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceID: z.string().optional(),
});

/** @internal */
export type GetWorkspaceTargetsGlobals$Outbound = {
  workspaceID?: string | undefined;
};

/** @internal */
export const GetWorkspaceTargetsGlobals$outboundSchema: z.ZodType<
  GetWorkspaceTargetsGlobals$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsGlobals
> = z.object({
  workspaceID: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsGlobals$ {
  /** @deprecated use `GetWorkspaceTargetsGlobals$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceTargetsGlobals$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsGlobals$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceTargetsGlobals$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsGlobals$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsGlobals$Outbound;
}

/** @internal */
export const GetWorkspaceTargetsRequest$inboundSchema: z.ZodType<
  GetWorkspaceTargetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceID: z.string().optional(),
  after_last_event_created_at: z.string().datetime({ offset: true }).transform(
    v => new Date(v)
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "after_last_event_created_at": "afterLastEventCreatedAt",
  });
});

/** @internal */
export type GetWorkspaceTargetsRequest$Outbound = {
  workspaceID?: string | undefined;
  after_last_event_created_at?: string | undefined;
};

/** @internal */
export const GetWorkspaceTargetsRequest$outboundSchema: z.ZodType<
  GetWorkspaceTargetsRequest$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsRequest
> = z.object({
  workspaceID: z.string().optional(),
  afterLastEventCreatedAt: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    afterLastEventCreatedAt: "after_last_event_created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceTargetsRequest$ {
  /** @deprecated use `GetWorkspaceTargetsRequest$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceTargetsRequest$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsRequest$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceTargetsRequest$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsRequest$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsRequest$Outbound;
}

/** @internal */
export const GetWorkspaceTargetsResponse$inboundSchema: z.ZodType<
  GetWorkspaceTargetsResponse,
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
export type GetWorkspaceTargetsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  TargetSDKList?: Array<components.TargetSDK$Outbound> | undefined;
};

/** @internal */
export const GetWorkspaceTargetsResponse$outboundSchema: z.ZodType<
  GetWorkspaceTargetsResponse$Outbound,
  z.ZodTypeDef,
  GetWorkspaceTargetsResponse
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
export namespace GetWorkspaceTargetsResponse$ {
  /** @deprecated use `GetWorkspaceTargetsResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceTargetsResponse$inboundSchema;
  /** @deprecated use `GetWorkspaceTargetsResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceTargetsResponse$outboundSchema;
  /** @deprecated use `GetWorkspaceTargetsResponse$Outbound` instead. */
  export type Outbound = GetWorkspaceTargetsResponse$Outbound;
}
