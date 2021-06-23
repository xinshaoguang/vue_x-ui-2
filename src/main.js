import Vue from 'vue'
import App from './App.vue'
import xButton from "./components/button.vue"
Vue.component("xButton", xButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')