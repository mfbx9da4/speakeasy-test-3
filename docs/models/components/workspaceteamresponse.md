# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "petstore/models/components";

let value: WorkspaceTeamResponse = {
  users: [
    {
      id: "<id>",
      email: "Elvera.Mohr@yahoo.com",
      emailVerified: false,
      displayName: "Dovie_Tremblay",
      confirmed: false,
      whitelisted: false,
      admin: false,
      createdAt: new Date("2025-11-05T07:44:31.869Z"),
      updatedAt: new Date("2024-01-02T05:13:39.423Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `users`                                                          | [components.User](../../models/components/user.md)[]             | :heavy_check_mark:                                               | N/A                                                              |
| `ssoMetadata`                                                    | [components.SSOMetadata](../../models/components/ssometadata.md) | :heavy_minus_sign:                                               | SSO metadata for a workspace                                     |