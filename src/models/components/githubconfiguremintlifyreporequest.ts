/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A request to configure a GitHub repository for mintlify
 */
export type GithubConfigureMintlifyRepoRequest = {
  /**
   * The GitHub organization name
   */
  org: string;
  /**
   * The GitHub repository name
   */
  repo: string;
  /**
   * The subdirectory (location of mint.json)
   */
  subdirectory?: string | undefined;
  /**
   * The input OpenAPI document
   */
  input: string;
  /**
   * The overlays to apply
   */
  overlays: Array<string>;
};

/** @internal */
export const GithubConfigureMintlifyRepoRequest$inboundSchema: z.ZodType<
  GithubConfigureMintlifyRepoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  org: z.string(),
  repo: z.string(),
  subdirectory: z.string().optional(),
  input: z.string(),
  overlays: z.array(z.string()),
});

/** @internal */
export type GithubConfigureMintlifyRepoRequest$Outbound = {
  org: string;
  repo: string;
  subdirectory?: string | undefined;
  input: string;
  overlays: Array<string>;
};

/** @internal */
export const GithubConfigureMintlifyRepoRequest$outboundSchema: z.ZodType<
  GithubConfigureMintlifyRepoRequest$Outbound,
  z.ZodTypeDef,
  GithubConfigureMintlifyRepoRequest
> = z.object({
  org: z.string(),
  repo: z.string(),
  subdirectory: z.string().optional(),
  input: z.string(),
  overlays: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubConfigureMintlifyRepoRequest$ {
  /** @deprecated use `GithubConfigureMintlifyRepoRequest$inboundSchema` instead. */
  export const inboundSchema = GithubConfigureMintlifyRepoRequest$inboundSchema;
  /** @deprecated use `GithubConfigureMintlifyRepoRequest$outboundSchema` instead. */
  export const outboundSchema =
    GithubConfigureMintlifyRepoRequest$outboundSchema;
  /** @deprecated use `GithubConfigureMintlifyRepoRequest$Outbound` instead. */
  export type Outbound = GithubConfigureMintlifyRepoRequest$Outbound;
}
