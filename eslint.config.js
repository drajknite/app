import babelParser from '@babel/eslint-parser'; // Import the Babel parser
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintRecommendedReact from 'eslint-plugin-react/configs/recommended.js';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['node_modules/', 'dist/', 'build/'], // Ignore these directories
    languageOptions: {
      ecmaVersion: 2023, // Use the latest ECMAScript version
      sourceType: 'module',
      parser: babelParser, // Use Babel parser for JSX
      parserOptions: {
        requireConfigFile: false, // Allow parsing without a Babel config file
        babelOptions: {
          presets: ['@babel/preset-react'], // Enable React preset
        },
      },
      globals: {
        React: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      prettier: eslintPluginPrettier,
    },
    settings: {
      ...eslintRecommendedReact.settings,
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      ...eslintRecommendedReact.rules,
      'react/react-in-jsx-scope': 'off', // React 17+ does not require React in scope
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'prettier/prettier': 'error', // Prettier formatting issues as errors
    },
  },
];
