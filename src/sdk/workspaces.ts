/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesCreate } from "../funcs/workspacesCreate.js";
import { workspacesCreateToken } from "../funcs/workspacesCreateToken.js";
import { workspacesDeleteToken } from "../funcs/workspacesDeleteToken.js";
import { workspacesGet } from "../funcs/workspacesGet.js";
import { workspacesGetAll } from "../funcs/workspacesGetAll.js";
import { workspacesGetByID } from "../funcs/workspacesGetByID.js";
import { workspacesGetFeatureFlags } from "../funcs/workspacesGetFeatureFlags.js";
import { workspacesGetSettings } from "../funcs/workspacesGetSettings.js";
import { workspacesGetTeam } from "../funcs/workspacesGetTeam.js";
import { workspacesGetTokens } from "../funcs/workspacesGetTokens.js";
import { workspacesGrantAccess } from "../funcs/workspacesGrantAccess.js";
import { workspacesRevokeAccess } from "../funcs/workspacesRevokeAccess.js";
import { workspacesUpdate } from "../funcs/workspacesUpdate.js";
import { workspacesUpdateSettings } from "../funcs/workspacesUpdateSettings.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Workspaces extends ClientSDK {
  /**
   * Get workspaces for a user
   *
   * @remarks
   * Returns a list of workspaces a user has access too
   */
  async getAll(
    options?: RequestOptions,
  ): Promise<operations.GetWorkspacesResponse> {
    return unwrapAsync(workspacesGetAll(
      this,
      options,
    ));
  }

  /**
   * Get workspace by context
   *
   * @remarks
   * Get information about a particular workspace by context.
   */
  async get(
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceByContextResponse> {
    return unwrapAsync(workspacesGet(
      this,
      options,
    ));
  }

  /**
   * Create a workspace
   *
   * @remarks
   * Creates a workspace
   */
  async create(
    request: components.Workspace,
    options?: RequestOptions,
  ): Promise<operations.CreateWorkspaceResponse> {
    return unwrapAsync(workspacesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get workspace
   *
   * @remarks
   * Get information about a particular workspace.
   */
  async getByID(
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceResponse> {
    return unwrapAsync(workspacesGetByID(
      this,
      workspaceId,
      options,
    ));
  }

  /**
   * Update workspace details
   *
   * @remarks
   * Update information about a particular workspace.
   */
  async update(
    workspace: components.Workspace,
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.UpdateWorkspaceDetailsResponse> {
    return unwrapAsync(workspacesUpdate(
      this,
      workspace,
      workspaceId,
      options,
    ));
  }

  /**
   * Get workspace settings
   *
   * @remarks
   * Get settings about a particular workspace.
   */
  async getSettings(
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceSettingsResponse> {
    return unwrapAsync(workspacesGetSettings(
      this,
      workspaceId,
      options,
    ));
  }

  /**
   * Update workspace settings
   *
   * @remarks
   * Update settings about a particular workspace.
   */
  async updateSettings(
    workspaceSettings: components.WorkspaceSettings,
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.UpdateWorkspaceSettingsResponse> {
    return unwrapAsync(workspacesUpdateSettings(
      this,
      workspaceSettings,
      workspaceId,
      options,
    ));
  }

  /**
   * Get team members for a particular workspace
   */
  async getTeam(
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceTeamResponse> {
    return unwrapAsync(workspacesGetTeam(
      this,
      workspaceId,
      options,
    ));
  }

  /**
   * Grant a user access to a particular workspace
   */
  async grantAccess(
    workspaceId: string,
    email: string,
    options?: RequestOptions,
  ): Promise<operations.GrantUserAccessToWorkspaceResponse> {
    return unwrapAsync(workspacesGrantAccess(
      this,
      workspaceId,
      email,
      options,
    ));
  }

  /**
   * Revoke a user's access to a particular workspace
   */
  async revokeAccess(
    workspaceId: string,
    userId: string,
    options?: RequestOptions,
  ): Promise<operations.RevokeUserAccessToWorkspaceResponse> {
    return unwrapAsync(workspacesRevokeAccess(
      this,
      workspaceId,
      userId,
      options,
    ));
  }

  /**
   * Get tokens for a particular workspace
   */
  async getTokens(
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceTokensResponse> {
    return unwrapAsync(workspacesGetTokens(
      this,
      workspaceId,
      options,
    ));
  }

  /**
   * Create a token for a particular workspace
   */
  async createToken(
    workspaceToken: components.WorkspaceToken,
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.CreateWorkspaceTokenResponse> {
    return unwrapAsync(workspacesCreateToken(
      this,
      workspaceToken,
      workspaceId,
      options,
    ));
  }

  /**
   * Delete a token for a particular workspace
   */
  async deleteToken(
    workspaceId: string,
    tokenID: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteWorkspaceTokenResponse> {
    return unwrapAsync(workspacesDeleteToken(
      this,
      workspaceId,
      tokenID,
      options,
    ));
  }

  /**
   * Get workspace feature flags
   */
  async getFeatureFlags(
    workspaceId: string,
    options?: RequestOptions,
  ): Promise<operations.GetWorkspaceFeatureFlagsResponse> {
    return unwrapAsync(workspacesGetFeatureFlags(
      this,
      workspaceId,
      options,
    ));
  }
}