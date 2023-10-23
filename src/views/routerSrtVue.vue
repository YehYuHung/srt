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
    component: () => import("@/views/SRT/IndexView.vue"),
  },
  {
    name: "report",
    path: "/srt/Report/",
    component: () => import("@/views/SRT/ReportView.vue"),
  },
  {
    name: "complexPart",
    path: "/srt/complexPart/",
    component: () => import("@/views/SRT/complexPartView.vue"),
  },
  {
    name: "grid",
    path: "/srt/AsGrid/",
    component: () => import("@/views/SRT/AsGridView.vue"),
    //children: [{ path: '', name: 'user', component: UserHome }]
  },
  // keepAlive 快取存活
  {
    name: "insert",
    path: "/srt/Insert/",
    component: () => import("@/views/SRT/InsertView.vue"),
  },
  // SPA 與 MPA 差別 以及history/hash原理
  // https://ithelp.ithome.com.tw/articles/10277447?sc=pt
  // 處理history refresh失敗方法
  // https://ithelp.ithome.com.tw/articles/10214449
  // 最新處理 請查看 index.html
  {
    name: "passing",
    path: "/srt/Pass/:storeId(\\d+)?",
    component: () => import("@/views/SRT/InsertView.vue"),
  },
  {},
];

export default routerSrt;
</script>