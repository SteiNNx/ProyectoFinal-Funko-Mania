<template>
  <div class="container">
    <div class="m-4 jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="">
          <b-icon icon="cart-check" animation="throb" aria-hidden="true"></b-icon> Compra
          realizada con exito
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CheckoutPostCompra",
  mounted() {
    setTimeout(() => {
      this.changeStateShowCart(false);
      this.changeStateShopCartFunkos([]);
      this.changeStateShowCheckout(false);
      this.$toast.success("Compra realizada");
      this.$router.push("/");
    }, 6000);
  },
  methods: {
    ...mapActions("ShopCartFunkos", [
      "changeStateShowCart",
      "changeStateShowCheckout",
      "changeStateShopCartFunkos",
    ]),
  },
};
</script>

<style></style>
