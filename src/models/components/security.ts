/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Security = {
  apiKey?: string | undefined;
  bearer?: string | undefined;
};

/** @internal */
export const Security$inboundSchema: z.ZodType<
  Security,
  z.ZodTypeDef,
  unknown
> = z.object({
  APIKey: z.string().optional(),
  Bearer: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "APIKey": "apiKey",
    "Bearer": "bearer",
  });
});

/** @internal */
export type Security$Outbound = {
  APIKey?: string | undefined;
  Bearer?: string | undefined;
};

/** @internal */
export const Security$outboundSchema: z.ZodType<
  Security$Outbound,
  z.ZodTypeDef,
  Security
> = z.object({
  apiKey: z.string().optional(),
  bearer: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "APIKey",
    bearer: "Bearer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Security$ {
  /** @deprecated use `Security$inboundSchema` instead. */
  export const inboundSchema = Security$inboundSchema;
  /** @deprecated use `Security$outboundSchema` instead. */
  export const outboundSchema = Security$outboundSchema;
  /** @deprecated use `Security$Outbound` instead. */
  export type Outbound = Security$Outbound;
}
