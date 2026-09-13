# WorkspaceFeatureFlag

enum value workspace feature flag

## Example Usage

```typescript
import { WorkspaceFeatureFlag } from "petstore/models/components";

let value: WorkspaceFeatureFlag = WorkspaceFeatureFlag.SchemaRegistry;

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SchemaRegistry`       | schema_registry        |
| `ChangesReport`        | changes_report         |
| `SkipSchemaRegistry`   | skip_schema_registry   |
| `Webhooks`             | webhooks               |
| -                      | `Unrecognized<string>` |