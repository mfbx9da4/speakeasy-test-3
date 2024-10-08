/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Annotations
 */
export type Annotations = {
  /**
   * The time the image was created
   */
  orgOpencontainersImageCreated?: string | undefined;
  /**
   * The authors of the image
   */
  orgOpencontainersImageAuthors?: string | undefined;
  /**
   * The URL of the image
   */
  orgOpencontainersImageUrl?: string | undefined;
  /**
   * The documentation URL of the image
   */
  orgOpencontainersImageDocumentation?: string | undefined;
  /**
   * The URL to get source code for building the image
   */
  orgOpencontainersImageSource?: string | undefined;
  /**
   * The version of the packaged software
   */
  orgOpencontainersImageVersion?: string | undefined;
  /**
   * Source control revision identifier
   */
  orgOpencontainersImageRevision?: string | undefined;
  /**
   * Name of the distributing entity, organization or individual.
   */
  orgOpencontainersImageVendor?: string | undefined;
  orgOpencontainersImageLicenses?: string | undefined;
  /**
   * Name of the reference for a target
   */
  orgOpencontainersImageRefName?: string | undefined;
  /**
   * Human-readable title of the image
   */
  orgOpencontainersImageTitle?: string | undefined;
  /**
   * Human-readable description of the software packaged in the image
   */
  orgOpencontainersImageDescription?: string | undefined;
};

/** @internal */
export const Annotations$inboundSchema: z.ZodType<
  Annotations,
  z.ZodTypeDef,
  unknown
> = z.object({
  "org.opencontainers.image.created": z.string().optional(),
  "org.opencontainers.image.authors": z.string().optional(),
  "org.opencontainers.image.url": z.string().optional(),
  "org.opencontainers.image.documentation": z.string().optional(),
  "org.opencontainers.image.source": z.string().optional(),
  "org.opencontainers.image.version": z.string().optional(),
  "org.opencontainers.image.revision": z.string().optional(),
  "org.opencontainers.image.vendor": z.string().optional(),
  "org.opencontainers.image.licenses": z.string().optional(),
  "org.opencontainers.image.ref.name": z.string().optional(),
  "org.opencontainers.image.title": z.string().optional(),
  "org.opencontainers.image.description": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "org.opencontainers.image.created": "orgOpencontainersImageCreated",
    "org.opencontainers.image.authors": "orgOpencontainersImageAuthors",
    "org.opencontainers.image.url": "orgOpencontainersImageUrl",
    "org.opencontainers.image.documentation":
      "orgOpencontainersImageDocumentation",
    "org.opencontainers.image.source": "orgOpencontainersImageSource",
    "org.opencontainers.image.version": "orgOpencontainersImageVersion",
    "org.opencontainers.image.revision": "orgOpencontainersImageRevision",
    "org.opencontainers.image.vendor": "orgOpencontainersImageVendor",
    "org.opencontainers.image.licenses": "orgOpencontainersImageLicenses",
    "org.opencontainers.image.ref.name": "orgOpencontainersImageRefName",
    "org.opencontainers.image.title": "orgOpencontainersImageTitle",
    "org.opencontainers.image.description": "orgOpencontainersImageDescription",
  });
});

/** @internal */
export type Annotations$Outbound = {
  "org.opencontainers.image.created"?: string | undefined;
  "org.opencontainers.image.authors"?: string | undefined;
  "org.opencontainers.image.url"?: string | undefined;
  "org.opencontainers.image.documentation"?: string | undefined;
  "org.opencontainers.image.source"?: string | undefined;
  "org.opencontainers.image.version"?: string | undefined;
  "org.opencontainers.image.revision"?: string | undefined;
  "org.opencontainers.image.vendor"?: string | undefined;
  "org.opencontainers.image.licenses"?: string | undefined;
  "org.opencontainers.image.ref.name"?: string | undefined;
  "org.opencontainers.image.title"?: string | undefined;
  "org.opencontainers.image.description"?: string | undefined;
};

/** @internal */
export const Annotations$outboundSchema: z.ZodType<
  Annotations$Outbound,
  z.ZodTypeDef,
  Annotations
> = z.object({
  orgOpencontainersImageCreated: z.string().optional(),
  orgOpencontainersImageAuthors: z.string().optional(),
  orgOpencontainersImageUrl: z.string().optional(),
  orgOpencontainersImageDocumentation: z.string().optional(),
  orgOpencontainersImageSource: z.string().optional(),
  orgOpencontainersImageVersion: z.string().optional(),
  orgOpencontainersImageRevision: z.string().optional(),
  orgOpencontainersImageVendor: z.string().optional(),
  orgOpencontainersImageLicenses: z.string().optional(),
  orgOpencontainersImageRefName: z.string().optional(),
  orgOpencontainersImageTitle: z.string().optional(),
  orgOpencontainersImageDescription: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    orgOpencontainersImageCreated: "org.opencontainers.image.created",
    orgOpencontainersImageAuthors: "org.opencontainers.image.authors",
    orgOpencontainersImageUrl: "org.opencontainers.image.url",
    orgOpencontainersImageDocumentation:
      "org.opencontainers.image.documentation",
    orgOpencontainersImageSource: "org.opencontainers.image.source",
    orgOpencontainersImageVersion: "org.opencontainers.image.version",
    orgOpencontainersImageRevision: "org.opencontainers.image.revision",
    orgOpencontainersImageVendor: "org.opencontainers.image.vendor",
    orgOpencontainersImageLicenses: "org.opencontainers.image.licenses",
    orgOpencontainersImageRefName: "org.opencontainers.image.ref.name",
    orgOpencontainersImageTitle: "org.opencontainers.image.title",
    orgOpencontainersImageDescription: "org.opencontainers.image.description",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Annotations$ {
  /** @deprecated use `Annotations$inboundSchema` instead. */
  export const inboundSchema = Annotations$inboundSchema;
  /** @deprecated use `Annotations$outboundSchema` instead. */
  export const outboundSchema = Annotations$outboundSchema;
  /** @deprecated use `Annotations$Outbound` instead. */
  export type Outbound = Annotations$Outbound;
}
