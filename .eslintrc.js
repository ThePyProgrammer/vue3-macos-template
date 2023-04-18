module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended'
    ],
    plugins: [],
    // add your custom rules here
    rules: {
      'vue/multi-word-component-names': ['error', {
        'ignores': ['default']
      }]
    },
    overrides: [
      {
        files: ['src/components/*.vue'],
        rules: {
          'vue/multi-word-component-names': 0,
        },
      },
    ],
  }