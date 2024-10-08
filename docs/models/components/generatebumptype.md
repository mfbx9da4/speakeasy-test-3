# GenerateBumpType

Bump type of the lock file (calculated semver delta, custom change (manual release), or prerelease/graduate)

## Example Usage

```typescript
import { GenerateBumpType } from "petstore/models/components";

let value: GenerateBumpType = GenerateBumpType.Major;
```

## Values

| Name         | Value        |
| ------------ | ------------ |
| `Major`      | major        |
| `Minor`      | minor        |
| `Patch`      | patch        |
| `Custom`     | custom       |
| `Graduate`   | graduate     |
| `Prerelease` | prerelease   |
| `None`       | none         |