import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name:"homepage",
    component: resolve => require(["../views/index/index.vue"], resolve),
  }
];

const router = new VueRouter({
  routes: routes
});

export default router;