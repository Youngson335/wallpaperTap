<template>
  <div class="progress-bar">
    <div class="progress" :style="{ width: progressWidth + '%' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxClicks: 200,
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
  },
  methods: {
    updateProgress() {
      this.initialWidth = this.progressWidth;
    },
    animateBar() {
      const progress = document.querySelector(".progress");
      let count = this.progressWidth;

      console.log(count);

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
  },
  mounted() {
    this.initialWidth = this.progressWidth;
    this.$nextTick(() => {
      this.animateBar();
    });
  },
};
</script>

<style scoped>
.progress-bar {
  width: 60%;
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  height: 10px;
  margin-bottom: 20px;
  max-width: 450px;
}

.progress {
  height: 100%;
  background: linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105));
  transition: width 0.3s;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
</style>
