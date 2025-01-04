import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/indent": ["error", 4],
      "@typescript-eslint/no-trailing-spaces": "off",
      '@typescript-eslint/no-var-requires': 0,
      "@typescript-eslint/array-type": ["error", { "default": "generic" }],
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      '@typescript-eslint/quotes': 'off',
      "operator-linebreak": "off",
      "multiline-ternary": "off",
      "no-sequences": "off",
      "@typescript-eslint/member-delimiter-style": ["error", {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }]
    },
  },
)
