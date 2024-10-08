/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Revision,
  Revision$inboundSchema,
  Revision$Outbound,
  Revision$outboundSchema,
} from "./revision.js";

export type GetRevisionsResponse = {
  items: Array<Revision>;
  nextPageToken: string;
};

/** @internal */
export const GetRevisionsResponse$inboundSchema: z.ZodType<
  GetRevisionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Revision$inboundSchema),
  next_page_token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "next_page_token": "nextPageToken",
  });
});

/** @internal */
export type GetRevisionsResponse$Outbound = {
  items: Array<Revision$Outbound>;
  next_page_token: string;
};

/** @internal */
export const GetRevisionsResponse$outboundSchema: z.ZodType<
  GetRevisionsResponse$Outbound,
  z.ZodTypeDef,
  GetRevisionsResponse
> = z.object({
  items: z.array(Revision$outboundSchema),
  nextPageToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    nextPageToken: "next_page_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRevisionsResponse$ {
  /** @deprecated use `GetRevisionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetRevisionsResponse$inboundSchema;
  /** @deprecated use `GetRevisionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetRevisionsResponse$outboundSchema;
  /** @deprecated use `GetRevisionsResponse$Outbound` instead. */
  export type Outbound = GetRevisionsResponse$Outbound;
}
