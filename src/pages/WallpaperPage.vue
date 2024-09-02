<template>
  <div class="wallpaper__page">
    <div class="wallpaper__title">
      <h2>Обои</h2>
    </div>

    <WallpaperMenu />
    <router-view />
  </div>
</template>
<script>
import WallpaperMenu from "../components/WallpaperMenu.vue";
export default {
  components: {
    WallpaperMenu,
  },
};
</script>
<style lang="scss" scoped>
.wallpaper {
  &__title {
    padding-top: 60px;
  }
  &__page {
  }
}
</style>
