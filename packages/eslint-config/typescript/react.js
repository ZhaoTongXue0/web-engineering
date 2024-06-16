import jsConfig from "../react.js"
import typescriptConfig from "../rules/typescript.js"
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  ...jsConfig,
  typescriptConfig,
)
