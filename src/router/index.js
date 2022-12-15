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
    { name: 'default', path: '/', redirect: { name: 'index' } }, // 訪問Url 固定從/srt/開始
    { name: 'index', path: '/srt/', component: Index },
    { name: 'report', path: '/srt/Report/', component: () => import('../components/ReportView.vue') },
    { name: 'complexPart', path: '/srt/complexPart/', component: () => import('../components/complexPart.vue') },
    { name: 'grid', path: '/srt/AsGrid/', component: () => import('../components/AsGridView.vue') },
    // keepAlive 快取存活
    { name: 'insert', path: '/srt/Insert/', component: () => import('../components/InsertView.vue'), meta: { keepAlive: true } },
]

const router = new VueRouter({
    // Vue2 HashTag 清除方式
    // https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
    mode: 'history',
    path: '/srt/',
    routes,
})

// 匯出 vue-router 設置
export default router;