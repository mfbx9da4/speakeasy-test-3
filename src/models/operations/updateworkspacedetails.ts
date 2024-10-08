/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateWorkspaceDetailsRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId: string;
  /**
   * The workspace details to update.
   */
  workspace: components.Workspace;
};

export type UpdateWorkspaceDetailsResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const UpdateWorkspaceDetailsRequest$inboundSchema: z.ZodType<
  UpdateWorkspaceDetailsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  Workspace: components.Workspace$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "Workspace": "workspace",
  });
});

/** @internal */
export type UpdateWorkspaceDetailsRequest$Outbound = {
  workspace_id: string;
  Workspace: components.Workspace$Outbound;
};

/** @internal */
export const UpdateWorkspaceDetailsRequest$outboundSchema: z.ZodType<
  UpdateWorkspaceDetailsRequest$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceDetailsRequest
> = z.object({
  workspaceId: z.string(),
  workspace: components.Workspace$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    workspace: "Workspace",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWorkspaceDetailsRequest$ {
  /** @deprecated use `UpdateWorkspaceDetailsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceDetailsRequest$inboundSchema;
  /** @deprecated use `UpdateWorkspaceDetailsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceDetailsRequest$outboundSchema;
  /** @deprecated use `UpdateWorkspaceDetailsRequest$Outbound` instead. */
  export type Outbound = UpdateWorkspaceDetailsRequest$Outbound;
}

/** @internal */
export const UpdateWorkspaceDetailsResponse$inboundSchema: z.ZodType<
  UpdateWorkspaceDetailsResponse,
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
export type UpdateWorkspaceDetailsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const UpdateWorkspaceDetailsResponse$outboundSchema: z.ZodType<
  UpdateWorkspaceDetailsResponse$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceDetailsResponse
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
export namespace UpdateWorkspaceDetailsResponse$ {
  /** @deprecated use `UpdateWorkspaceDetailsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceDetailsResponse$inboundSchema;
  /** @deprecated use `UpdateWorkspaceDetailsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceDetailsResponse$outboundSchema;
  /** @deprecated use `UpdateWorkspaceDetailsResponse$Outbound` instead. */
  export type Outbound = UpdateWorkspaceDetailsResponse$Outbound;
}