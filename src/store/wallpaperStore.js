import wallpaper1 from "../assets/walp/wallpaper/1.jpeg";
import wallpaper2 from "../assets/walp/wallpaper/2.jpeg";
import wallpaper3 from "../assets/walp/wallpaper/3.png";
import wallpaper4 from "../assets/walp/wallpaper/4.png";
import wallpaper5 from "../assets/walp/wallpaper/5.png";
import wallpaper6 from "../assets/walp/wallpaper/6.png";
import wallpaper7 from "../assets/walp/wallpaper/7.png";
import wallpaper8 from "../assets/walp/wallpaper/8.png";
import wallpaper9 from "../assets/walp/wallpaper/9.png";
import wallpaper10 from "../assets/walp/wallpaper/10.jpg";
import wallpaper11 from "../assets/walp/wallpaper/11.jpg";
import wallpaper12 from "../assets/walp/wallpaper/12.jpg";
import wallpaper13 from "../assets/walp/wallpaper/13.png";

const wallpaperModule = {
  state: () => ({
    wallpapers: [
      { id: 1, img: wallpaper1, count: 10, status: "waiting" },
      { id: 2, img: wallpaper2, count: 400, status: "waiting" },
      { id: 3, img: wallpaper3, count: 400, status: "waiting" },
      { id: 4, img: wallpaper4, count: 300, status: "waiting" },
      { id: 5, img: wallpaper5, count: 300, status: "waiting" },
      { id: 6, img: wallpaper6, count: 350, status: "waiting" },
      { id: 7, img: wallpaper7, count: 450, status: "waiting" },
      { id: 8, img: wallpaper8, count: 500, status: "waiting" },
      { id: 9, img: wallpaper9, count: 500, status: "waiting" },
      { id: 10, img: wallpaper10, count: 200, status: "waiting" },
      { id: 11, img: wallpaper11, count: 600, status: "waiting" },
      { id: 12, img: wallpaper12, count: 600, status: "waiting" },
      { id: 13, img: wallpaper13, count: 650, status: "waiting" },
    ],
  }),
  mutations: {
    updateWallpaperStatus(state, { id, newStatus }) {
      const wallpaper = state.wallpapers.find((w) => w.id === id);
      if (wallpaper) {
        wallpaper.status = newStatus;
      }
    },
  },
  actions: {
    changeWallpaperStatus({ commit }, { id, newStatus }) {
      commit("updateWallpaperStatus", { id, newStatus });
    },
  },
  getters: {
    getWallpapers(state) {
      return state.wallpapers;
    },
  },
};

export default wallpaperModule;
