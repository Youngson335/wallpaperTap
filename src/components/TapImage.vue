<template>
  <div class="tap">
    <Counter :clickCount="clickCount" />
    <ProgressBar :clickCount="clickCount" />
    <div class="tap__image">
      <img
        @click="incrementCounter($event)"
        src="../assets/tap_icon/2.png"
        alt=""
        draggable="false"
      />
    </div>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import Counter from "./Counter.vue";

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
  methods: {
    incrementCounter(event) {
      const img = document.getElementsByTagName("img")[0];
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
      plusVibe.textContent = "+вайб";
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
  font-size: 10px;
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
</style>
