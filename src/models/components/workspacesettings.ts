/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type WorkspaceSettings = {
  workspaceId: string;
  webhookUrl?: string | undefined;
};

/** @internal */
export const WorkspaceSettings$inboundSchema: z.ZodType<
  WorkspaceSettings,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspace_id: z.string(),
  webhook_url: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "workspace_id": "workspaceId",
    "webhook_url": "webhookUrl",
  });
});

/** @internal */
export type WorkspaceSettings$Outbound = {
  workspace_id: string;
  webhook_url?: string | undefined;
};

/** @internal */
export const WorkspaceSettings$outboundSchema: z.ZodType<
  WorkspaceSettings$Outbound,
  z.ZodTypeDef,
  WorkspaceSettings
> = z.object({
  workspaceId: z.string(),
  webhookUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    workspaceId: "workspace_id",
    webhookUrl: "webhook_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceSettings$ {
  /** @deprecated use `WorkspaceSettings$inboundSchema` instead. */
  export const inboundSchema = WorkspaceSettings$inboundSchema;
  /** @deprecated use `WorkspaceSettings$outboundSchema` instead. */
  export const outboundSchema = WorkspaceSettings$outboundSchema;
  /** @deprecated use `WorkspaceSettings$Outbound` instead. */
  export type Outbound = WorkspaceSettings$Outbound;
}
