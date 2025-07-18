import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // ✅ Add Jest globals
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    rules: {
      // Optional: add custom rules here
    },
    ignores: ["dist/**", "node_modules/**"],
    settings: {
      react: {
        version: "detect", // Fixes the React warning
      },
    },
  },
  // Optional: separate config for React files
  pluginReact.configs.flat.recommended,
]);
