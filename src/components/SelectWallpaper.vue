<template>
  <div v-for="wallpaper of checkWallpapers">
    <img :src="wallpaper.img" alt="" />
    {{ wallpaper.id }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWallpapers"]),
    checkWallpapers() {
      return this.getWallpapers;
    },
  },
};
</script>

<style lang=""></style>
