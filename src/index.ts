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
        // Display & positioning
        "display",
        "visibility",
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "float",
        "clear",
        // Dimensions
        "width",
        "height",
        "min-width",
        "min-height",
        "max-width",
        "max-height",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        // Box model
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-radius",
        "box-sizing",
        "overflow",
        "overflow-x",
        "overflow-y"
      ],
      {
        "unspecified": "bottomAlphabetical"
      }
    ],
  },
  customSyntax: "postcss-scss",
};

export = stylelintConfig;
