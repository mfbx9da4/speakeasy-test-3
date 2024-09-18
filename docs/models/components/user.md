# User

## Example Usage

```typescript
import { User } from "petstore/models/components";

let value: User = {
  id: "<id>",
  email: "Aiden.Hane@gmail.com",
  emailVerified: false,
  displayName: "Leora.Fadel",
  confirmed: false,
  whitelisted: false,
  lastLoginAt: new Date("2024-10-31T08:20:57.740Z"),
  admin: false,
  createdAt: new Date("2024-09-16T05:57:00.689Z"),
  updatedAt: new Date("2024-01-18T06:36:04.013Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique identifier for the user.                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address of the user.                                                                    |
| `emailVerified`                                                                               | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the email address has been verified.                                        |
| `githubHandle`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | GitHub handle of the user.                                                                    |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name of the user.                                                                     |
| `photoUrl`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | URL of the user's photo.                                                                      |
| `defaultWorkspaceId`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Identifier of the default workspace.                                                          |
| `confirmed`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been confirmed.                                                |
| `whitelisted`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user has been whitelisted.                                              |
| `lastLoginAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the last login.                                                                  |
| `admin`                                                                                       | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Indicates whether the user is an admin.                                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's creation.                                                             |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Timestamp of the user's last update.                                                          |