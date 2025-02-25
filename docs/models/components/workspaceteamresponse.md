# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "petstore/models/components";

let value: WorkspaceTeamResponse = {
  users: [
    {
      id: "<id>",
      email: "Danika31@yahoo.com",
      emailVerified: false,
      displayName: "Gayle.Bailey",
      confirmed: false,
      whitelisted: false,
      admin: false,
      createdAt: new Date("2024-08-11T02:10:46.448Z"),
      updatedAt: new Date("2025-09-09T18:02:30.092Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `users`                                                          | [components.User](../../models/components/user.md)[]             | :heavy_check_mark:                                               | N/A                                                              |
| `ssoMetadata`                                                    | [components.SSOMetadata](../../models/components/ssometadata.md) | :heavy_minus_sign:                                               | SSO metadata for a workspace                                     |