<template>
  <div>
    <div v-if="showCart" class="funko-shop-cart-background"></div>
    <transition name="slide">
      <div v-if="showCart" class="funko-shop-cart">
        <div class="container-fluid cart">
          <div class="body">
            <b-button
              class="mb-2 btn-funko-primary funko-categoria-btn btn-cart-close"
              @click="closeCart"
            >
              <b-icon icon="x" aria-hidden="true"></b-icon>
            </b-button>
            <h2>Carrito</h2>
            <ShopItemFunkoCart :shopCartFunkos="shopCartFunkos" />
          </div>
          <div class="footer shadow p-3 bg-white rounded">
            <div class="row d-flex justify-content-end">
              <div class="col-12 py-4 d-flex justify-content-between">
                <span>Total</span>
                <span>{{ getLabelPrice(getTotalPriceCart) }}</span>
              </div>
              <div class="col-12">
                <b-button class="mb-2 btn-funko-primary funko-categoria-btn w-100">
                  <b-icon icon="wallet2" aria-hidden="true"></b-icon>
                  Finalizar Compra
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import ShopItemFunkoCart from "@/components/Shop/ShopItemFunkoCart";
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "ShopCart",
  components: {
    ShopItemFunkoCart,
  },
  methods: {
    ...mapActions("ShopCartFunkos", ["changeStateShowCart"]),
    closeCart() {
      this.changeStateShowCart(false);
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
  },
  computed: {
    ...mapState("ShopCartFunkos", ["showCart", "shopCartFunkos"]),
    ...mapGetters("ShopCartFunkos", ["getTotalPriceCart"]),
  },
};
</script>

<style lang="scss" scoped>
.funko-shop-cart-background {
  opacity: 0.9;
  position: fixed;
  width: 100vw;
  height: calc(100vh);
  background-color: $negro;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.funko-shop-cart {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  box-sizing: border-box;
  background-color: $blanco;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 999;
  width: 85%;
  max-width: 400px;
  min-width: 280px;
  pointer-events: auto;
  transform: translate3d(0%, 0px, 0px);
}
.cart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .body {
    height: 75%;
    h1,
    h2 {
      margin: 0;
    }
    ul {
      flex-grow: 1;
      height: inherit;
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 25%;
    max-height: 20rem;
    z-index: 10;
    @include breakpoint("Celular") {
      height: 9rem;
    }
  }
}
.btn-cart-close {
  width: 3rem;
  margin: 0.5rem 0rem;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.6s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
