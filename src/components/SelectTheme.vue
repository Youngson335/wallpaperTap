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
      <div class="reset__theme" @click="resetTheme(1)">
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
export default {
  data() {
    return {
      activeTheme: Number(localStorage.getItem("themeIndex")) || 1,
      activeReset: 0,
    };
  },
  methods: {
    selectTheme(id) {
      const themeStyle = document.querySelector(`.theme__variant-${id}`);
      const body = document.getElementsByTagName("body")[0];
      const backgroundValue = window
        .getComputedStyle(themeStyle)
        .getPropertyValue("background");
      localStorage.setItem("checkTheme", backgroundValue);

      body.style.background = localStorage.getItem("checkTheme");
      localStorage.setItem("themeIndex", id);
      this.activeTheme = id;
      this.$emit("updateTheme", this.activeTheme);
    },
    resetTheme(id) {
      const body = document.getElementsByTagName("body")[0];
      this.activeTheme = 1;
      this.activeReset = 1;
      const defaultTheme =
        "rgba(0, 0, 0, 0) linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105)) repeat scroll 0% 0% / auto padding-box border-box";
      localStorage.setItem("themeIndex", 1);
      localStorage.setItem("checkTheme", defaultTheme);
      body.style.background = localStorage.getItem("checkTheme");
      setTimeout(() => {
        this.activeReset = 0;
      }, 2000);
      this.$emit("updateTheme", this.activeTheme);
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
    const body = document.getElementsByTagName("body")[0];
    body.style.background = localStorage.getItem("checkTheme");
    this.addAnimation();
  },
};
</script>
<style lang="scss">
.theme {
  width: 100%;
  margin-bottom: 20px;
  &__title {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 5px;
    & h3 {
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      text-align: start;
      padding: 0 20px;
      font-size: 15px;
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
  border: 1px solid white;
  border-radius: 50%;
  margin-right: 15px;
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
    background: linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105));
  }
  &-2 {
    background: linear-gradient(rgb(207, 28, 20), rgb(149, 23, 199));
  }
  &-3 {
    background: linear-gradient(rgb(29, 171, 210), rgb(245, 139, 182));
  }
  &-4 {
    background: linear-gradient(rgb(138, 137, 123), rgb(189, 182, 250));
  }
  &-5 {
    background: linear-gradient(rgb(105, 95, 38), rgb(97, 189, 186));
  }
}
.reset__theme {
  & img {
    display: block;
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
