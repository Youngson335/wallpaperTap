<template>
  <div class="counter">
    <h2>вайб + {{ counter }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    clickCount: {
      type: Number,
    },
  },
  computed: {
    counter() {
      if (this.clickCount === null) {
        return 0;
      } else {
        return this.clickCount;
      }
    },
  },
};
</script>
<style lang="scss">
.counter {
  margin-bottom: 15px;
  animation: showCounter 0.7s ease;
  @keyframes showCounter {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>
