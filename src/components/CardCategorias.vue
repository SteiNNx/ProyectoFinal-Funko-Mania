<template>
  <div class="row">
    <div
      v-for="(categoria, index) in categorias"
      :key="index"
      class="col-sm-12 col-md-4 col-md-4 my-3"
    >
      <div class="card">
        <img
          :src="categoria?.image_url"
          class="card-img-top funko-categoria-img"
          alt="..."
        />
        <div class="card-body">
          <p class="funko-categoria-category">{{ categoria.category }}</p>
          <h5 class="funko-categoria-tittle">{{ categoria?.title }}</h5>
          <p class="funko-categoria-price">
            {{ getLabelPrice(categoria?.price) }}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "CardCategorias",
  props: {
    categorias: [],
  },
  methods: {
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    getLabelCategoria(category) {},
  },
};
</script>

<style lang="scss">
.funko-categoria-img {
  object-fit: contain;
  height: 15rem;
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
}

.funko-categoria-price {
  font-family: fantasy;
  font-size: $font-size-md;
  font-weight: 500;
}
</style>
