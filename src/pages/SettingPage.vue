<template>
  <div
    class="setting"
    ref="settingBlock"
    :style="{ height: settingHeight, backgroundColor: settingBackground }"
  >
    <div class="setting__title">
      <h2>Настройки</h2>
    </div>
    <SelectTheme :resizeActive="resizeActive" @updateTheme="updateTheme" />
    <BlackWhiteThemes :activeSettings="activeSettings" :upTheme="upTheme" />
    <div
      class="setting__edit"
      @mousedown="startResize"
      @touchstart="startResize"
    >
      <img
        draggable="false"
        class="setting__edit-img"
        src="../assets/icons/edit__icon.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import SelectTheme from "../components/SelectTheme.vue";
import BlackWhiteThemes from "../components/BlackWhiteThemes.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SelectTheme,
    BlackWhiteThemes,
  },
  data() {
    return {
      initialHeight: 40,
      settingHeight: "40vh",
      settingBackground: "",
      startY: 0,
      isResizing: false,
      upTheme: 0,
      theme: "black",
      activeSettings: false,
      resizeActive: true,
    };
  },
  computed: {
    ...mapGetters(["getAppTheme"]),
    checkAppTheme() {
      this.theme = this.getAppTheme;
      return this.getAppTheme;
    },
  },
  watch: {
    checkAppTheme() {
      this.editAppTheme();
    },
  },
  methods: {
    editAppTheme() {
      if (this.theme === "black") {
        this.settingBackground = "rgba(0, 0, 0, 0.5098039216)";
      } else if (this.theme === "white") {
        this.settingBackground = "rgb(219 219 219 / 51%)";
      }
    },
    updateTheme(val) {
      this.upTheme = val;
    },
    startResize(event) {
      this.activeSettings = false;
      if (event.type === "mousedown") {
        this.startY = event.clientY;
      } else if (event.type === "touchstart") {
        this.startY = event.touches[0].clientY;
      }
      this.isResizing = true;
      if (this.theme === "black") {
        this.settingBackground = "#1f1d1d";
      } else {
        this.settingBackground = "#bababa";
      }
      document.addEventListener("mousemove", this.resize);
      document.addEventListener("touchmove", this.resize);
      document.addEventListener("mouseup", this.stopResize);
      document.addEventListener("touchend", this.stopResize);
      document.addEventListener("mouseleave", this.stopResize);
    },
    resize(event) {
      this.resizeActive = false;
      if (!this.isResizing) return;
      let currentY;
      if (event.type === "mousemove") {
        currentY = event.clientY;
      } else if (event.type === "touchmove") {
        currentY = event.touches[0].clientY;
      }
      const diff = currentY - this.startY;
      const newHeight = this.initialHeight + (diff / window.innerHeight) * 100;
      if (newHeight > 70) {
        this.settingHeight = "70vh";
      } else if (newHeight < 40) {
        this.settingHeight = "40vh";
      } else {
        this.settingHeight = `${newHeight}vh`;
      }
    },
    stopResize() {
      this.isResizing = false;
      document.removeEventListener("mousemove", this.resize);
      document.removeEventListener("touchmove", this.resize);
      document.removeEventListener("mouseup", this.stopResize);
      document.removeEventListener("touchend", this.stopResize);
      document.removeEventListener("mouseleave", this.stopResize);

      const currentHeight = parseFloat(this.settingHeight);
      if (currentHeight >= 50) {
        this.settingHeight = "75vh";
        this.activeSettings = true;
        this.resizeActive = true;
      } else {
        this.settingHeight = "40vh";
        this.activeSettings = false;
        this.resizeActive = true;
        this.editAppTheme();
      }
    },
  },
  mounted() {
    this.editAppTheme();
  },
};
</script>
<style lang="scss">
.setting {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  height: 40vh;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  animation: showSettingPage 0.7s ease;
  transition: all 0.3s;
  overflow: hidden;
  &__edit {
    position: absolute;
    display: block;
    width: 100px;
    bottom: -10px;
    border-radius: 5px;
    cursor: pointer;
    & img {
      width: 45px;
      display: block;
      margin: 0 auto;
      user-select: none;
    }
  }
  &__title {
    text-align: start;
    animation: showSettingTitle 0.4s ease;
    width: 100%;
    margin-top: 70px;
    & h2 {
      padding: 20px;
      font-size: 20px;
    }
    @keyframes showSettingTitle {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      60% {
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
  @keyframes showSettingPage {
    0% {
      opacity: 0;
      height: 0vh;
    }
    60% {
      height: 45vh;
    }
    100% {
      opacity: 1;
      height: 40vh;
    }
  }
}
</style>
