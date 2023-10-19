<script>
// Router 註冊遇到問題 Error:export 'default' (imported as 'VueRouter') was not found in 'vue-router'
// https://blog.csdn.net/qq_52185114/article/details/119360397

// Route 版本需與 Vue版本相同才可使用
// https://stackoverflow.com/questions/72700246/how-to-install-vue-router-4-in-vue-2-6-14-version

import { createRouter, createWebHistory } from "vue-router";
import srtRouter from "@/views/routerSrtVue.vue";

// Vue2 HashTag 清除方式
// https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
// 環境參數讀取
// https://blog.csdn.net/qq_42855675/article/details/114261585
const router = createRouter({
  history: createWebHistory(process.env.NODE_PUBLIC_PATH),
  routes: srtRouter,
});

// 匯出 vue-router 設置
export default router;
</script>