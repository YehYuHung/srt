// Router ���U�J����D Error:export 'default' (imported as 'VueRouter') was not found in 'vue-router'
// https://blog.csdn.net/qq_52185114/article/details/119360397

// Route �����ݻP Vue�����ۦP�~�i�ϥ�
// https://stackoverflow.com/questions/72700246/how-to-install-vue-router-4-in-vue-2-6-14-version

import Vue from 'vue'
import VueRouter from 'vue-router'

// �ϥ� vue-router
Vue.use(VueRouter);

import Index from '../components/Index.vue'

const routes = [
    { name: 'default', path: '/', redirect: {name : 'index'} }, // �X��Url �T�w�q/srt/�}�l
    { name: 'index', path: '/srt/', component: Index },
    { name: 'report', path: '/srt/Report/', component: () => import('../components/ReportView.vue') },
    { name: 'complexPart', path: '/srt/complexPart/', component: () => import('../components/complexPart.vue') },
    { name: 'grid', path: '/srt/AsGrid/', component: () => import('../components/AsGridView.vue') },
    { name: 'insert', path: '/srt/Insert/', component: () => import('../components/InsertView.vue') },
]

const router = new VueRouter({
    // Vue2 HashTag �M���覡
    // https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
    mode: 'history',
    path: '/srt/',
    routes,
})

// �ץX vue-router �]�m
export default router;