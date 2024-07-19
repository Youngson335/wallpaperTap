import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Setting from "../pages/SettingPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
