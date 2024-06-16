import bestPractices from './rules/base/best-practices.js'
import possibleErrors from './rules/base/possible-errors.js'
import style from './rules/base/style.js'
import variables from './rules/base/variables.js';
import es6 from './rules/base/es6.js';
import strict from './rules/base/strict.js';
import imports from './rules/imports.js';
import babelParser from "@babel/eslint-parser";

export default [
  bestPractices,
  possibleErrors,
  style,
  variables,
  es6,
  strict,
  imports,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
          jsx: true,
        }
      }
    }
  }
]
