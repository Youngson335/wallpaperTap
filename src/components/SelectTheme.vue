<template>
  <div class="theme">
    <div class="theme__title">
      <h3>Выберите игровую тему</h3>
      <img src="../assets/icons/theme__icon.svg" alt="" />
    </div>
    <div class="info__theme">
      <div class="themes__select">
        <div
          style="opacity: 0"
          v-for="i of 5"
          :key="i"
          :id="i"
          :class="[
            'theme__variant-' + i,
            'select__variant',
            { active__theme: activeTheme === i },
          ]"
          @click="selectTheme(i)"
        >
          <div v-if="activeTheme === i" class="check__theme">
            <img src="../assets/icons/check__item.svg" alt="" />
          </div>
        </div>
      </div>
      <div ref="resetTheme" class="reset__theme" @click="resetTheme(1)">
        <img
          :class="{ active__reset: activeReset === 1 }"
          src="../assets/icons/reset__icon.svg"
          alt=""
          draggable="false"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      activeTheme: Number(localStorage.getItem("themeIndex")) || 1,
      activeReset: 0,
    };
  },
  props: {
    resizeActive: {
      type: Boolean,
    },
  },
  watch: {
    resizeActive() {
      this.makeActiveSettings();
    },
  },
  methods: {
    ...mapMutations(["updateColorTheme"]),
    makeActiveSettings() {
      const theme = document.querySelector(".theme");
      if (this.resizeActive === true) {
        theme.style.opacity = "1";
      } else {
        theme.style.opacity = ".2";
      }
    },
    selectTheme(id) {
      // const themeStyle = document.querySelector(`.theme__variant-${id}`);
      localStorage.setItem("themeIndex", id);
      const theme = {
        background: "background-color: #98a364",
        border: "border: 2px solid #c1d07b",
      };
      switch (id) {
        case 1:
          localStorage.setItem("colorTheme", "#98a364");
          localStorage.setItem("colorBorder", "2px solid #c1d07b");
          theme.background = "#98a364";
          theme.border = "2px solid #c1d07b";
          break;
        case 2:
          localStorage.setItem("colorTheme", "#64a394");
          localStorage.setItem("colorBorder", "2px solid #7acfbb");
          theme.background = "#64a394";
          theme.border = "2px solid #7acfbb";
          break;
        case 3:
          localStorage.setItem("colorTheme", "#6964a3");
          localStorage.setItem("colorBorder", "2px solid #9088e3");
          theme.background = "#6964a3";
          theme.border = "2px solid #9088e3";
          break;
        case 4:
          localStorage.setItem("colorTheme", "#a064a3");
          localStorage.setItem("colorBorder", "2px solid #d281d6");
          theme.background = "#a064a3";
          theme.border = "2px solid #d281d6";
          break;
        case 5:
          localStorage.setItem("colorTheme", "#a36464");
          localStorage.setItem("colorBorder", "2px solid #d58787");
          theme.background = "#a36464";
          theme.border = "2px solid #d58787";
          break;
      }
      this.updateColorTheme(JSON.stringify(theme));

      this.activeTheme = id;
    },
    resetTheme(id) {
      this.$refs.resetTheme.classList.add("active__reset");
      setTimeout(() => {
        this.$refs.resetTheme.classList.remove("active__reset");
      }, 2000);
      this.selectTheme(id);
    },
    addAnimation() {
      const elem = document.querySelectorAll(".select__variant");
      for (let i = 0; i < elem.length; i++) {
        setTimeout(() => {
          elem[i].classList.add("upload__elements");
          elem[i].style.opacity = "1";
        }, 150 * i);
      }
      setTimeout(() => {
        for (let i = 0; i < elem.length; i++) {
          setTimeout(() => {
            elem[i].classList.remove("upload__elements");
          }, 4000);
        }
      });
    },
  },
  mounted() {
    if (localStorage.getItem("colorTheme") === null) {
      selectTheme(1);
    }
    this.addAnimation();
  },
};
</script>
<style lang="scss">
.theme {
  width: 100%;
  margin-bottom: 20px;
  transition: all 0.3s;
  &__title {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5px;
    & h3 {
      font-weight: 400;
      text-align: start;
      padding: 10px 20px;
      font-size: 27px;
      text-transform: lowercase;
    }
  }
}
.themes__select {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 20px;
  padding-right: 20px;
}
.select__variant {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:active {
    transition: all 0.5s ease;
  }
}
.info__theme {
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
}
.check__theme {
  position: relative;
  & img {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 2px;
  }
}
.theme__variant {
  &-1 {
    background-color: #98a364;
    border: 2px solid #c1d07b;
  }
  &-2 {
    background-color: #64a394;
    border: 2px solid #7acfbb;
  }
  &-3 {
    background-color: #6964a3;
    border: 2px solid #9088e3;
  }
  &-4 {
    background-color: #a064a3;
    border: 2px solid #d281d6;
  }
  &-5 {
    background-color: #a36464;
    border: 2px solid #d58787;
  }
}
.reset__theme {
  cursor: pointer;
  & img {
    display: block;
  }
  &:active {
    scale: 1.1;
  }
}
.active__reset {
  animation: resetTheme 1s ease;
  @keyframes resetTheme {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}
.upload__elements {
  animation: uploadThemes 0.5s ease;
  transition: all 1s;
  @keyframes uploadThemes {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    60% {
      transform: translateY(-5px);
    }
    100% {
      opacity: 1;
      transform: translateY(00px);
    }
  }
}
</style>
