# ApiInput

An Api is representation of a API (a collection of API Endpoints) within the Speakeasy Platform.

## Example Usage

```typescript
import { ApiInput } from "petstore/models/components";

let value: ApiInput = {
  apiId: "<id>",
  description:
    "hippodrome league given only trash within ack incidentally challenge vol",
  versionId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `apiId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | The ID of this Api. This is a human-readable name (subject to change).                   |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | A detailed description of the Api.                                                       |
| `metaData`                                                                               | Record<string, *string*[]>                                                               | :heavy_minus_sign:                                                                       | A set of values associated with a meta_data key. This field is only set on get requests. |
| `versionId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The version ID of this Api. This is semantic version identifier.                         |