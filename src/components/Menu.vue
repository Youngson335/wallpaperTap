<template>
  <nav class="menu">
    <router-link to="/">
      <div class="menu__item" style="opacity: 0">
        <img src="../assets/icons/Home.svg" alt="" draggable="false" />
      </div>
    </router-link>
    <router-link to="/checklist">
      <div class="menu__item" style="opacity: 0">
        <img src="../assets/icons/achivka.svg" alt="" draggable="false" />
      </div>
    </router-link>
    <router-link to="/after">
      <div class="menu__item" style="opacity: 0">
        <img src="../assets/icons/info__creater.svg" alt="" draggable="false" />
      </div>
    </router-link>
    <router-link to="/setting">
      <div class="menu__item" style="opacity: 0">
        <img src="../assets/icons/Settings_8.svg" alt="" draggable="false" />
      </div>
    </router-link>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      active: Number(localStorage.getItem(0 || "activeRout")),
      theme: "black",
    };
  },
  computed: {
    ...mapGetters(["getAppTheme"]),
    appTheme() {
      this.theme = this.getAppTheme;
      return this.getAppTheme;
    },
  },
  watch: {
    appTheme(val, newVal) {
      this.editAppTheme();
    },
  },
  methods: {
    getMenuItemsByClassName() {
      const items = document.querySelectorAll(".menu__item");
      for (let index = 0; index < items.length; index++) {
        if (index === this.active) {
          items[index].classList.add("active_item");
        }

        items[index].addEventListener("click", () => {
          items.forEach((item) => {
            item.classList.remove("active_item");
          });
          items[index].classList.add("active_item");
          this.active = index;
          localStorage.setItem("activeRout", index || 0);
          setTimeout(() => {
            let keyAnimate = [
              { transform: "translateY(-10px)" },
              {
                transform: "translateY(-20px)",
              },
              {
                transform: "translateY(0px)",
              },
            ];
            let keyTiming = {
              duration: 350,
              iterations: 1,
              easing: "cubic-bezier(0.17, 0.16, 0.33, 0.82)",
            };
            items[index].animate(keyAnimate, keyTiming);
          }, 1);
        });

        setTimeout(() => {
          items[index].classList.add("show__item");
          items[index].style.opacity = "1";
        }, 150 * index);
      }
    },
    editAppTheme() {
      const menu = document.querySelector(".menu");
      const theme = this.appTheme;
      if (theme === "black") {
        menu.style.background = "rgba(0, 0, 0, 0.5098039216)";
      } else if (theme === "white") {
        menu.style.background = "rgb(219 219 219 / 51%)";
      }
    },
  },
  mounted() {
    this.getMenuItemsByClassName();
    this.editAppTheme();
  },
};
</script>
<style lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.5098039216);
  height: 10%;
  max-height: 70px;
  border-radius: 18px;
  margin-bottom: 5px;
  animation: showMenu 0.8s ease;
  transition: animation 0.5s;
  width: calc(100% - 80px);
  max-width: 320px;
  margin: 0 auto;
  margin-bottom: 10px;
  @keyframes showMenu {
    0% {
      transform: translateY(200px);
    }
    50% {
      bottom: -20px;
      height: 14%;
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  &__item {
    user-select: none;
    & img {
      width: 38px;
      display: block;
      user-select: none;
    }
  }
  .show__item {
    animation: showMenuItems 0.6s ease;
    transition: animation 1s;
    @keyframes showMenuItems {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }

  .active_item {
    transition: all 0.3s;
    position: relative;
    &::after {
      content: "";
      display: block;
      height: 4px;
      width: 4px;
      background-color: white;
      margin: 0 auto;
      border-radius: 50%;
      transition: all 0.3s;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -7px;
      animation: showAfterElements 0.2s ease;
      @keyframes showAfterElements {
        0% {
          height: 0px;
          width: 0px;
          opacity: 0;
        }
        100% {
          height: 4px;
          width: 4px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
