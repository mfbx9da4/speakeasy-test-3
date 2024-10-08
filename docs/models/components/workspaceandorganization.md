# WorkspaceAndOrganization

A workspace and organization

## Example Usage

```typescript
import { AccountType, WorkspaceAndOrganization } from "petstore/models/components";

let value: WorkspaceAndOrganization = {
  workspace: {
    createdAt: new Date("2023-08-17T08:28:49.436Z"),
    id: "<id>",
    name: "<value>",
    organizationId: "<id>",
    slug: "<value>",
    telemetryDisabled: false,
    updatedAt: new Date("2024-10-08T22:38:34.116Z"),
    verified: false,
  },
  organization: {
    id: "<id>",
    name: "<value>",
    slug: "<value>",
    accountType: AccountType.Enterprise,
    telemetryDisabled: false,
    createdAt: new Date("2024-11-27T05:48:20.651Z"),
    updatedAt: new Date("2024-10-05T01:58:01.397Z"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `workspace`                                                        | [components.Workspace](../../models/components/workspace.md)       | :heavy_check_mark:                                                 | A speakeasy workspace                                              |
| `organization`                                                     | [components.Organization](../../models/components/organization.md) | :heavy_check_mark:                                                 | A speakeasy organization                                           |