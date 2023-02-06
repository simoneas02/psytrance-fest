import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "festival-list",
      component: () => import("../views/FestivalListView.vue"),
    },
    {
      path: "/:id",
      name: "festival-list-details",
      component: () => import("../views/FestivalDetails.vue"),
    },
  ],
});

export default router;
