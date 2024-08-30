<template>
  <div class="select" ref="selectContainer">
    <div
      class="select__wallpaper"
      v-for="wallpaper in checkWallpapers"
      :key="wallpaper.id"
      @click="selectWallpaper(wallpaper)"
      :class="{ selected__wallpaper: wallpaper.id === activeWallpaper }"
      :ref="`wallpaper-${wallpaper.id}`"
    >
      <img class="select__wallpaper--image" :src="wallpaper.img" alt="" />
      <p class="select__wallpaper--p">
        Стоимость: <strong>{{ wallpaper.count }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeWallpaper: Number(localStorage.getItem("activeWallpaperID")) || 1,
    };
  },
  computed: {
    ...mapGetters(["getWallpapers"]),
    checkWallpapers() {
      return this.getWallpapers;
    },
  },
  methods: {
    selectWallpaper(wallpaper) {
      this.activeWallpaper = wallpaper.id;
      localStorage.setItem("activeWallpaperID", wallpaper.id);
      localStorage.setItem("activeWallpaper", wallpaper.img);
      localStorage.setItem("activeWallpaperCounter", wallpaper.count);
    },
    scrollToActiveWallpaper() {
      this.$nextTick(() => {
        const activeElement = this.$refs[`wallpaper-${this.activeWallpaper}`];
        if (activeElement && activeElement.length) {
          activeElement[0].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      });
    },
  },
  mounted() {
    if (!Number(localStorage.getItem("activeWallpaperID"))) {
      localStorage.setItem("activeWallpaperID", 1);
    }
    if (!localStorage.getItem("activeWallpaper")) {
      localStorage.setItem("activeWallpaper", "/img/1.7642f615.jpg");
    }
    if (!localStorage.getItem("activeWallpaperCounter")) {
      localStorage.setItem("activeWallpaperCounter", 400);
    }
    this.scrollToActiveWallpaper();
  },
};
</script>

<style lang="scss">
.select {
  overflow: scroll;
  max-height: 55vh;
  padding: 0 14px;
  padding-top: 10px;

  &__wallpaper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background: #53583b;
    padding: 7px;
    border-radius: 10px;
    animation: showWallpaperBlocks 0.6s ease;
    transition: all 0.2s;

    opacity: 0.8;

    @keyframes showWallpaperBlocks {
      0% {
        opacity: 0;
        transform: translateY(15px);
      }
      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    &--image {
      width: 60px;
      height: 40px;
      object-fit: cover;
      border-radius: 6px;
    }

    &--p {
      font-size: 15px;
    }
  }
}

.selected__wallpaper {
  transition: all 0.2s;
  background: rgb(255 255 255);
  color: black;
  scale: 1.05;
  filter: blur(0px);
  opacity: 1;
}
</style>
