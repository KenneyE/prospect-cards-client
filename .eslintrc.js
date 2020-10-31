module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "standard-react",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    process: true,
    fail: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: ["react", "prettier", "graphql", "@typescript-eslint"],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    "no-console": [
      "warn",
      {
        allow: ["error"],
      },
    ],
    "import/no-unresolved": 0,
    "comma-dangle": ["error", "always-multiline"],
    "jsx-quotes": ["error", "prefer-single"],
    "no-multiple-empty-lines": "error",
    "space-before-function-paren": ["error", "never"],
    "react/jsx-curly-spacing": ["error", "always"],
    "react/no-unused-prop-types": 0,
    "operator-linebreak": ["error", "after"],
    "import/namespace": [
      "error",
      {
        allowComputed: true,
      },
    ],
    "react/prop-types": 0,
  },
};
