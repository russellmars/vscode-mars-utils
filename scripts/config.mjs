const vue = [
  {
    name: 'vue 3 init',
    prefix: 'vinit',
    template: 'template/vue/vinit.vue'
  },
  {
    name: 'vue 2 init',
    prefix: 'vinit2',
    template: 'template/vue/vinit2.vue'
  }
]

const vueHtml = [
  {
    name: 'i18n template',
    prefix: '$t',
    template: 'template/vue-html/i18nt.md'
  }
]

const javascript = [
  {
    name: 'i18n script',
    prefix: '$t',
    template: 'template/javascript/i18nt.md'
  }
]

const css = [
  {
    name: '多行省略',
    prefix: 'multi-ellipsis',
    template: 'template/css/multi-ellipsis.css'
  },
  {
    name: '文字渐变',
    prefix: 'text-fill',
    template: 'template/css/text-fill.css'
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
