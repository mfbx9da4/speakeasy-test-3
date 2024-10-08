# GetManifestResponse

## Example Usage

```typescript
import { GetManifestResponse } from "petstore/models/operations";

let value: GetManifestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  manifest: {
    schemaVersion: 2,
    mediaType: "application/vnd.docker.distribution.manifest.v2+json",
    layers: [
      {
        digest:
          "sha256:5d20c808ce198565ff70b3ed23a991dd49afac45dece63474b27ce6ed036adc6",
        mediaType: "application/vnd.docker.image.rootfs.diff.tar.gzip",
        size: 2107098,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `manifest`                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [components.Manifest](../../models/components/manifest.md)                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                    | OK                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | {<br/>"config": {<br/>"digest": "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",<br/>"mediaType": "application/vnd.docker.container.image.v1+json",<br/>"size": 1512<br/>},<br/>"layers": [<br/>{<br/>"digest": "sha256:5d20c808ce198565ff70b3ed23a991dd49afac45dece63474b27ce6ed036adc6",<br/>"mediaType": "application/vnd.docker.image.rootfs.diff.tar.gzip",<br/>"size": 2107098<br/>}<br/>],<br/>"mediaType": "application/vnd.docker.distribution.manifest.v2+json",<br/>"schemaVersion": 2<br/>} |