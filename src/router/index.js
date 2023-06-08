import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HeroView,
  },
  {
    path: "/process",
    name: "process",
    component: () =>
      import("../views/FbProcess.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () =>
      import("../views/JobSection.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: function() {
    return {
      x: 0,
      y: 0
    }
  },
  routes,
});

export default router;
