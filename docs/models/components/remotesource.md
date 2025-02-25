# RemoteSource

Remote source configuration

## Example Usage

```typescript
import { RemoteSource } from "petstore/models/components";

let value: RemoteSource = {
  inputs: [
    {
      registryUrl: "https://cute-petal.info",
    },
  ],
  output: {
    registryUrl: "https://rubbery-diagram.com/",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `inputs`                                                                 | [components.RemoteDocument](../../models/components/remotedocument.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `overlays`                                                               | [components.RemoteDocument](../../models/components/remotedocument.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |
| `output`                                                                 | [components.RemoteDocument](../../models/components/remotedocument.md)   | :heavy_check_mark:                                                       | A document hosted in the registry                                        |