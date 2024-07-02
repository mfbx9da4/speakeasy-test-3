# GithubConfigureMintlifyRepoRequest

A request to configure a GitHub repository for mintlify


## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `org`                        | *string*                     | :heavy_check_mark:           | The GitHub organization name |
| `repo`                       | *string*                     | :heavy_check_mark:           | The GitHub repository name   |
| `input`                      | *string*                     | :heavy_check_mark:           | The input OpenAPI document   |
| `overlays`                   | *string*[]                   | :heavy_check_mark:           | The overlays to apply        |