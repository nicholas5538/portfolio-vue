import js from "@eslint/js";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import eslintConfigPrettier from "eslint-config-prettier";

export default createConfigForNuxt({
  features: { stylistic: true },
})
  .append(eslintConfigPrettier, {
    rules: {
      "vue/multi-word-component-names": "warn",
    },
    ignores: ["src/data/types/", ".husky/install.ts"],
  })
  .prepend(
    {
      files: ["**/*.js"],
      rules: js.configs.recommended.rules,
    },
    {
      rules: {
        "no-unused-vars": "error",
        "no-undef": "error",
        "default-case": "error",
        eqeqeq: "error",
        quotes: ["error", "double", { avoidEscape: true }],
      },
    }
  );
