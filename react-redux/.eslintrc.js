module.exports = {
  // 指定脚本的运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true, //浏览器环境中的全局变量
    es6: true, //启用除了modules以外的所有ES6特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    node: true //Node.js 全局变量和 Node.js 作用域
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // 设置全局变量
  globals: {},
  // 指定解析器
  parser: '@typescript-eslint/parser',
  // 指定解析器选项
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  // 第三方插件
  plugins: ['react'],
  rules: {
    semi: 0,
    'no-unused-vars': 1,
    'no-useless-escape': 2,
    'react/display-name': 0
  }
}
