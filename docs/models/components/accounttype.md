# AccountType

## Example Usage

```typescript
import { AccountType } from "petstore/models/components";

let value: AccountType = AccountType.Business;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Free`                 | free                   |
| `ScaleUp`              | scale-up               |
| `Business`             | business               |
| `Enterprise`           | enterprise             |
| -                      | `Unrecognized<string>` |