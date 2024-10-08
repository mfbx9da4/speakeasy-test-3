/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * response to a getting the latest action run on a GitHub request
 */
export type GithubGetActionResponse = {
  /**
   * The URL for latest action run if available
   */
  runUrl?: string | undefined;
  /**
   * The status of the latest action run if available
   */
  runStatus?: string | undefined;
};

/** @internal */
export const GithubGetActionResponse$inboundSchema: z.ZodType<
  GithubGetActionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  run_url: z.string().optional(),
  run_status: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "run_url": "runUrl",
    "run_status": "runStatus",
  });
});

/** @internal */
export type GithubGetActionResponse$Outbound = {
  run_url?: string | undefined;
  run_status?: string | undefined;
};

/** @internal */
export const GithubGetActionResponse$outboundSchema: z.ZodType<
  GithubGetActionResponse$Outbound,
  z.ZodTypeDef,
  GithubGetActionResponse
> = z.object({
  runUrl: z.string().optional(),
  runStatus: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    runUrl: "run_url",
    runStatus: "run_status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubGetActionResponse$ {
  /** @deprecated use `GithubGetActionResponse$inboundSchema` instead. */
  export const inboundSchema = GithubGetActionResponse$inboundSchema;
  /** @deprecated use `GithubGetActionResponse$outboundSchema` instead. */
  export const outboundSchema = GithubGetActionResponse$outboundSchema;
  /** @deprecated use `GithubGetActionResponse$Outbound` instead. */
  export type Outbound = GithubGetActionResponse$Outbound;
}
