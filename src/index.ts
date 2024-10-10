import { Config } from 'stylelint';

const stylelintConfig: Config = {
  plugins: [
    "stylelint-order",
  ],
  rules: {
    // CSS Properties
    "property-no-unknown": true,

    // Selectors
    "selector-class-pattern": "^[a-z0-9\\-]+$",
    "selector-id-pattern": "^[a-zA-Z0-9\\-]+$",

    // Nesting
    "max-nesting-depth": 4,

    // Other
    "no-duplicate-selectors": true,

    // Order

    "order/properties-order": [
      [
        "display",
      ],
      {
        unspecified: "bottom",
      }
    ],
  }
};

export = stylelintConfig;
