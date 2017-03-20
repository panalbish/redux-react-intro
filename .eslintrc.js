module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  ecmaFeatures: {
    jsx: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'no-console': [
      `warn`,
      {
        allow: [
          `info`,
          `time`,
          `timeEnd`,
          `warn`,
          `error`,
        ],
      },
    ],
    'comma-dangle': [2, 'never'],
    'import/no-extraneous-dependencies': [0, {
     "devDependencies": ["**/*.test.js", "**/*.spec.js"],
      "optionalDependencies": false
    }],
    'max-len': ["error", 120],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
