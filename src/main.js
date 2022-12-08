import Vue from 'vue'
import App from './App.vue'
// bootstrap �ޤJ https://yukihiew.com/npm%E5%BC%95%E5%85%A5bootstrap/
//import "bootstrap/dist/css/bootstrap.min.css"

// ����Ұʮɲ��ͪ��T��
Vue.config.productionTip = false

Vue.component('todo-list', {
    template: `
        <div>
          <div class="todo-title">
            {{todo.title}}
          </div>
          <div class="todo-icons">
            <i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
          </div>
        </div>
    `,
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
});

new Vue({
    render: h => h(App)
}).$mount('#app')

//import "bootstrap/dist/js/bootstrap.js"