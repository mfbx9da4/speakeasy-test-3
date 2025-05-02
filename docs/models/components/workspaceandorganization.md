# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { AccountType, WorkspaceAndOrganization } from "petstore/models/components";

let value: WorkspaceAndOrganization = {
  workspace: {
    createdAt: new Date("2025-01-21T05:48:42.363Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2023-06-23T09:04:56.583Z"),
    verified: false,
  },
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    accountType: AccountType.Free,
    telemetryDisabled: false,
    createdAt: new Date("2025-08-27T07:37:11.693Z"),
    updatedAt: new Date("2023-04-29T03:38:38.048Z"),
    ssoActivated: false,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.Workspace](../../models/components/workspace.md)       | :heavy_check_mark:                                                 | A speakeasy workspace                                              |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | A speakeasy organization                                           |