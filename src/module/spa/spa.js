import Vue from 'vue'
// 引入 饿了么UI
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// 引入 vue-router
import VueRouter from 'vue-router'

import App from './App'
import Use from './user/user'

// Vue.use(Element)
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Use
}, {
    path: '/use',               // 如何使用
    component: App,
    children: [{
        path: 'start',
        component: Use
    }]
}]

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(Use)
})
