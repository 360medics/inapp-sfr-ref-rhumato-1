import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import List from "@/views/List.vue";
import SubListPage from "@/views/SubListPage.vue";
import ContentPage from "@/views/ContentPage.vue";
import Search from "@/components/ListSearchResult.vue";
import CRI from "@/views/CRI.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  routes,
  //do NOT user mode: "history" or "abstract", we need hastags
  //mode: "history",
  mode: "hash"
});

export default router;
