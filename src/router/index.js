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
    { name: 'index', path: '/', component: Index },
    { name: 'report', path: '/ReportView/', component: () => import('../components/ReportView.vue') },
    { name: 'complexPart', path: '/complexPart/', component: () => import('../components/complexPart.vue') },
    { name: 'gridView', path: '/AsGridView/', component: () => import('../components/AsGridView.vue') },
    { name: 'insertView', path: '/InsertView/', component: () => import('../components/InsertView.vue') },
]

const router = new VueRouter({
    // Vue2 HashTag �M���覡
    // https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
    mode: 'history',
    routes,
})

// �ץX vue-router �]�m
export default router;