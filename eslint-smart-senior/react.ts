import { Linter } from "eslint";

const react: Linter.BaseConfig = {
  env: {
    browser: true,
  },
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};

export default react;
