import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Bootstrap 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// *Bootstrap 

// Мои стили
import "./global-scss/main.scss";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
