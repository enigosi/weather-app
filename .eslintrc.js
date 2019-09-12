module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended",
      "prettier/@typescript-eslint",
      "prettier/react"
    ],
    plugins: ["react-hooks"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    env: {
      jest: true,
      browser: true
    }
  };
  