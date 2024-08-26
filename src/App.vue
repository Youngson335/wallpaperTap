<template>
  <div class="container">
    <router-view />
    <Menu />
    <TextBackground />
    <ItemBackground />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import TextBackground from "./components/TextBackground.vue";
import ItemBackground from "./components/ItemBackground.vue";

export default {
  components: {
    Menu,
    TextBackground,
    ItemBackground,
  },
  mounted() {
    const body = document.getElementsByTagName("body")[0];
    const defaultTheme =
      "rgba(0, 0, 0, 0) linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105)) repeat scroll 0% 0% / auto padding-box border-box";
    body.style.background = localStorage.getItem("checkTheme") || defaultTheme;
  },
};
</script>
<style lang="scss">
@font-face {
  font-family: Gilroy;
  src: url(./assets/fonts/Gilroy-UltraLight.ttf);
}
@font-face {
  font-family: Donpoligrafbum;
  src: url(./assets/fonts/Donpoligrafbum.otf);
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: Donpoligrafbum;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.container {
  max-width: 400px;
  margin: 0 auto;
}

body {
  overflow: hidden;
  min-height: 100vh;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
* {
  padding: 0;
  margin: 0;
}
</style>
