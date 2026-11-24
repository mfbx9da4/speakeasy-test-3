# GithubSetupStateResponse

The state of a particular SDK targets github setup

## Example Usage

```typescript
import { GithubSetupStateResponse } from "petstore/models/components";

let value: GithubSetupStateResponse = {
  appInstalled: true,
  actions: {
    generationActionConfigured: false,
    publishActionConfigured: true,
  },
  secrets: {
    apiKeyConfigured: true,
    publishingSecretsConfigured: false,
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `appInstalled`                                           | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `actions`                                                | [components.Actions](../../models/components/actions.md) | :heavy_check_mark:                                       | N/A                                                      |
| `secrets`                                                | [components.Secrets](../../models/components/secrets.md) | :heavy_check_mark:                                       | N/A                                                      |