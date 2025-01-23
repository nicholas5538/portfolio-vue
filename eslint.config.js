import js from "@eslint/js";
import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";

export default createConfigForNuxt({})
  .append(
    [
      ...pluginVue.configs["flat/essential"],
      {
        rules: {
          "vue/multi-word-component-names": "off",
          "vue/no-unused-vars": "error",
          "vue/singleline-html-element-content-newline": "off",
        },
      },
    ],
    eslintConfigPrettier
  )
  .prepend(
    [
      {
        files: ["**/*.js"],
        rules: js.configs.recommended.rules,
      },
    ],
    [
      {
        rules: {
          "no-unused-vars": "error",
          "no-undef": "error",
          camelcase: "error",
          "default-case": "error",
          eqeqeq: "error",
          quotes: ["error", "double", { avoidEscape: true }],
        },
      },
    ]
  );
