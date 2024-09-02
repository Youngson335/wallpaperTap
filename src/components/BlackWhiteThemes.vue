<template>
  <div class="decor">
    <div class="decor__title">
      <h3>Изменить тему игры</h3>
    </div>
    <div class="decor__btns" ref="activeBorder">
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
      <div
        ref="activeBtn"
        :style="{ right: checkStateTheme }"
        class="active__decor"
      ></div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

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
    upTheme(val, newVal) {},
    activeSettings() {
      this.makeButtonActive();
    },
    checkBackgroundStyle() {
      this.addStyleBtn();
    },
  },
  computed: {
    ...mapGetters(["getBackgroundColor", "getBorderColor"]),
    checkBackgroundStyle() {
      return this.getBackgroundColor;
    },
    checkActiveBtns() {
      return !this.activeSettings;
    },
    checkStateTheme() {
      let state = Number(localStorage.getItem("decorTheme"));
      console.log(state);
      if (state === 1) {
        return "0";
      } else if (state === 0) {
        return "40";
      }
    },
  },
  methods: {
    ...mapMutations(["setThemeApp"]),
    addStyleBtn() {
      this.$refs.activeBtn.style.background = this.getBackgroundColor;
      this.$refs.activeBorder.style.border = this.getBorderColor;
    },
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
  },
  mounted() {
    if (localStorage.getItem("decorTheme") === null) {
      localStorage.setItem("decorTheme", 1);
    }
    this.addStyleBtn();
    this.checkEditTheme;
    this.checkStateTheme;
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
      font-weight: 400;
      text-align: start;
      padding: 0 20px;
      font-size: 27px;
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
    border: 2px solid #c1d07b;
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
    transition: all 0.5s;
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
