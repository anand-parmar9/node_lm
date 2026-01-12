export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      semi: "off",
      quotes: ["error", "single"],
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
