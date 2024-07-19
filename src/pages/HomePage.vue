<template>
  <div class="home">
    <TapImage />
  </div>
</template>

<script>
import TapImage from "../components/TapImage.vue";

export default {
  components: {
    TapImage,
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
