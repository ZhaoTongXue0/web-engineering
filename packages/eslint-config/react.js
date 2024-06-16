import jsConfig from "./index.js"
import reactConfigs from "./rules/react.js"

export default [
  ...jsConfig,
  reactConfigs,
  {
    languageOptions: {
      parserOptions: {
        babelOptions: {
          presets: ["@babel/preset-react"],
        }
      }
    }
  }
]
