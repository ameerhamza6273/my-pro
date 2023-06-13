import Vue from "vue";
import VueRouter from "vue-router";
import HeroView from "../views/HeroView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/ambar",
    name: "ambar",
    component: () =>
      import("../views/AmbarImmigration.vue"),
  },
  {
    path: "/",
    name: "signUp",
    component: () =>
      import("../views/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import("../views/Dashboard.vue"),
      children:[
        {
          path: "/home",
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
        {
          path: "/employerServices",
          name: "employerServices",
          component: () =>
            import("../views/EmployeService.vue"),
        },
        {
          path: "/checkEligibility",
          name: "checkEligibility",
          component: () =>
            import("../views/CheckEligibility.vue"),
        },
        {
          path: "/contactUs",
          name: "contactUs",
          component: () =>
            import("../views/ContactUs.vue"),
        },
      ]
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
