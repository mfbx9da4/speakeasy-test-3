/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataDeleteVersionMetadata } from "../funcs/metadataDeleteVersionMetadata.js";
import { metadataGetVersionMetadata } from "../funcs/metadataGetVersionMetadata.js";
import { metadataInsertVersionMetadata } from "../funcs/metadataInsertVersionMetadata.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Metadata extends ClientSDK {
  /**
   * Get all metadata for a particular apiID and versionID.
   */
  async getVersionMetadata(
    apiID: string,
    versionID: string,
    options?: RequestOptions,
  ): Promise<operations.GetVersionMetadataResponse> {
    return unwrapAsync(metadataGetVersionMetadata(
      this,
      apiID,
      versionID,
      options,
    ));
  }

  /**
   * Insert metadata for a particular apiID and versionID.
   */
  async insertVersionMetadata(
    apiID: string,
    versionID: string,
    versionMetadata: components.VersionMetadataInput,
    options?: RequestOptions,
  ): Promise<operations.InsertVersionMetadataResponse> {
    return unwrapAsync(metadataInsertVersionMetadata(
      this,
      apiID,
      versionID,
      versionMetadata,
      options,
    ));
  }

  /**
   * Delete metadata for a particular apiID and versionID.
   */
  async deleteVersionMetadata(
    apiID: string,
    versionID: string,
    metaKey: string,
    metaValue: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteVersionMetadataResponse> {
    return unwrapAsync(metadataDeleteVersionMetadata(
      this,
      apiID,
      versionID,
      metaKey,
      metaValue,
      options,
    ));
  }
}
