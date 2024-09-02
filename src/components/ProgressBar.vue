<template>
  <div class="progress-bar">
    <div
      ref="progress"
      class="progress"
      :style="{ width: progressWidth + '%' }"
    ></div>
  </div>
  <ModalSuccess class="done__modal" />
</template>

<script>
import ModalSuccess from "../components/ModalSuccess.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ModalSuccess,
  },
  data() {
    return {
      maxClicks: Number(localStorage.getItem("activeWallpaperCounter")) || 400,
      initialWidth: 0,
    };
  },
  props: {
    clickCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getBackgroundColor"]),
    progressWidth() {
      return (this.clickCount / this.maxClicks) * 100;
    },
    counter() {
      return Number(this.clickCount);
    },
  },
  watch: {
    clickCount() {
      this.updateProgress();
    },
    getBackgroundColor() {
      this.updateColorTheme();
    },
  },
  methods: {
    hiddenModal() {
      const modal = document.querySelector(".done__modal");
      modal.style.display = "none";
      modal.classList.remove("hidden__modal");
    },
    checkCounter() {
      const modal = document.querySelector(".done__modal");
      console.log(modal);
      if (this.counter >= this.maxClicks) {
        modal.style.display = "flex";
        setTimeout(() => {
          modal.classList.add("hidden__modal");
        }, 4000);
        setTimeout(() => {
          this.hiddenModal();
        }, 4500);
        this.$emit("resetClickCount");
      }
    },
    updateProgress() {
      this.checkCounter();
      this.initialWidth = this.progressWidth;
    },
    animateBar() {
      const progress = document.querySelector(".progress");
      let count = this.progressWidth;

      const keyframes = [
        { width: "0%", opacity: 0 },
        { width: `${count}%`, opacity: 1 },
      ];

      const timing = {
        duration: 1100,
        iterations: 1,
        easing: "ease",
      };

      progress.animate(keyframes, timing);
    },
    updateColorTheme() {
      this.$refs.progress.style.background = this.getBackgroundColor;
    },
  },
  mounted() {
    this.updateColorTheme();
    this.initialWidth = this.progressWidth;
    this.$nextTick(() => {
      this.animateBar();
    });
  },
};
</script>

<style style="scss" scoped>
.progress-bar {
  width: 60%;
  background-color: #f3f3f3;
  padding: 3px;
  border-radius: 10px;
  overflow: hidden;
  height: 10px;
  margin-bottom: 20px;
  max-width: 450px;
}

.progress {
  height: 100%;
  background: #98a364;
  transition: width 0.3s;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
.hidden__modal {
  animation: 0.5s hiddenModal ease;
}
@keyframes hiddenModal {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(-80px);
  }
}
</style>
