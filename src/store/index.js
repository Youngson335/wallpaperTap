import { createStore } from "vuex";
import wallpaperModule from "./wallpaperStore";

const store = createStore({
  state: {
    theme: "black",
    wallpapers: wallpaperModule,
  },
  mutations: {
    setThemeApp(state, val) {
      state.theme = val;
    },
  },
  actions: {
    checkThemeApp(context) {
      const localTheme = localStorage.getItem("decorTheme");
      if (localTheme === "0") {
        context.commit("setThemeApp", "white");
      } else {
        context.commit("setThemeApp", "black");
      }
    },
  },
  getters: {
    getAppTheme(state) {
      return state.theme;
    },
    getWallpapers(state) {
      return state.wallpapers;
    },
  },
});
store.dispatch("checkThemeApp");
export default store;
