# SuggestOptsOld

## Example Usage

```typescript
import { SuggestionType, SuggestOptsOld } from "petstore/models/components";

let value: SuggestOptsOld = {
  suggestionType: SuggestionType.DiagnosticsOnly,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `suggestionType`                                                       | [components.SuggestionType](../../models/components/suggestiontype.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `diagnostics`                                                          | [components.Diagnostic](../../models/components/diagnostic.md)[]       | :heavy_minus_sign:                                                     | N/A                                                                    |