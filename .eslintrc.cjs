/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // vue3跟元素可以多个，不要报警告了
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
