import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify/lib/framework';
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  vuetify: new Vuetify(),
  store,
  render: h => h(App)
}).$mount('#app')
