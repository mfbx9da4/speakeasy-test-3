<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "petstore";

const sdk = new SDK({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await sdk.apis.getApis();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->