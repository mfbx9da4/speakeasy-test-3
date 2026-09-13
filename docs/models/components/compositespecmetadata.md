# CompositeSpecMetadata

## Example Usage

```typescript
import { CompositeSpecMetadata } from "petstore/models/components";

let value: CompositeSpecMetadata = {
  subscriptionId: "<id>",
  subscriptionSettings: {
    baseSpecNamespaces: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    overlayNamespaces: [
      "<value 1>",
      "<value 2>",
    ],
    outputNamespace: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                                                                              | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The subscription ID for the remote source subscription, if applicable. This indicates that the namespace is created by a remote source and thus is composite. |
| `subscriptionSettings`                                                                                                                                        | [components.RemoteSourceSubscriptionSettings](../../models/components/remotesourcesubscriptionsettings.md)                                                    | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |