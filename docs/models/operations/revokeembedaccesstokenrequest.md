# RevokeEmbedAccessTokenRequest

## Example Usage

```typescript
import { RevokeEmbedAccessTokenRequest } from "petstore/models/operations";

let value: RevokeEmbedAccessTokenRequest = {
  tokenID: "<id>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `tokenID`                           | *string*                            | :heavy_check_mark:                  | The ID of the EmbedToken to revoke. |