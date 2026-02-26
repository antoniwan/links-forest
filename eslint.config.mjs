import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
    ],
  },
  // Astro files
  ...eslintPluginAstro.configs['flat/recommended'],
  // TypeScript and React in src
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': await import('@typescript-eslint/eslint-plugin'),
      react: await import('eslint-plugin-react'),
      'react-hooks': await import('eslint-plugin-react-hooks'),
      'jsx-a11y': await import('eslint-plugin-jsx-a11y'),
      import: await import('eslint-plugin-import'),
    },
    rules: {
      ...(
        await import('@typescript-eslint/eslint-plugin')
      ).configs.recommended.rules,
      ...(
        await import('eslint-plugin-react')
      ).configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

