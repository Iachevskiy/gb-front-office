export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-idiomatic-order",
    "stylelint-config-standard-vue"
  ],
  plugins: ["stylelint-scss"],

  rules: {
    "selector-class-pattern": null,
    "at-rule-no-unknown"    : null,
    "order/order"           : [
      "custom-properties",
      "declarations"
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["deep"] }
    ],
    "declaration-block-no-redundant-longhand-properties": [
      true,
      {
        ignoreShorthands: [
          "flex",
          "grid-template"
        ]
      }
    ],
    "declaration-empty-line-before" : "never",
    "length-zero-no-unit"           : true,
    "at-rule-property-required-list": {
      "at-rule-name": [
        "array",
        "of",
        "properties"
      ]
    },
    "no-descending-specificity"            : null,
    "scss/at-rule-no-unknown"              : null,
    "property-no-unknown"                  : null,
    "declaration-property-value-no-unknown": null
  }
};
