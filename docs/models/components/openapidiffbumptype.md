# OpenapiDiffBumpType

Bump type of the lock file (calculated semver delta, or a custom change (manual release))

## Example Usage

```typescript
import { OpenapiDiffBumpType } from "petstore/models/components";

let value: OpenapiDiffBumpType = OpenapiDiffBumpType.Major;
```

## Values

| Name    | Value   |
| ------- | ------- |
| `Major` | major   |
| `Minor` | minor   |
| `Patch` | patch   |
| `None`  | none    |