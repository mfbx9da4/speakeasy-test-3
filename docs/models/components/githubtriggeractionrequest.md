# GithubTriggerActionRequest

A request to trigger an action on a GitHub target


## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `org`                                                  | *string*                                               | :heavy_check_mark:                                     | The GitHub organization name                           |
| `repoName`                                             | *string*                                               | :heavy_check_mark:                                     | The GitHub repository name                             |
| `targetName`                                           | *string*                                               | :heavy_minus_sign:                                     | The target name for the action                         |
| `genLockId`                                            | *string*                                               | :heavy_check_mark:                                     | The generation lock ID                                 |
| `setVersion`                                           | *string*                                               | :heavy_minus_sign:                                     | A version to override the SDK too in workflow dispatch |