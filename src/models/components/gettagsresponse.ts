/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Tag,
  Tag$inboundSchema,
  Tag$Outbound,
  Tag$outboundSchema,
} from "./tag.js";

export type GetTagsResponse = {
  items: Array<Tag>;
};

/** @internal */
export const GetTagsResponse$inboundSchema: z.ZodType<
  GetTagsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Tag$inboundSchema),
});

/** @internal */
export type GetTagsResponse$Outbound = {
  items: Array<Tag$Outbound>;
};

/** @internal */
export const GetTagsResponse$outboundSchema: z.ZodType<
  GetTagsResponse$Outbound,
  z.ZodTypeDef,
  GetTagsResponse
> = z.object({
  items: z.array(Tag$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTagsResponse$ {
  /** @deprecated use `GetTagsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTagsResponse$inboundSchema;
  /** @deprecated use `GetTagsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTagsResponse$outboundSchema;
  /** @deprecated use `GetTagsResponse$Outbound` instead. */
  export type Outbound = GetTagsResponse$Outbound;
}