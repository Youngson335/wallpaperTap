<template>
  <div class="itemBCKG">
    <img class="itemBCKG-top" src="../assets/items/top-item.svg" alt="" />
    <img class="itemBCKG-center" src="../assets/items/center-item.svg" alt="" />
    <img class="itemBCKG-bottom" src="../assets/items/bottom-item.svg" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.itemBCKG {
  position: relative;
  top: 0;
  z-index: -4;
  opacity: 0.6;
  &-top {
    position: fixed;
    top: 4%;
    left: -20px;
  }
  &-center {
    position: fixed;
    top: -10%;
    left: -10px;
  }
  &-bottom {
    position: fixed;
    top: 25%;
    left: -10px;
  }
}
</style>
