# WorkspaceFeatureFlagRequest

A request to add workspace feature flags

## Example Usage

```typescript
import { WorkspaceFeatureFlag, WorkspaceFeatureFlagRequest } from "petstore/models/components";

let value: WorkspaceFeatureFlagRequest = {
  featureFlags: [
    WorkspaceFeatureFlag.SchemaRegistry,
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `featureFlags`                                                                       | [components.WorkspaceFeatureFlag](../../models/components/workspacefeatureflag.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |