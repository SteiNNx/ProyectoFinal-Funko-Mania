<template>
  <div class="card border-0">
    <img
      :src="funko?.image_url"
      class="card-img-top funko-funko-img"
      :alt="`Funko CardImageTop ${funko?.id}`"
      @click="onClickViewDetail(funko)"
    />
    <div class="card-body">
      <p class="funko-funko-category">{{ funko.category }}</p>
      <h5 class="funko-funko-tittle">{{ funko?.title }}</h5>
      <b-icon
        v-if="showLike"
        class="funko-detalle-icon-like"
        icon="heart-fill"
        scale="1.4"
        @click="eliminarFunkoFavoritos(funko)"
      ></b-icon>
      <p class="funko-funko-price">
        {{ getLabelPrice(funko?.price) }}
      </p>
      <button
        class="btn btn-primary rounded-pill btn-funko-primary funko-funko-btn w-100"
        @click="onClickViewDetail(funko)"
      >
        Detalle
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "CardViewFunko",
  props: {
    funko: {
      type: Object,
      default: {},
    },
    showLike: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions("Funkos", ["setFunkoDetalle", "deleteFunkoFavorito"]),
    eliminarFunkoFavoritos(funko) {
      this.deleteFunkoFavorito(funko);
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    onClickViewDetail(funko) {
      this.setFunkoDetalle(funko);
      this.$router.push(`/detalle/${funko?.id}`);
    },
  },
};
</script>

<style lang="scss">
.funko-funko-img {
  object-fit: contain;
  height: 15rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
}

.funko-funko-category {
  color: $celeste-oscuro;
  font-family: $bouncy;
  font-style: italic;
  margin: 0rem;
}

.funko-funko-tittle {
  font-size: $font-size-sm;
  font-weight: 700;
  display: inline-flex;
  text-align: initial;
  text-transform: uppercase;
  min-height: 7rem;
  @include breakpoint("Celular") {
    min-height: 3rem;
  }
}

.funko-funko-price {
  font-family: fantasy;
  font-size: $font-size-md;
  font-weight: 500;
}

.funko-funko-btn {
  font-family: $bouncy;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
