<template>
  <div class="wallpaper__page">
    <h2>Обои</h2>
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
h2 {
  margin-top: 90px;
  margin-bottom: 10px;
}
</style>
