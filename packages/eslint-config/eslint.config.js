import myConfig from './index.js'
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...myConfig,
];
