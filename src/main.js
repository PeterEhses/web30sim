import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// axios for api / file consumption

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

// vuetify because better var support supposedly
import vuetify from '@/plugins/vuetify'

// rita text generation things

import rita from 'rita'
Vue.prototype.$rita = rita;

// markov direct for seeded prng
import Markov from 'markov-strings'
let data = ["Hi I'm a Sentence.", "I'm also Text lol.","testing sentences is no fun."]
Vue.prototype.$markov = new Markov(data, { stateSize: 2 })


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
