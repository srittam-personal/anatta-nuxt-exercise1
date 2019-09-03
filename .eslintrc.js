module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/html-indent': 0,
    'vue/html-self-closing':0,
    'vue/multiline-html-element-content-newline':0,
    'indent':0,
    'no-trailing-spaces':0,
    'eol-last':0,
    'space-before-function-paren':0,
    'space-before-blocks':0,
    'no-labels':0,
    'no-unused-expressions':0,
    'keyword-spacing':0,
    'key-spacing':0,
    'comma-spacing':0,
    'semi':0,
    'no-console':0,
    'vue/singleline-html-element-content-newline': 'off'
  }
}
