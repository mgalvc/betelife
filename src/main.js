// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pt'
import 'element-ui/lib/theme-chalk/index.css'

import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false

Vue.use(ElementUI, {locale})
Vue.use(VueTheMask)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
