# WorkspaceFeatureFlag

enum value workspace feature flag

## Example Usage

```typescript
import { WorkspaceFeatureFlag } from "petstore/models/components";

let value: WorkspaceFeatureFlag = WorkspaceFeatureFlag.Webhooks;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SchemaRegistry`       | schema_registry        |
| `ChangesReport`        | changes_report         |
| `SkipSchemaRegistry`   | skip_schema_registry   |
| `Webhooks`             | webhooks               |
| -                      | `Unrecognized<string>` |