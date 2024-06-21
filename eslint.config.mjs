import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  {rules: {
    "no-unused-vars": "warn",
    "no-console": "error",
    "no-duplicate-imports": "warn",
    "no-dupe-else-if": "warn", 
    "no-duplicate-case": "warn", 
    "no-dupe-keys": "warn",
    "no-var":"error",
    "no-unused-expressions":"warn",
    "no-redeclare": "warn",
    "no-param-reassign": "warn",
    // Add more custom rules as needed

  }}
];