<template>
  <div class="row">
    <div
      v-for="(categoria, index) in categorias"
      :key="index"
      class="col-sm-12 col-md-6 col-lg-4 my-3"
    >
      <div class="card border-0">
        <img
          :src="categoria?.image_url"
          class="card-img-top funko-categoria-img"
          :alt="`Funko CardImageTop ${index}`"
          @click="onClickViewDetail(categoria)"
        />
        <div class="card-body">
          <p class="funko-categoria-category">{{ categoria.category }}</p>
          <h5 class="funko-categoria-tittle">{{ categoria?.title }}</h5>
          <p class="funko-categoria-price">
            {{ getLabelPrice(categoria?.price) }}
          </p>
          <button
            class="btn btn-primary rounded-pill btn-funko-primary funko-categoria-btn w-100"
            @click="onClickViewDetail(categoria)"
          >
            Detalle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "CardCategorias",
  props: {
    categorias: [],
  },
  methods: {
    ...mapActions("Funkos", ["setFunkoDetalle"]),
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    onClickViewDetail(categoria) {
      this.setFunkoDetalle(categoria);
      this.$router.push(`/detalle/${categoria?.id}`);
    },
  },
};
</script>

<style lang="scss">
.funko-categoria-img {
  object-fit: contain;
  height: 15rem;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
}

.funko-categoria-category {
  color: $celeste-oscuro;
  font-family: $bouncy;
  font-style: italic;
  margin: 0rem;
}

.funko-categoria-tittle {
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

.funko-categoria-price {
  font-family: fantasy;
  font-size: $font-size-md;
  font-weight: 500;
}
.funko-categoria-btn {
  font-family: $bouncy;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
