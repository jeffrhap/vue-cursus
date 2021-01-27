import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

import Button from '@/components/Button.vue';
import Contestants from '@/components/Contestants.vue';

import '@/assets/scss/main.scss'

Vue.component('Button', Button)
Vue.component('Contestants', Contestants)

// https://www.npmjs.com/package/vue-axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
