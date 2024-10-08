/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GithubTriggerActionResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const GithubTriggerActionResponse$inboundSchema: z.ZodType<
  GithubTriggerActionResponse,
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
export type GithubTriggerActionResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const GithubTriggerActionResponse$outboundSchema: z.ZodType<
  GithubTriggerActionResponse$Outbound,
  z.ZodTypeDef,
  GithubTriggerActionResponse
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
export namespace GithubTriggerActionResponse$ {
  /** @deprecated use `GithubTriggerActionResponse$inboundSchema` instead. */
  export const inboundSchema = GithubTriggerActionResponse$inboundSchema;
  /** @deprecated use `GithubTriggerActionResponse$outboundSchema` instead. */
  export const outboundSchema = GithubTriggerActionResponse$outboundSchema;
  /** @deprecated use `GithubTriggerActionResponse$Outbound` instead. */
  export type Outbound = GithubTriggerActionResponse$Outbound;
}
