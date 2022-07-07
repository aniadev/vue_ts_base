module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  parser: "vue-eslint-parser",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/no-multiple-template-root": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: false,
        parser: "flow",
      },
      {
        usePrettierrc: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
}
