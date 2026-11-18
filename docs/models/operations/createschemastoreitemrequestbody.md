# CreateSchemaStoreItemRequestBody

## Example Usage

```typescript
import { CreateSchemaStoreItemRequestBody, Format } from "petstore/models/operations";

let value: CreateSchemaStoreItemRequestBody = {
  spec: "<value>",
  packageName: "<value>",
  sdkClassname: "<value>",
  format: Format.Yaml,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `spec`                                                         | *string*                                                       | :heavy_check_mark:                                             | The OpenAPI specification to store.                            |
| `packageName`                                                  | *string*                                                       | :heavy_check_mark:                                             | The package name to use in code snippets / quickstart.         |
| `sdkClassname`                                                 | *string*                                                       | :heavy_check_mark:                                             | The classname of the SDK to use in code snippets / quickstart. |
| `format`                                                       | [operations.Format](../../models/operations/format.md)         | :heavy_check_mark:                                             | The format of the OpenAPI specification.                       |