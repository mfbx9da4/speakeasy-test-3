# WorkspaceTeamResponse

Workspace team response

## Example Usage

```typescript
import { WorkspaceTeamResponse } from "petstore/models/components";

let value: WorkspaceTeamResponse = {
  users: [
    {
      id: "<id>",
      email: "Jean_Kassulke52@gmail.com",
      emailVerified: false,
      displayName: "Sofia_Koepp",
      confirmed: true,
      whitelisted: false,
      admin: false,
      createdAt: new Date("2023-02-06T14:06:48.353Z"),
      updatedAt: new Date("2025-09-27T23:13:03.367Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `users`                                                          | [components.User](../../models/components/user.md)[]             | :heavy_check_mark:                                               | N/A                                                              |
| `ssoMetadata`                                                    | [components.SSOMetadata](../../models/components/ssometadata.md) | :heavy_minus_sign:                                               | SSO metadata for a workspace                                     |