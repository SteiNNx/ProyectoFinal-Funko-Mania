<template>
  <div class="container-fluid py-5">
    <div class="row">
      <div class="col-sm-12 col-md-3 col-lg-3">
        <div class="row funko-filter-category">
          <div class="col-12">
            <ul class="list-group list-group-horizontal-sm-down list-group-flush">
              <li class="list-group-item funko-li-title">Filtros:</li>
              <li
                v-for="(categoria, index) in categorias"
                :key="index"
                class="list-group-item"
              >
                <div class="form-check">
                  <input
                    :id="`input-check-${index}`"
                    class="form-check-input funko-categorias-filter-check"
                    type="checkbox"
                    @click="handleOnCheck(index)"
                    v-bind:checked="categoria.isCheched"
                  />
                  <label
                    :for="`input-check-${index}`"
                    class="form-check-label funko-li-title-item"
                  >
                    {{ categoria.label }}
                  </label>
                </div>
              </li>
              <li class="list-group-item funko-li-price-item">
                <div class="form-check">
                  <b-form-input
                    id="input-range-price"
                    class="form-check-input funko-categorias-filter-check funko-range-price"
                    v-model="priceFilter"
                    type="range"
                    :min="priceMin"
                    :max="priceMax"
                    :step="priceStep"
                  ></b-form-input>
                  <label for="input-range-price" class="form-check-label">
                    {{ getLabelPrice(priceFilter) }}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9">
        <CardCategorias :categorias="getFunkosFiltered" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CardCategorias from "@/components/Cards/CardCategorias";
import {
  INIT_PRICE_FUNKO_FILTER,
  MIN_PRICE_FUNKO,
  MAX_PRICE_FUNKO,
  STEP_PRICE_FUNKO,
} from "@/utils/constants";
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "Categorias",
  components: {
    CardCategorias,
  },
  data() {
    return {
      categorias: [
        {
          label: "Television",
          isCheched: false,
        },
        {
          label: "Anime",
          isCheched: false,
        },
        {
          label: "Rock",
          isCheched: false,
        },
        {
          label: "Book",
          isCheched: false,
        },
        {
          label: "Disney",
          isCheched: false,
        },
        {
          label: "Heroe",
          isCheched: false,
        },
      ],
      priceFilter: INIT_PRICE_FUNKO_FILTER,
      priceMin: MIN_PRICE_FUNKO,
      priceMax: MAX_PRICE_FUNKO,
      priceStep: STEP_PRICE_FUNKO,
    };
  },
  methods: {
    handleOnCheck(index) {
      this.categorias[index].isCheched = !this.categorias[index]?.isCheched;
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
  },
  computed: {
    ...mapState("Funkos", ["funkos"]),
    getFunkosFiltered() {
      const { priceFilter } = this;

      const filtersCategory = this.categorias.filter(({ isCheched }) => isCheched);
      const canFilterCategory = filtersCategory.length > 0;

      const newFunkosFilteredCategory = canFilterCategory
        ? this.funkos.filter((funko) => {
            let isVisible = filtersCategory.some(
              (filter) => funko.category == filter.label
            );
            return isVisible;
          })
        : this.funkos;

      const newFunkosFilteredCategoryWithPrice = newFunkosFilteredCategory?.filter(
        (funko) => {
          return funko?.price <= priceFilter;
        }
      );

      return newFunkosFilteredCategoryWithPrice;
    },
  },
};
</script>

<style lang="scss">
.funko-li-title {
  color: $celeste-oscuro;
  font-family: $dosis;
  font-size: $font-size-xl;
  border-bottom: 1px solid $celeste !important;
}
.funko-li-title-item {
  font-family: $dosis;
  font-weight: 500;
}
.funko-range-price {
  position: relative !important;
}
.funko-li-price-item {
  font-family: fantasy;
  font-size: $font-size-md;
  font-weight: 500;
  text-align: right;
  @include breakpoint("Celular") {
    text-align: center;
  }
}
.funko-filter-category {
  position: sticky;
  top: 4rem;
  height: calc(100vh - 4rem);
  overflow-y: auto;
}
</style>
