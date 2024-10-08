/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateFreeTrialResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const CreateFreeTrialResponse$inboundSchema: z.ZodType<
  CreateFreeTrialResponse,
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
export type CreateFreeTrialResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const CreateFreeTrialResponse$outboundSchema: z.ZodType<
  CreateFreeTrialResponse$Outbound,
  z.ZodTypeDef,
  CreateFreeTrialResponse
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
export namespace CreateFreeTrialResponse$ {
  /** @deprecated use `CreateFreeTrialResponse$inboundSchema` instead. */
  export const inboundSchema = CreateFreeTrialResponse$inboundSchema;
  /** @deprecated use `CreateFreeTrialResponse$outboundSchema` instead. */
  export const outboundSchema = CreateFreeTrialResponse$outboundSchema;
  /** @deprecated use `CreateFreeTrialResponse$Outbound` instead. */
  export type Outbound = CreateFreeTrialResponse$Outbound;
}
