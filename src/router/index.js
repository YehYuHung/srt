// Router 註冊遇到問題 Error:export 'default' (imported as 'VueRouter') was not found in 'vue-router'
// https://blog.csdn.net/qq_52185114/article/details/119360397

// Route 版本需與 Vue版本相同才可使用
// https://stackoverflow.com/questions/72700246/how-to-install-vue-router-4-in-vue-2-6-14-version

import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用 vue-router
Vue.use(VueRouter);

import Index from '../components/Index.vue'

const routes = [
    { name: 'index', path: '/', component: Index },
    { name: 'report', path: '/ReportView/', component: () => import('../components/ReportView.vue') },
    { name: 'complexPart', path: '/complexPart/', component: () => import('../components/complexPart.vue') },
    { name: 'gridView', path: '/AsGridView/', component: () => import('../components/AsGridView.vue') },
    { name: 'insertView', path: '/InsertView/', component: () => import('../components/InsertView.vue') },
]

const router = new VueRouter({
    // Vue2 HashTag 清除方式
    // https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
    mode: 'history',
    routes,
})

// 匯出 vue-router 設置
export default router;