<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="row">
          <div class="col-12">
            <ul class="list-group  list-group-horizontal-sm-down list-group-flush">
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
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <CardCategorias :categorias="getFunkosFiltered" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import CardCategorias from "@/components/CardCategorias";

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
    };
  },
  methods: {
    handleOnCheck(index) {
      this.categorias[index].isCheched = !this.categorias[index]?.isCheched;
    },
  },
  mounted() {},
  computed: {
    ...mapState("Funkos", ["funkos"]),
    getFunkosFiltered() {
      const filters = this.categorias.filter(({ isCheched }) => isCheched);
      const canFilter = filters.length > 0;

      const newFunkosFiltered = canFilter
        ? this.funkos.filter((funko) => {
            let isVisible = filters.some((filter) => funko.category == filter.label);
            return isVisible;
          })
        : this.funkos;

      return newFunkosFiltered;
    },
  },
};
</script>

<style lang="scss">
.funko-li-title {
  color: $celeste-oscuro;
  font-family: $bouncy;
  font-size: $font-size-xl;
  border-bottom: 1px solid $celeste !important;
}
.funko-li-title-item {
  font-family: $bouncy;
  font-weight: 500;
}

</style>
