# BillingAddOn

## Example Usage

```typescript
import { BillingAddOn } from "petstore/models/components";

let value: BillingAddOn = BillingAddOn.CustomCodeRegions;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Webhooks`             | webhooks               |
| `SDKTesting`           | sdk_testing            |
| `CustomCodeRegions`    | custom_code_regions    |
| `SnippetAi`            | snippet_ai             |
| -                      | `Unrecognized<string>` |