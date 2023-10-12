const vue = [
  {
    name: 'vue 3 typescript init',
    prefix: 'vinit',
    template: 'template/vue/vinit.vue'
  },
  {
    name: 'vue 2 init',
    prefix: 'vinit2',
    template: 'template/vue/vinit2.vue'
  },
  {
    name: 'vue 2 typescript init',
    prefix: 'vinit2ts',
    template: 'template/vue/vinit2ts.vue'
  }
]

const vueHtml = [
]

const javascript = [
]

const css = [
  {
    name: '单行省略',
    prefix: 'ellipsis',
    template: 'template/css/ellipsis.txt'
  },
  {
    name: '多行省略',
    prefix: 'ellipsis-multi',
    template: 'template/css/ellipsis-multi.txt'
  },
  {
    name: '文字渐变',
    prefix: 'text-fill',
    template: 'template/css/text-fill.txt'
  }
]

const config = [
  {
    path: 'snippets/vue.json',
    snippets: vue
  },
  {
    path: 'snippets/vue-html.json',
    snippets: vueHtml
  },
  {
    path: 'snippets/javascript.json',
    snippets: javascript
  },
  {
    path: 'snippets/css.json',
    snippets: css
  }
]

export { config }
