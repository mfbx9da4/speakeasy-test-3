/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetOrganizationUsageResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  organizationUsageResponse?: components.OrganizationUsageResponse | undefined;
};

/** @internal */
export const GetOrganizationUsageResponse$inboundSchema: z.ZodType<
  GetOrganizationUsageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  OrganizationUsageResponse: components.OrganizationUsageResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "OrganizationUsageResponse": "organizationUsageResponse",
  });
});

/** @internal */
export type GetOrganizationUsageResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  OrganizationUsageResponse?:
    | components.OrganizationUsageResponse$Outbound
    | undefined;
};

/** @internal */
export const GetOrganizationUsageResponse$outboundSchema: z.ZodType<
  GetOrganizationUsageResponse$Outbound,
  z.ZodTypeDef,
  GetOrganizationUsageResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  organizationUsageResponse: components.OrganizationUsageResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    organizationUsageResponse: "OrganizationUsageResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOrganizationUsageResponse$ {
  /** @deprecated use `GetOrganizationUsageResponse$inboundSchema` instead. */
  export const inboundSchema = GetOrganizationUsageResponse$inboundSchema;
  /** @deprecated use `GetOrganizationUsageResponse$outboundSchema` instead. */
  export const outboundSchema = GetOrganizationUsageResponse$outboundSchema;
  /** @deprecated use `GetOrganizationUsageResponse$Outbound` instead. */
  export type Outbound = GetOrganizationUsageResponse$Outbound;
}
