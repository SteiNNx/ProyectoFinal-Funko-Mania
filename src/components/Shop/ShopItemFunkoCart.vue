<template>
  <ul>
    <li
      v-for="(shopCartFunko, index) in shopCartFunkos"
      :key="index"
      :id="`li-shop-item-${index}`"
      class="card mb-3"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="shopCartFunko?.image_url" class="img-fluid" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5>{{ shopCartFunko?.title }}</h5>
            <p class="card-text">{{ getLabelPrice(shopCartFunko?.price) }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <p class="card-text m-0 w-75">Cantidad: {{ shopCartFunko?.cantidad }}</p>
              <b-icon
                class="w-25 mr-0 funko-detalle-icon-like"
                icon="trash-fill"
                scale="1.4"
                @click="eliminarFunkoCart(shopCartFunko)"
              ></b-icon>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "ShopItemFunkoCart",
  props: {
    shopCartFunkos: {
      type: Array,
      default: [],
    },
  },
  methods: {
    ...mapActions("ShopCartFunkos", ["deleteFunkoCart"]),
    eliminarFunkoCart(funko) {
      this.deleteFunkoCart(funko);
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  overflow: auto;
  height: 100%;
  li {
    border: 0;
  }
}
</style>
