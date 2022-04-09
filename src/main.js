import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('@/plugins/firebase');
require('@/plugins/bootstrap-vue');
require('@/plugins/vue-toastification');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
