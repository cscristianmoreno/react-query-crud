module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/typedef": [
      "error", {
        "arrowParameter": true,
        "propertyDeclaration": true,
        "variableDeclaration": true,
        "arrayDestructuring": true,
        "objectDestructuring": true,
        "parameter": true
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error", {
        "allowTypedFunctionExpressions": false,
        "allowHigherOrderFunctions": false,
        "allowDirectConstAssertionInArrowFunctions": false
      }
    ],
    "semi": [
      "error"
    ],
    "quotes": [
      "error"
    ]
  },
}
