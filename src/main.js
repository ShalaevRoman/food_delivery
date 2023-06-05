import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/style.scss'
import './assets/sass/reset.scss'
import './assets/sass/tablet.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
