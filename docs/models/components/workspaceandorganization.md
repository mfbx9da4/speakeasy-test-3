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
    verified: true,
  },
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    accountType: AccountType.Enterprise,
    telemetryDisabled: true,
    createdAt: new Date("2025-10-08T15:14:40.826Z"),
    updatedAt: new Date("2024-03-05T12:16:59.020Z"),
    ssoActivated: true,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.Workspace](../../models/components/workspace.md)       | :heavy_check_mark:                                                 | A speakeasy workspace                                              |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | A speakeasy organization                                           |