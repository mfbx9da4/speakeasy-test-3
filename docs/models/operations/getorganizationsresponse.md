# GetOrganizationsResponse

## Example Usage

```typescript
import { GetOrganizationsResponse } from "petstore/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `httpMeta`                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)   | :heavy_check_mark:                                                   | N/A                                                                  |
| `organizations`                                                      | [components.Organization](../../models/components/organization.md)[] | :heavy_minus_sign:                                                   | OK                                                                   |
| `error`                                                              | *errors.ErrorT*                                                      | :heavy_minus_sign:                                                   | Default error response                                               |