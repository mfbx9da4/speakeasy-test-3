/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * A request to store publishing secrets for a github target
 */
export type GithubStorePublishingSecretsRequest = {
  /**
   * The generation lock ID
   */
  generateGenLockId: string;
  /**
   * A map of secrets to store in the GitHub target
   */
  secrets?: { [k: string]: string } | undefined;
};

/** @internal */
export const GithubStorePublishingSecretsRequest$inboundSchema: z.ZodType<
  GithubStorePublishingSecretsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  generate_gen_lock_id: z.string(),
  secrets: z.record(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "generate_gen_lock_id": "generateGenLockId",
  });
});

/** @internal */
export type GithubStorePublishingSecretsRequest$Outbound = {
  generate_gen_lock_id: string;
  secrets?: { [k: string]: string } | undefined;
};

/** @internal */
export const GithubStorePublishingSecretsRequest$outboundSchema: z.ZodType<
  GithubStorePublishingSecretsRequest$Outbound,
  z.ZodTypeDef,
  GithubStorePublishingSecretsRequest
> = z.object({
  generateGenLockId: z.string(),
  secrets: z.record(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    generateGenLockId: "generate_gen_lock_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubStorePublishingSecretsRequest$ {
  /** @deprecated use `GithubStorePublishingSecretsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GithubStorePublishingSecretsRequest$inboundSchema;
  /** @deprecated use `GithubStorePublishingSecretsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GithubStorePublishingSecretsRequest$outboundSchema;
  /** @deprecated use `GithubStorePublishingSecretsRequest$Outbound` instead. */
  export type Outbound = GithubStorePublishingSecretsRequest$Outbound;
}
