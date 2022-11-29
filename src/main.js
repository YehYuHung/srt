import Vue from 'vue'
import App from './App.vue'

// 阻止啟動時產生的訊息
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
