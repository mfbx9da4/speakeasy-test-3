/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type RevokeUserAccessToWorkspaceRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId: string;
  /**
   * Unique identifier of the user.
   */
  userId: string;
};

export type RevokeUserAccessToWorkspaceResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const RevokeUserAccessToWorkspaceRequest$inboundSchema: z.ZodType<
  RevokeUserAccessToWorkspaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type RevokeUserAccessToWorkspaceRequest$Outbound = {
  workspace_id: string;
  userId: string;
};

/** @internal */
export const RevokeUserAccessToWorkspaceRequest$outboundSchema: z.ZodType<
  RevokeUserAccessToWorkspaceRequest$Outbound,
  z.ZodTypeDef,
  RevokeUserAccessToWorkspaceRequest
> = z.object({
  workspaceId: z.string(),
  userId: z.string(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeUserAccessToWorkspaceRequest$ {
  /** @deprecated use `RevokeUserAccessToWorkspaceRequest$inboundSchema` instead. */
  export const inboundSchema = RevokeUserAccessToWorkspaceRequest$inboundSchema;
  /** @deprecated use `RevokeUserAccessToWorkspaceRequest$outboundSchema` instead. */
  export const outboundSchema =
    RevokeUserAccessToWorkspaceRequest$outboundSchema;
  /** @deprecated use `RevokeUserAccessToWorkspaceRequest$Outbound` instead. */
  export type Outbound = RevokeUserAccessToWorkspaceRequest$Outbound;
}

/** @internal */
export const RevokeUserAccessToWorkspaceResponse$inboundSchema: z.ZodType<
  RevokeUserAccessToWorkspaceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
  });
});

/** @internal */
export type RevokeUserAccessToWorkspaceResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const RevokeUserAccessToWorkspaceResponse$outboundSchema: z.ZodType<
  RevokeUserAccessToWorkspaceResponse$Outbound,
  z.ZodTypeDef,
  RevokeUserAccessToWorkspaceResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RevokeUserAccessToWorkspaceResponse$ {
  /** @deprecated use `RevokeUserAccessToWorkspaceResponse$inboundSchema` instead. */
  export const inboundSchema =
    RevokeUserAccessToWorkspaceResponse$inboundSchema;
  /** @deprecated use `RevokeUserAccessToWorkspaceResponse$outboundSchema` instead. */
  export const outboundSchema =
    RevokeUserAccessToWorkspaceResponse$outboundSchema;
  /** @deprecated use `RevokeUserAccessToWorkspaceResponse$Outbound` instead. */
  export type Outbound = RevokeUserAccessToWorkspaceResponse$Outbound;
}
