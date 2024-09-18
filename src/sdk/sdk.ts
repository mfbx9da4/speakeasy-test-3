/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { ApiEndpoints } from "./apiendpoints.js";
import { Apis } from "./apis.js";
import { Artifacts } from "./artifacts.js";
import { Auth } from "./auth.js";
import { Embeds } from "./embeds.js";
import { Events } from "./events.js";
import { Github } from "./github.js";
import { Metadata } from "./metadata.js";
import { Organizations } from "./organizations.js";
import { Reports } from "./reports.js";
import { Requests } from "./requests.js";
import { Schemas } from "./schemas.js";
import { ShortURLs } from "./shorturls.js";
import { Suggest } from "./suggest.js";
import { Workspaces } from "./workspaces.js";

export class SDK extends ClientSDK {
  private _apis?: Apis;
  get apis(): Apis {
    return (this._apis ??= new Apis(this.options$));
  }

  private _apiEndpoints?: ApiEndpoints;
  get apiEndpoints(): ApiEndpoints {
    return (this._apiEndpoints ??= new ApiEndpoints(this.options$));
  }

  private _metadata?: Metadata;
  get metadata(): Metadata {
    return (this._metadata ??= new Metadata(this.options$));
  }

  private _schemas?: Schemas;
  get schemas(): Schemas {
    return (this._schemas ??= new Schemas(this.options$));
  }

  private _auth?: Auth;
  get auth(): Auth {
    return (this._auth ??= new Auth(this.options$));
  }

  private _requests?: Requests;
  get requests(): Requests {
    return (this._requests ??= new Requests(this.options$));
  }

  private _github?: Github;
  get github(): Github {
    return (this._github ??= new Github(this.options$));
  }

  private _organizations?: Organizations;
  get organizations(): Organizations {
    return (this._organizations ??= new Organizations(this.options$));
  }

  private _embeds?: Embeds;
  get embeds(): Embeds {
    return (this._embeds ??= new Embeds(this.options$));
  }

  private _workspaces?: Workspaces;
  get workspaces(): Workspaces {
    return (this._workspaces ??= new Workspaces(this.options$));
  }

  private _events?: Events;
  get events(): Events {
    return (this._events ??= new Events(this.options$));
  }

  private _artifacts?: Artifacts;
  get artifacts(): Artifacts {
    return (this._artifacts ??= new Artifacts(this.options$));
  }

  private _reports?: Reports;
  get reports(): Reports {
    return (this._reports ??= new Reports(this.options$));
  }

  private _suggest?: Suggest;
  get suggest(): Suggest {
    return (this._suggest ??= new Suggest(this.options$));
  }

  private _shortURLs?: ShortURLs;
  get shortURLs(): ShortURLs {
    return (this._shortURLs ??= new ShortURLs(this.options$));
  }
}
