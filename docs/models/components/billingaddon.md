# BillingAddOn

## Example Usage

```typescript
import { BillingAddOn } from "petstore/models/components";

let value: BillingAddOn = BillingAddOn.CustomCodeRegions;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Webhooks`             | webhooks               |
| `SDKTesting`           | sdk_testing            |
| `CustomCodeRegions`    | custom_code_regions    |
| `SnippetAi`            | snippet_ai             |
| -                      | `Unrecognized<string>` |