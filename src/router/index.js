import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import Setting from "../pages/SettingPage.vue";
import Wallpaper from "../pages/WallpaperPage.vue";
import SelectWallpaper from "../components/SelectWallpaper.vue";
import PreviewWallpaper from "../components/PreviewWallpaper.vue";
import CompletedWallpaper from "../components/CompletedWallpaper.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/wallpaper",
    component: Wallpaper,
    children: [
      {
        path: "select",
        component: SelectWallpaper,
      },
      {
        path: "preview",
        component: PreviewWallpaper,
      },
      {
        path: "completed",
        component: CompletedWallpaper,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
