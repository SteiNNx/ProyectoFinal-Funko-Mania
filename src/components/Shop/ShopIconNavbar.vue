<template>
  <li class="nav-item m-md-auto m-lg-auto m-xl-auto pr-3">
    <span
      class="position-relative d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block"
    >
      <b-icon icon="cart4" scale="1.5" variant="white"></b-icon>
      <span class="cart-basket d-flex align-items-center justify-content-center">
        10
      </span>
    </span>
    <span
      class="position-relative d-block d-sm-block d-md-none d-lg-none d-xl-none"
      href="#"
    >
      <span class="cart-basket d-flex align-items-center justify-content-center">
        10
      </span>
      <em class="funko-label-name"> Carrito </em>
    </span>
  </li>
</template>

<script>
export default {
  name: "ShopIconNavbar",
  data() {
    return {
      countFunkosOnCart: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart-basket {
  font-size: $font-size-xs;
  position: absolute;
  top: -6px;
  right: -15px;
  width: 20px;
  height: 20px;
  color: $blanco;
  background-color: $celeste-oscuro;
  border-radius: 50%;
  @include breakpoint("Celular") {
    left: -15px;
  }
}
</style>
