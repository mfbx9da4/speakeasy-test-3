/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GithubConfigureMintlifyRepoResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const GithubConfigureMintlifyRepoResponse$inboundSchema: z.ZodType<
  GithubConfigureMintlifyRepoResponse,
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
export type GithubConfigureMintlifyRepoResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const GithubConfigureMintlifyRepoResponse$outboundSchema: z.ZodType<
  GithubConfigureMintlifyRepoResponse$Outbound,
  z.ZodTypeDef,
  GithubConfigureMintlifyRepoResponse
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
export namespace GithubConfigureMintlifyRepoResponse$ {
  /** @deprecated use `GithubConfigureMintlifyRepoResponse$inboundSchema` instead. */
  export const inboundSchema =
    GithubConfigureMintlifyRepoResponse$inboundSchema;
  /** @deprecated use `GithubConfigureMintlifyRepoResponse$outboundSchema` instead. */
  export const outboundSchema =
    GithubConfigureMintlifyRepoResponse$outboundSchema;
  /** @deprecated use `GithubConfigureMintlifyRepoResponse$Outbound` instead. */
  export type Outbound = GithubConfigureMintlifyRepoResponse$Outbound;
}
