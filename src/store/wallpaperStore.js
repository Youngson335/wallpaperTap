import wallpaper1 from "../assets/walp/wallpaper/1.jpg";
import wallpaper2 from "../assets/walp/wallpaper/2.jpg";
import wallpaper3 from "../assets/walp/wallpaper/3.png";
import wallpaper4 from "../assets/walp/wallpaper/4.jpg";
import wallpaper5 from "../assets/walp/wallpaper/5.jpg";
import wallpaper6 from "../assets/walp/wallpaper/6.jpg";
import wallpaper7 from "../assets/walp/wallpaper/7.jpg";
import wallpaper8 from "../assets/walp/wallpaper/8.jpg";
import wallpaper9 from "../assets/walp/wallpaper/9.jpg";
import wallpaper10 from "../assets/walp/wallpaper/10.jpg";
import wallpaper11 from "../assets/walp/wallpaper/11.jpg";
import wallpaper12 from "../assets/walp/wallpaper/12.jpg";
import wallpaper13 from "../assets/walp/wallpaper/13.jpg";
import wallpaper14 from "../assets/walp/wallpaper/14.jpg";
import wallpaper15 from "../assets/walp/wallpaper/15.jpg";
import wallpaper16 from "../assets/walp/wallpaper/16.jpg";
import wallpaper17 from "../assets/walp/wallpaper/17.jpg";
import wallpaper18 from "../assets/walp/wallpaper/18.jpg";
import wallpaper19 from "../assets/walp/wallpaper/19.jpg";
import wallpaper20 from "../assets/walp/wallpaper/20.jpg";
import wallpaper21 from "../assets/walp/wallpaper/21.jpg";
import wallpaper22 from "../assets/walp/wallpaper/22.jpg";
import wallpaper23 from "../assets/walp/wallpaper/23.jpg";
import wallpaper24 from "../assets/walp/wallpaper/24.jpg";
import wallpaper25 from "../assets/walp/wallpaper/25.jpg";

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
      { id: 14, img: wallpaper14, count: 700, status: "waiting" },
      { id: 15, img: wallpaper15, count: 700, status: "waiting" },
      { id: 16, img: wallpaper16, count: 600, status: "waiting" },
      { id: 17, img: wallpaper17, count: 600, status: "waiting" },
      { id: 18, img: wallpaper18, count: 550, status: "waiting" },
      { id: 19, img: wallpaper19, count: 550, status: "waiting" },
      { id: 20, img: wallpaper20, count: 450, status: "waiting" },
      { id: 21, img: wallpaper21, count: 400, status: "waiting" },
      { id: 22, img: wallpaper22, count: 750, status: "waiting" },
      { id: 23, img: wallpaper23, count: 750, status: "waiting" },
      { id: 24, img: wallpaper24, count: 850, status: "waiting" },
      { id: 25, img: wallpaper25, count: 850, status: "waiting" },
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
