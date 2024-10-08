# GithubConfigureTargetRequest

A request to configure a GitHub target

## Example Usage

```typescript
import { GithubConfigureTargetRequest } from "petstore/models/components";

let value: GithubConfigureTargetRequest = {
  org: "<value>",
  repoName: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `org`                        | *string*                     | :heavy_check_mark:           | The GitHub organization name |
| `repoName`                   | *string*                     | :heavy_check_mark:           | The GitHub repository name   |