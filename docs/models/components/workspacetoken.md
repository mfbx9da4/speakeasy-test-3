# WorkspaceToken

A workspace token

## Example Usage

```typescript
import { WorkspaceToken } from "petstore/models/components";

let value: WorkspaceToken = {
  id: "<id>",
  name: "<value>",
  alg: "<value>",
  key: "<key>",
  createdAt: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `workspaceId`      | *string*           | :heavy_minus_sign: | N/A                |
| `alg`              | *string*           | :heavy_check_mark: | N/A                |
| `key`              | *string*           | :heavy_check_mark: | N/A                |
| `lastUsed`         | *string*           | :heavy_minus_sign: | N/A                |
| `createdAt`        | *string*           | :heavy_check_mark: | N/A                |
| `createdBy`        | *string*           | :heavy_minus_sign: | N/A                |
| `email`            | *string*           | :heavy_minus_sign: | N/A                |