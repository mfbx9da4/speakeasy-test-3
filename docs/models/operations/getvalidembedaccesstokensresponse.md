# GetValidEmbedAccessTokensResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `embedTokens`                                                      | [components.EmbedToken](../../models/components/embedtoken.md)[]   | :heavy_minus_sign:                                                 | OK                                                                 |
| `error`                                                            | *errors.ErrorT*                                                    | :heavy_minus_sign:                                                 | Default error response                                             |