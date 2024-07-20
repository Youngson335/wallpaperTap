import { createStore } from "vuex";

const store = createStore({
  state: {
    theme: "black",
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
  },
});
store.dispatch("checkThemeApp");
export default store;
