import Vue from 'vue'
import App from './App'

import Runvue from 'runvue'    // 引入 runvue UI
import 'runvue/style.css'

Vue.use(Runvue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
