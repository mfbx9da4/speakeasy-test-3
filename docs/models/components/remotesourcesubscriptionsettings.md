# RemoteSourceSubscriptionSettings

## Example Usage

```typescript
import { RemoteSourceSubscriptionSettings } from "petstore/models/components";

let value: RemoteSourceSubscriptionSettings = {
  baseSpecNamespaces: [],
  overlayNamespaces: [
    "<value 1>",
    "<value 2>",
  ],
  outputNamespace: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `baseSpecNamespaces` | *string*[]           | :heavy_check_mark:   | N/A                  |
| `overlayNamespaces`  | *string*[]           | :heavy_check_mark:   | N/A                  |
| `ignoredNamespaces`  | *string*[]           | :heavy_minus_sign:   | N/A                  |
| `outputNamespace`    | *string*             | :heavy_check_mark:   | N/A                  |