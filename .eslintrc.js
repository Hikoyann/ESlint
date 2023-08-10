module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: [],
  extends: ["plugin:react/recomended"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/prop-types": ["off"],
    "react/jsx-props-no-spreading": "off",
  },
};
