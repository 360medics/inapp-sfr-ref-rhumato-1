import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import List from "@/views/List.vue";
import SubListPage from "@/views/SubListPage.vue";
import ContentPage from "@/views/ContentPage.vue";
import Search from "@/components/ListSearchResult.vue";
import CRI from "@/views/CRI.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "List",
    component: List
  },
  {
    path: "/sublist/:slug",
    name: "SubListPage",
    component: SubListPage
  },
  {
    path: "/score/cri",
    redirect: "/cri"
  },
  {
    path: "/score/:slug",
    name: "ContentPage",
    component: ContentPage
  },
  {
    path: "/search/:search",
    name: "Search",
    component: Search
  },
  {
    path: "/cri",
    name: "CRI",
    component: CRI
  }
];

const router = createRouter({
  routes,
  //do NOT user mode: "history" or "abstract", we need hastags
  history: createWebHashHistory()
});

export default router;
