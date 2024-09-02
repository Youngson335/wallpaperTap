<template>
  <div class="tap">
    <Counter :clickCount="clickCount" />
    <ProgressBar :clickCount="clickCount" @resetClickCount="resetClickCount" />
    <div class="tap__image">
      <div
        ref="imageBorder"
        class="image__wallp"
        @click="incrementCounter($event)"
      >
        <img :src="checkActiveImageFromLocalStorage" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import Counter from "./Counter.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProgressBar,
    Counter,
  },
  data() {
    return {
      clickCount: 0,
      maxClicks: 200,
    };
  },
  watch: {
    getBackgroundColor() {
      this.addBorderStyle();
    },
  },
  computed: {
    ...mapGetters(["getBackgroundColor"]),
    checkActiveImageFromLocalStorage() {
      return localStorage.getItem("activeWallpaper");
    },
  },
  methods: {
    addBorderStyle() {
      this.$refs.imageBorder.style.border = `6px solid ${this.getBackgroundColor}`;
    },
    resetClickCount() {
      this.clickCount = 0;
      localStorage.setItem("counter", 0);
    },
    incrementCounter(event) {
      const img = document.querySelector(".image__wallp");
      const rect = img.getBoundingClientRect();
      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;
      const DEG = 50;
      const tiltX = (offsetY / rect.height) * DEG;
      const tiltY = (offsetX / rect.width) * -DEG;

      img.style.setProperty("--tiltX", `${tiltX}deg`);
      img.style.setProperty("--tiltY", `${tiltY}deg`);

      setTimeout(() => {
        img.style.setProperty("--tiltX", `0deg`);
        img.style.setProperty("--tiltY", `0deg`);
      }, 100);

      if (this.clickCount < this.maxClicks) {
        this.clickCount++;
        localStorage.setItem("counter", this.clickCount);
      }

      //plus vibe
      let plusVibe = document.createElement("div");
      const tapImage = document.querySelector(".tap__image");
      plusVibe.classList.add("plus__vibe");
      plusVibe.textContent = "+1";
      plusVibe.style.left = `${event.pageX}px`;
      plusVibe.style.top = `${event.pageY}px`;
      console.log(event.clientX - rect.left);

      tapImage.parentElement.appendChild(plusVibe);
      setTimeout(() => {
        plusVibe.remove();
      }, 2000);
    },
  },
  mounted() {
    this.addBorderStyle();
    this.clickCount = localStorage.getItem("counter");
  },
};
</script>
<style lang="scss">
.tap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  img {
    cursor: pointer;
    width: 300px;
    display: block;
    transition: transform 0.1s ease;
    --tiltX: 0deg;
    --tiltY: 0deg;
    transform: rotateX(var(--tiltX)) rotateY(var(--tiltY));
  }
}
.tap__image {
  position: relative;
  animation: showImage 0.7s cubic-bezier(0.49, 0.22, 0.25, 1);
  @keyframes showImage {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
.plus__vibe {
  position: absolute;
  animation: hiddenPlusVibe 2s forwards;
  font-size: 40px;
  user-select: none;
  cursor: pointer;
  @keyframes hiddenPlusVibe {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
}
.image__wallp {
  height: 220px;
  width: 220px;
  background: #f8f7f7;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 20px 5px rgb(5 5 5 / 67%);
  cursor: pointer;
  display: block;
  transition: transform 0.1s ease;
  --tiltX: 0deg;
  --tiltY: 0deg;
  transform: rotateX(var(--tiltX)) rotateY(var(--tiltY));
  border: 6px;
  img {
    object-fit: cover;
    object-position: center;
    width: 230px;
    margin: 0 auto;
    position: relative;
    bottom: 86px;
  }
}
</style>
