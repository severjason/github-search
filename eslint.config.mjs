import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
  { files: ['**/*.{js,jsx,mjs,ts,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  js.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    plugins: {
      '@tanstack/query': pluginQuery,
      react,
      reactHooks,
    },
  },
  {
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
      camelcase: 'off',
      'linebreak-style': 0,
      'import/no-anonymous-default-export': 0,
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'react/jsx-key': 'error',

      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': 'off',
      'max-len': ['error', { code: 120, ignorePattern: '^import .* | d=' }],
      'react/display-name': 'off',
      'no-console': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/indent': 0,
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
  },
  {
    ignores: ['node_modules'],
  },
  eslintPluginPrettierRecommended,
]);
