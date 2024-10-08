/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GithubConfigureCodeSamplesResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  githubConfigureCodeSamplesResponse?:
    | components.GithubConfigureCodeSamplesResponse
    | undefined;
};

/** @internal */
export const GithubConfigureCodeSamplesResponse$inboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GithubConfigureCodeSamplesResponse: components
    .GithubConfigureCodeSamplesResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GithubConfigureCodeSamplesResponse": "githubConfigureCodeSamplesResponse",
  });
});

/** @internal */
export type GithubConfigureCodeSamplesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GithubConfigureCodeSamplesResponse?:
    | components.GithubConfigureCodeSamplesResponse$Outbound
    | undefined;
};

/** @internal */
export const GithubConfigureCodeSamplesResponse$outboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse$Outbound,
  z.ZodTypeDef,
  GithubConfigureCodeSamplesResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  githubConfigureCodeSamplesResponse: components
    .GithubConfigureCodeSamplesResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    githubConfigureCodeSamplesResponse: "GithubConfigureCodeSamplesResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubConfigureCodeSamplesResponse$ {
  /** @deprecated use `GithubConfigureCodeSamplesResponse$inboundSchema` instead. */
  export const inboundSchema = GithubConfigureCodeSamplesResponse$inboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GithubConfigureCodeSamplesResponse$outboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$Outbound` instead. */
  export type Outbound = GithubConfigureCodeSamplesResponse$Outbound;
}
