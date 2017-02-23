import Vue from 'vue'
import App from './App'

import Runvue from 'runvue/dist/runvue.js'    // 引入 runvue UI
import 'runvue/dist/style.css'

Vue.use(Runvue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
