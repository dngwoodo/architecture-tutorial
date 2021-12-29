module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  globals: {
    context: 'readonly',
  },
  extends: [
    'plugin:react/recommended', // eslint-plugin-react
    'airbnb/hooks', // 추가. 내부적으로 eslint-plugin-react-hooks가 룰들이 들어가있습니다.
    'airbnb', // eslint-config-airbnb(eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react의 preset입니다)
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'func-names': 'off',
    'react/function-component-definition': 'off',
    'no-new': 'off',
  },
};
