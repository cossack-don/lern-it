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



// Мои стили SCSS
import "./global-scss/main.scss";
//* Мои стили SCSS


// Глобальные компоненты

import GC_h2_lessons from '@/global-components/global-component-h2-lesson.vue'
import GC_area_code_lessons from '@/global-components/global-component-area-code.vue'
Vue.component('GC_h2_lessons', GC_h2_lessons)
Vue.component('GC_area_code_lessons', GC_area_code_lessons)

//* Глобальные компоненты


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
