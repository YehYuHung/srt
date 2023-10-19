<script>
const routerSrt = [
  // 訪問Url 固定從/srt/開始
  {
    name: "default",
    path: "/",
    redirect: { name: "index" },
  },
  {
    name: "index",
    path: "/srt/",
    component: () => import("@/components/Index.vue"),
  },
  {
    name: "report",
    path: "/srt/Report/",
    component: () => import("@/components/ReportView.vue"),
  },
  {
    name: "complexPart",
    path: "/srt/complexPart/",
    component: () => import("@/components/complexPart.vue"),
  },
  {
    name: "grid",
    path: "/srt/AsGrid/",
    component: () => import("@/components/AsGridView.vue"),
    //children: [{ path: '', name: 'user', component: UserHome }]
  },
  // keepAlive 快取存活
  {
    name: "insert",
    path: "/srt/Insert/",
    component: () => import("@/components/InsertView.vue"),
  },
  // SPA 與 MPA 差別 以及history/hash原理
  // https://ithelp.ithome.com.tw/articles/10277447?sc=pt
  // 處理history refresh失敗方法
  // https://ithelp.ithome.com.tw/articles/10214449
  // 最新處理 請查看 index.html
  {
    name: "passing",
    path: "/srt/Pass/:storeId(\\d+)?",
    component: () => import("@/components/InsertView.vue"),
  },
  {},
];

export default routerSrt;
</script>