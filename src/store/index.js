import { createStore } from "vuex";
import wallpaperModule from "./wallpaperStore";

const store = createStore({
  state: {
    theme: "black",
    colorTheme:
      localStorage.getItem("colorTheme") || "background-color: #98a364",
    colorBorder:
      localStorage.getItem("colorBorder") || "border: 2px solid #c1d07b",
  },
  mutations: {
    setThemeApp(state, val) {
      state.theme = val;
    },
    updateColorTheme(state, val) {
      const data = JSON.parse(val);
      state.colorBorder = data.border;
      state.colorTheme = data.background;
    },
    updateBlackWhiteTheme(state, val) {
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
    getBorderColor(state) {
      return state.colorBorder;
    },
    getBackgroundColor(state) {
      return state.colorTheme;
    },
  },
  modules: {
    wallpapers: wallpaperModule,
  },
});

store.dispatch("checkThemeApp");
export default store;
