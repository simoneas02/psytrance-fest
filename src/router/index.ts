import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/festival-list",
      name: "festival-list",
      component: () => import("../views/FestivalListView.vue"),
    },
    {
      path: "/festival-list/:id",
      name: "festival-list-details",
      component: () => import("../views/FestivalDetails.vue"),
    },
  ],
});

export default router;
