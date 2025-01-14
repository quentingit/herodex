import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: [
      '**/*.{ts,tsx}',
      '.eslintrc.js',
      'tailwind.config.js',
      'api/**/*.js',
    ],
    ignores: ['dist'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: tsParser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-console': 'off',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true }, // Gestion stricte des variables inutilisées
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', disallowTypeAnnotations: false }, // Préférer les imports explicites pour les types
      ],
      '@typescript-eslint/no-empty-function': [
        'warn',
        { allow: ['arrowFunctions'] }, // Empêche les fonctions vides, sauf pour les fonctions fléchées
      ],
      '@typescript-eslint/array-type': [
        'warn',
        { default: 'array', readonly: 'array' }, // Préfère l'utilisation de `T[]` plutôt que `Array<T>`
      ],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'], // Préfère `type` ou `interface` de manière cohérente
      '@typescript-eslint/no-inferrable-types': 'warn', // Évite de déclarer des types pour des valeurs déjà inférables
      '@typescript-eslint/no-shadow': 'warn', // Empêche les variables locales d'avoir le même nom qu'une variable extérieure
      '@typescript-eslint/prefer-ts-expect-error': 'warn', // Préfère `@ts-expect-error` à `@ts-ignore`

      //'@typescript-eslint/explicit-module-boundary-types': 'warn', // Recommande de spécifier les types d'entrée et de sortie des fonctions publiques
      //'@typescript-eslint/no-explicit-any': 'warn', // Décourage l'utilisation de `any`
      // '@typescript-eslint/prefer-optional-chain': 'warn', // Préfère l'utilisation de l'opérateur d'accès optionnel (`?.`)
      // '@typescript-eslint/prefer-nullish-coalescing': [
      //   'warn',
      //   { ignoreConditionalTests: false, ignoreMixedLogicalExpressions: false }, // Préfère `??` à `||` pour les valeurs par défaut
      // ],
      //'@typescript-eslint/no-non-null-assertion': 'warn', // Évite l'utilisation des assertions non-nulles (`!`)
    },
  },
  {
    files: ['**/*.test.{js,ts,tsx}', '**/*.spec.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {},
  },
];
