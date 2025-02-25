# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { AccountType, WorkspaceAndOrganization } from "petstore/models/components";

let value: WorkspaceAndOrganization = {
  workspace: {
    createdAt: new Date("2025-10-20T21:33:54.006Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    updatedAt: new Date("2024-11-03T21:45:37.821Z"),
    verified: false,
  },
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    accountType: AccountType.Business,
    telemetryDisabled: false,
    createdAt: new Date("2024-10-08T12:59:31.265Z"),
    updatedAt: new Date("2025-03-11T05:07:47.512Z"),
    ssoActivated: false,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.Workspace](../../models/components/workspace.md)       | :heavy_check_mark:                                                 | A speakeasy workspace                                              |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | A speakeasy organization                                           |