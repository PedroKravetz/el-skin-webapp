import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  {
    ...pluginReact.configs.flat.recommended,

    files: ["**/*.{jsx,tsx}"],

    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },
];
