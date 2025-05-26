const reactRefreshPlugin = require('eslint-plugin-react-refresh');
const prettierPlugin = require('eslint-plugin-prettier');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const globals = require('globals');

const cleanGlobals = (obj) => {
  if (!obj || typeof obj !== 'object') return {};
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => k && v !== undefined && v !== null)
      .map(([k, v]) => [k.trim(), v]),
  );
};

const config = [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...cleanGlobals(globals.browser),
        ...cleanGlobals(globals.es6),
      },
    },
    plugins: {
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          parser: 'typescript',
          semi: true,
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          endOfLine: 'crlf',
          printWidth: 80,
          arrowParens: 'always',
          trailingComma: 'all',
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: 'css',
          proseWrap: 'always',
          insertPragma: false,
          requirePragma: false,
          embeddedLanguageFormatting: 'auto',
          quoteProps: 'as-needed',
          jsxSingleQuote: true,
        },
      ],
      'array-callback-return': 'off',
      'import/no-anonymous-default-export': 'off',
      'linebreak-style': ['off', 'windows'],
      'comma-dangle': ['off', 'never'],
      // "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx", ".tsx"] }],
      'react/forbid-prop-types': 'off',
      // "id-length": [
      //   "warn",
      //   {
      //     "min": 1,
      //     "max": 80
      //   }
      // ],
      'max-len': [
        'warn',
        {
          code: 90,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreRegExpLiterals: true,
          ignorePattern: '^import | ^export',
          ignoreTemplateLiterals: true,
          ignoreStrings: true,
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-cycle': 'off',
      'object-curly-newline': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/jsx-no-target-blank': 'off',
      'function-paren-newline': 'off',
      'no-extra-semi': 'off',
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    ignores: [
      'dist/*',
      'build/*',
      'src/i18n/locales/**',
      'public/**',
      'bs-config.js',
      'check-dependencies-version.js',
      'setupProxy.js',
      'server.js',
      '*.test.js',
      'stats.html',
    ],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];

module.exports = config;
