/**
 * @filename: .lintstagedrc.js
 * @type {import('lint-staged').Configuration}
 */

const buildEslintCommand = (filenames) => {
  if (filenames.length <= 10) {
    return `eslint --fix ${filenames.join(" ")}`;
  }
  return "eslint --fix .";
};

const buildPrettierWriteCommand = (filenames) =>
  `prettier --write --ignore-unknown ${filenames.join(" ")}`;

export default {
  "*.{mjs,js,ts,vue}": [buildPrettierWriteCommand, buildEslintCommand],
  "*.{css,md,yml}": [buildPrettierWriteCommand],
};
