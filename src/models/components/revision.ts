/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Revision = {
  /**
   * Format {namespace_id}/{revision_digest}
   */
  id: string;
  digest: string;
  namespaceName: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
};

/** @internal */
export const Revision$inboundSchema: z.ZodType<
  Revision,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  digest: z.string(),
  namespace_name: z.string(),
  tags: z.array(z.string()),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "namespace_name": "namespaceName",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Revision$Outbound = {
  id: string;
  digest: string;
  namespace_name: string;
  tags: Array<string>;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const Revision$outboundSchema: z.ZodType<
  Revision$Outbound,
  z.ZodTypeDef,
  Revision
> = z.object({
  id: z.string(),
  digest: z.string(),
  namespaceName: z.string(),
  tags: z.array(z.string()),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    namespaceName: "namespace_name",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Revision$ {
  /** @deprecated use `Revision$inboundSchema` instead. */
  export const inboundSchema = Revision$inboundSchema;
  /** @deprecated use `Revision$outboundSchema` instead. */
  export const outboundSchema = Revision$outboundSchema;
  /** @deprecated use `Revision$Outbound` instead. */
  export type Outbound = Revision$Outbound;
}
