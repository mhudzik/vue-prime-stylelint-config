import { Config } from 'stylelint';

const stylelintConfig: Config = {
  plugins: [
    "stylelint-order"
  ],
  rules: {
    // Indentation
    "indentation": 2,
    "no-missing-end-of-source-newline": true,

    // Quotation marks
    "string-quotes": "single",

    // Colors
    "color-hex-case": "lower",
    "color-named": "never",

    // CSS Functions
    "function-comma-space-after": "always",
    "function-max-empty-lines": 0, 
    "function-parentheses-space-inside": "never",

    // Blocks
    "block-opening-brace-space-before": "always",
    "block-closing-brace-newline-after": "always",

    // Classes/IDs
    "selector-class-pattern": "^[a-z0-9\\-]+$",
    "selector-id-pattern": "^[a-zA-Z0-9\\-]+$",

    // CSS Properties
    "property-no-unknown": true,
    "property-case": "lower",

    // Others
    "max-nesting-depth": 4, 
    "no-duplicate-selectors": true,
  }
};

export default stylelintConfig;
