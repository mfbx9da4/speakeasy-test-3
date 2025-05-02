# RevisionContentsMetadata

## Example Usage

```typescript
import { RevisionContentsMetadata, RevisionContentsMetadataType } from "petstore/models/components";

let value: RevisionContentsMetadata = {
  type: RevisionContentsMetadataType.OpenapiBundle,
  workspaceId: "<id>",
  namespace: "<value>",
  revisionDigest: "<value>",
  title: "<value>",
  description:
    "among jubilantly fireplace physical rebuild per definitive gracefully failing unfinished",
  version: "<value>",
  hash: "<value>",
  tags: [
    "<value>",
  ],
  operationIds: [
    "<value>",
  ],
  numOverlayActions: 955994,
  containsCodeSamples: false,
  createdAt: new Date("2023-05-08T09:51:35.576Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `type`                                                                                             | [components.RevisionContentsMetadataType](../../models/components/revisioncontentsmetadatatype.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The workspace ID                                                                                   |
| `namespace`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The fully qualified namespace                                                                      |
| `revisionDigest`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | The digest of the parent bundle                                                                    |
| `title`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS title                                                                                      |
| `description`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS description                                                                                |
| `version`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The OAS version                                                                                    |
| `hash`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The hash of the contents                                                                           |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The tags contained in the OAS -- NOT the OCI tags. Will be empty if the OAS is an overlay.         |
| `operationIds`                                                                                     | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | The operation IDs contained in the OAS. Will be empty if the OAS is an overlay.                    |
| `numOverlayActions`                                                                                | *number*                                                                                           | :heavy_check_mark:                                                                                 | The number of overlay actions in the OAS. Will be 0 if the OAS is not an overlay.                  |
| `containsCodeSamples`                                                                              | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | Whether the OAS contains code samples.                                                             |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |