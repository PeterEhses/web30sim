import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'

// axios for api / file consumption

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// Buefy pretty things

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

// rita text generation things

import rita from 'rita'
Vue.prototype.$rita = rita;

// markov direct for seeded prng
import Markov from 'markov-strings'
let data = ["Hi I'm a Sentence.", "I'm also Text lol.","testing sentences is no fun."]
Vue.prototype.$markov = new Markov(data, { stateSize: 2 })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
