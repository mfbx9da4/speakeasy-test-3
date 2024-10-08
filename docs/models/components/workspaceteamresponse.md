# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "petstore/models/components";

let value: WorkspaceTeamResponse = {
  users: [
    {
      id: "<id>",
      email: "Chandler16@gmail.com",
      emailVerified: false,
      displayName: "Isabelle_Cronin44",
      confirmed: false,
      whitelisted: false,
      admin: false,
      createdAt: new Date("2024-02-03T07:45:59.605Z"),
      updatedAt: new Date("2022-09-29T03:34:36.716Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `users`                                                          | [components.User](../../models/components/user.md)[]             | :heavy_check_mark:                                               | N/A                                                              |
| `ssoMetadata`                                                    | [components.SSOMetadata](../../models/components/ssometadata.md) | :heavy_minus_sign:                                               | SSO metadata for a workspace                                     |