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
    'plugin:prettier/recommended'
  ],
  // 设置全局变量
  globals: {},
  // 指定解析器
  parser: 'babel-eslint', //兼容ES处于实验性阶段的语法，如类属性用”=“赋值
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
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        tabWidth: 2,
        trailingComma: 'none',
        semi: false
      }
    ],
    semi: 0,
    'no-unused-vars': 1,
    'no-useless-escape': 2,
    'react/display-name': 0
  }
}
