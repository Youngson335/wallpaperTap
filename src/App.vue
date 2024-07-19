<template>
  <router-view />
  <Menu />
  <TextBackground />
  <ItemBackground />
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

body {
  // background: radial-gradient(
  //     at 24.182683184015975% 87.84145538818858%,
  //     hsla(0, 0%, 0%, 1) 0%,
  //     hsla(0, 0%, 0%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 53.317331315594885% 51.05598127622819%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 1) 0%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 45.13970978683963% 80.279989217324%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 1) 0%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 67.2432457735036% 85.68203355586652%,
  //     hsla(0, 0%, 0%, 1) 0%,
  //     hsla(0, 0%, 0%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 29.208298789205834% 64.9450943700276%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 1) 0%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 90.8048422852741% 45.22702281854205%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 1) 0%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 32.88250044865868% 88.06380896124169%,
  //     hsla(0, 0%, 0%, 1) 0%,
  //     hsla(0, 0%, 0%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 55.34842137687335% 78.87859660797854%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 1) 0%,
  //     hsla(180, 32.00000000000001%, 70.58823529411765%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 24.246204240042847% 70.95320191187552%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 1) 0%,
  //     hsla(167.99999999999997, 17.857142857142865%, 43.92156862745098%, 0) 100%
  //   ),
  //   radial-gradient(
  //     at 70.84764293741219% 63.14286712264692%,
  //     hsla(0, 0%, 0%, 1) 0%,
  //     hsla(0, 0%, 0%, 0) 100%
  //   );
  background: linear-gradient(rgb(136, 85, 88), rgb(53, 118, 105));
  // background-image: url(./assets/background.jpg);
  min-height: 100vh;
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center;

  // дополнительные темы
  // background: linear-gradient(rgb(25, 36, 101), rgb(63, 57, 147));
  // background: linear-gradient(rgb(207, 28, 20), rgb(149, 23, 199));
  // background: linear-gradient(
  //   rgb(29, 171, 210),
  //   rgb(245, 139, 182)
  // );
  // background: linear-gradient(
  //   rgb(138, 137, 123),
  //   rgb(189, 182, 250)
  // );
  // background: linear-gradient(rgb(105, 95, 38), rgb(97, 189, 186));
}
* {
  padding: 0;
  margin: 0;
}
</style>
