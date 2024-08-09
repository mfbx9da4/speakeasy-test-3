# GithubConfigureMintlifyRepoRequest

A request to configure a GitHub repository for mintlify


## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `org`                                    | *string*                                 | :heavy_check_mark:                       | The GitHub organization name             |
| `repo`                                   | *string*                                 | :heavy_check_mark:                       | The GitHub repository name               |
| `subdirectory`                           | *string*                                 | :heavy_minus_sign:                       | The subdirectory (location of mint.json) |
| `input`                                  | *string*                                 | :heavy_check_mark:                       | The input OpenAPI document               |
| `overlays`                               | *string*[]                               | :heavy_check_mark:                       | The overlays to apply                    |