import Vue from 'vue'
import Element from 'element-ui'    // 引入 饿了么UI
import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})