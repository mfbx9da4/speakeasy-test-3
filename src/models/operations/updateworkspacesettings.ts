/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateWorkspaceSettingsRequest = {
  /**
   * Unique identifier of the workspace.
   */
  workspaceId: string;
  /**
   * The workspace settings to update.
   */
  workspaceSettings: components.WorkspaceSettings;
};

export type UpdateWorkspaceSettingsResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const UpdateWorkspaceSettingsRequest$inboundSchema: z.ZodType<
  UpdateWorkspaceSettingsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  WorkspaceSettings: components.WorkspaceSettings$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "WorkspaceSettings": "workspaceSettings",
  });
});

/** @internal */
export type UpdateWorkspaceSettingsRequest$Outbound = {
  workspace_id: string;
  WorkspaceSettings: components.WorkspaceSettings$Outbound;
};

/** @internal */
export const UpdateWorkspaceSettingsRequest$outboundSchema: z.ZodType<
  UpdateWorkspaceSettingsRequest$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceSettingsRequest
> = z.object({
  workspaceId: z.string(),
  workspaceSettings: components.WorkspaceSettings$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    workspaceSettings: "WorkspaceSettings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWorkspaceSettingsRequest$ {
  /** @deprecated use `UpdateWorkspaceSettingsRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceSettingsRequest$inboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceSettingsRequest$outboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsRequest$Outbound` instead. */
  export type Outbound = UpdateWorkspaceSettingsRequest$Outbound;
}

/** @internal */
export const UpdateWorkspaceSettingsResponse$inboundSchema: z.ZodType<
  UpdateWorkspaceSettingsResponse,
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
export type UpdateWorkspaceSettingsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const UpdateWorkspaceSettingsResponse$outboundSchema: z.ZodType<
  UpdateWorkspaceSettingsResponse$Outbound,
  z.ZodTypeDef,
  UpdateWorkspaceSettingsResponse
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
export namespace UpdateWorkspaceSettingsResponse$ {
  /** @deprecated use `UpdateWorkspaceSettingsResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateWorkspaceSettingsResponse$inboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateWorkspaceSettingsResponse$outboundSchema;
  /** @deprecated use `UpdateWorkspaceSettingsResponse$Outbound` instead. */
  export type Outbound = UpdateWorkspaceSettingsResponse$Outbound;
}