<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "petstore";

const sdk = new SDK();

async function run() {
    const result = await sdk.pets.listPets(21453);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->