<template>
  <div class="modal__success">
    <div class="success__icon">
      <img src="../assets/icons/success__icon.svg" alt="" />
    </div>
    <div class="success__text">
      <p>Получено</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.modal__success {
  display: none;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 3%;
  background-color: #678f40;
  color: rgb(0, 0, 0);
  z-index: 1000;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  max-width: 200px;
  box-shadow: 0px 0px 30px 0px black;
  animation: 0.5s showModal ease;
  @keyframes showModal {
    0% {
      transform: translateY(-80px);
    }
    60% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}

.success {
  &__icon {
    & img {
      width: 30px;
    }
  }
  &__text {
    p {
      padding-top: 4px;
      color: white;
      font-size: 13px;
    }
  }
}
</style>
