import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'

// Buefy pretty things

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// rita text generation things

import rita from 'rita'

Vue.prototype.$rita = rita;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
