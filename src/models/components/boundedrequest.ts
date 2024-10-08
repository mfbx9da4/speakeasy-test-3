/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  RequestMetadata,
  RequestMetadata$inboundSchema,
  RequestMetadata$Outbound,
  RequestMetadata$outboundSchema,
} from "./requestmetadata.js";

/**
 * A BoundedRequest is a request that has been logged by the Speakeasy without the contents of the request.
 */
export type BoundedRequest = {
  /**
   * The ID of the ApiEndpoint this request was made to.
   */
  apiEndpointId: string;
  /**
   * The ID of the Api this request was made to.
   */
  apiId: string;
  /**
   * Creation timestamp.
   */
  createdAt: Date;
  /**
   * The ID of the customer that made this request.
   */
  customerId: string;
  /**
   * The latency of the request.
   */
  latency: number;
  /**
   * HTTP verb.
   */
  method: string;
  /**
   * The path of the request.
   */
  path: string;
  /**
   * The time the request finished.
   */
  requestFinishTime: Date;
  /**
   * The ID of this request.
   */
  requestId: string;
  /**
   * The time the request was made.
   */
  requestStartTime: Date;
  /**
   * The status code of the request.
   */
  status: number;
  /**
   * The version ID of the Api this request was made to.
   */
  versionId: string;
  /**
   * The workspace ID this request was made to.
   */
  workspaceId: string;
  /**
   * Metadata associated with this request
   */
  metadata?: Array<RequestMetadata> | undefined;
};

/** @internal */
export const BoundedRequest$inboundSchema: z.ZodType<
  BoundedRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_endpoint_id: z.string(),
  api_id: z.string(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  customer_id: z.string(),
  latency: z.number().int(),
  method: z.string(),
  path: z.string(),
  request_finish_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  request_id: z.string(),
  request_start_time: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  status: z.number().int(),
  version_id: z.string(),
  workspace_id: z.string(),
  metadata: z.array(RequestMetadata$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "api_endpoint_id": "apiEndpointId",
    "api_id": "apiId",
    "created_at": "createdAt",
    "customer_id": "customerId",
    "request_finish_time": "requestFinishTime",
    "request_id": "requestId",
    "request_start_time": "requestStartTime",
    "version_id": "versionId",
    "workspace_id": "workspaceId",
  });
});

/** @internal */
export type BoundedRequest$Outbound = {
  api_endpoint_id: string;
  api_id: string;
  created_at: string;
  customer_id: string;
  latency: number;
  method: string;
  path: string;
  request_finish_time: string;
  request_id: string;
  request_start_time: string;
  status: number;
  version_id: string;
  workspace_id: string;
  metadata?: Array<RequestMetadata$Outbound> | undefined;
};

/** @internal */
export const BoundedRequest$outboundSchema: z.ZodType<
  BoundedRequest$Outbound,
  z.ZodTypeDef,
  BoundedRequest
> = z.object({
  apiEndpointId: z.string(),
  apiId: z.string(),
  createdAt: z.date().transform(v => v.toISOString()),
  customerId: z.string(),
  latency: z.number().int(),
  method: z.string(),
  path: z.string(),
  requestFinishTime: z.date().transform(v => v.toISOString()),
  requestId: z.string(),
  requestStartTime: z.date().transform(v => v.toISOString()),
  status: z.number().int(),
  versionId: z.string(),
  workspaceId: z.string(),
  metadata: z.array(RequestMetadata$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    apiEndpointId: "api_endpoint_id",
    apiId: "api_id",
    createdAt: "created_at",
    customerId: "customer_id",
    requestFinishTime: "request_finish_time",
    requestId: "request_id",
    requestStartTime: "request_start_time",
    versionId: "version_id",
    workspaceId: "workspace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BoundedRequest$ {
  /** @deprecated use `BoundedRequest$inboundSchema` instead. */
  export const inboundSchema = BoundedRequest$inboundSchema;
  /** @deprecated use `BoundedRequest$outboundSchema` instead. */
  export const outboundSchema = BoundedRequest$outboundSchema;
  /** @deprecated use `BoundedRequest$Outbound` instead. */
  export type Outbound = BoundedRequest$Outbound;
}