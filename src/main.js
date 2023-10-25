import { createApp } from "vue";
import App from './App.vue'

import router from '@/routerVue.vue'
import Constant from '@/const/WordConstant.vue'

// bootstrap 引入 https://yukihiew.com/npm%E5%BC%95%E5%85%A5bootstrap/
//import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);
// 阻止啟動時產生的訊息
app.config.productionTip = false

// 全域變數使用 Vue 2.0 Vue.prototype.$Name = ${data}
// https://ithelp.ithome.com.tw/articles/10278887
// 全域變數使用 Vue 3.0 app.config.globalProperties.Name = ${data}
// https://vuejs.org/api/application.html#app-config-globalproperties
app.config.globalProperties.Constant = Constant

app.component('todo-list', {
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

app.directive('number-input', {
    bind: function (el) {
        if (el.tagName !== 'INPUT')
            return;
        el.addEventListener(el.tagName.toLowerCase(), numberOnly(el))
    },
    unbind: function (el) {
        if (el.tagName !== 'INPUT')
            return;
        el.removeEventListener(el.tagName.toLowerCase(), numberOnly(el))
    },
})

// 監聽input並即時竄改非數字
function numberOnly(el) {
    function haddle() {
        console.log(el.value);
        el.value = el.value.replace(/\D+/g, '');
        return el.value;
    }
    return haddle;
}

app.use(router);
app.mount('#app')