<template>
  <div class="preview__wallpaper">
    <img :src="checkWallpaperFromLocalStorage" alt="" />
  </div>
</template>
<script>
export default {
  computed: {
    checkWallpaperFromLocalStorage() {
      return localStorage.getItem("activeWallpaper");
    },
  },
};
</script>
<style lang="scss">
.preview {
  &__wallpaper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64vh;
    img {
      width: 185px;
      border-radius: 10px;
      box-shadow: 0px 1px 65px -6px black;
      animation: showWallpaperPreview 0.7s ease;
      animation: animateImage 3s infinite;
      @keyframes showWallpaperPreview {
        0% {
          opacity: 0;
          transform: translateY(-25px);
        }
        60% {
          transform: translateY(5px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      @keyframes animateImage {
        0% {
          scale: 1;
        }
        50% {
          scale: 1.03;
        }
        100% {
          scale: 1;
        }
      }
    }
  }
}
</style>
