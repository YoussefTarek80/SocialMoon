import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      component: () => import("./Auth/login/login.vue"),
    },
    {
      path: "/signup",
      component: () => import("./Auth/signup/signup.vue"),
    },
    {
      path: "/explore",
      component: () => import("./views/all-parts/all-parts.vue"),
      meta: { requiresAuth: true },
    },

  ],
});
export default router;
