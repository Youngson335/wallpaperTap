<template>
  <div class="decor">
    <div class="decor__title">
      <h3>Изменить тему игры</h3>
    </div>
    <div class="decor__btns">
      <button
        class="btn__white decor__btn"
        @click="selectWhiteTheme(0)"
        :disabled="checkActiveBtns"
      >
        <img src="../assets/icons/white-theme__icon.svg" alt="" />
      </button>
      <button
        class="btn__black decor__btn"
        @click="selectBlackTheme(1)"
        :disabled="checkActiveBtns"
      >
        <img src="../assets/icons/black-theme__icon.svg" alt="" />
      </button>
      <div :style="{ right: checkStateTheme }" class="active__decor"></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeDecor: 1,
    };
  },
  props: {
    upTheme: {
      type: Number,
    },
    activeSettings: {
      type: Boolean,
    },
  },
  watch: {
    upTheme(val, newVal) {
      this.editBackground();
    },
    activeSettings() {
      this.makeButtonActive();
    },
  },
  computed: {
    checkActiveBtns() {
      return !this.activeSettings;
    },
    checkStateTheme() {
      let state = Number(localStorage.getItem("decorTheme"));
      if (state === 1) {
        return "0";
      } else if (state === 0) {
        return "40";
      }
    },
    checkEditTheme() {
      this.editBackground();
      return (
        localStorage.getItem("checkTheme") ||
        "rgba(0, 0, 0, 10) linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105)) repeat scroll 0% 0% / auto padding-box border-box"
      );
    },
  },
  methods: {
    ...mapMutations(["setThemeApp"]),
    makeButtonActive() {
      const decor = document.querySelector(".decor");
      if (this.activeSettings === true) {
        decor.style.opacity = "1";
      } else {
        decor.style.opacity = ".2";
      }
    },
    selectBlackTheme(num) {
      localStorage.setItem("decorTheme", num);
      const activeDecor = document.querySelector(".active__decor");
      if (num === 1) {
        activeDecor.classList.remove("active__white");
        activeDecor.classList.add("active__black");
        this.setThemeApp("black");
      } else {
        return false;
      }
    },
    selectWhiteTheme(num) {
      localStorage.setItem("decorTheme", num);
      console.log(localStorage.getItem("decorTheme"));
      const activeDecor = document.querySelector(".active__decor");
      if (num === 0) {
        activeDecor.classList.remove("active__black");
        activeDecor.classList.add("active__white");
        this.setThemeApp("white");
      } else {
        return false;
      }
    },
    editBackground() {
      const checker = document.querySelector(".active__decor");
      const defaultTheme =
        "rgba(0, 0, 0, 0) linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105)) repeat scroll 0% 0% / auto padding-box border-box";
      checker.style.background =
        localStorage.getItem("checkTheme") || defaultTheme;
    },
  },
  mounted() {
    this.checkEditTheme;
    this.activeDecor = Number(localStorage.getItem("decorTheme"));
  },
};
</script>
<style lang="scss">
.decor {
  width: 100%;
  opacity: 0.2;
  transition: all 0.3s;
  &__title {
    & h3 {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      text-align: start;
      padding: 0 20px;
      font-size: 15px;
      text-transform: lowercase;
      margin-bottom: 5px;
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    max-width: 90px;
    border: 1px solid;
    border-radius: 20px;
    position: relative;
  }
  &__btn {
    background: none;
    border: none;
    padding: 5px;
    cursor: pointer;
    & img {
      display: block;
      position: relative;
      z-index: 1;
    }
  }
}
.active {
  &__decor {
    position: absolute;
    width: 50px;
    height: 34px;
    border-radius: 20px;
    transition: all 1s;
  }
  &__black {
    animation: activeBlackTheme 0.3s cubic-bezier(0.06, 0.31, 0.45, 1.15);
    transition: all 0.5s;
    right: 0;
  }
  &__white {
    animation: activeWhiteTheme 0.3s cubic-bezier(0.06, 0.31, 0.45, 1.15);
    transition: all 0.5s;
    left: 0;
  }
  @keyframes activeBlackTheme {
    0% {
      right: 40px;
    }
    100% {
      right: 0px;
    }
  }
  @keyframes activeWhiteTheme {
    0% {
      left: 40px;
    }
    100% {
      left: 0px;
    }
  }
}
</style>
