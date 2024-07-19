<template>
  <div class="textPNG">
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
    <img class="textPNG-img" src="../assets/text-bckg.png" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.textPNG {
  position: absolute;
  top: 1%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  &-img {
    width: 140px;
    animation: scrollText 7s linear infinite;
    transition: opacity 0.4s;
    --startScroll: 0;
    --endScroll: -100%;
  }
  @keyframes scrollText {
    0% {
      opacity: 0.4;
      transform: translateX(var(--startScroll));
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
      transform: translateX(var(--endScroll));
    }
  }
}
</style>
