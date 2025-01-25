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
  filenames.map((filename) => `prettier --write ${filename} --ignore-unknown`);

export default {
  "*.{mjs,js,ts,vue}": [buildPrettierWriteCommand, buildEslintCommand],
  "*.{css,md,yml}": [buildPrettierWriteCommand],
};
