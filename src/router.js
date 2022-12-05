//載入 vue-router 官方元件
import Vue from 'vue'
import VueRouter from 'vue-router'
import reportView from './components/helloWorld.vue'

//使用 vue-router
Vue.use(VueRouter)

//匯出vue-router 設置
export default new VueRouter({
    routes: [
        {
            name: '首頁',  //元件呈現的名稱
            path: '/report', //對應的路徑
            component: reportView //對應的元件
        }
    ]
})