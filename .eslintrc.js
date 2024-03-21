module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["import"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-restricted-imports": ["error", { patterns: ["..*"] }],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      { extensions: ["js", "jsx", "ts", "tsx"] },
    ],
  },
};
