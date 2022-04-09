<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="row">
          <ul class="list-group list-group-flush">
            <li class="list-group-item funko-li-title">Filtros:</li>
            <li
              v-for="(categoria, index) in categorias"
              :key="index"
              class="list-group-item"
            >
              <div class="form-check">
                <input
                  class="form-check-input funko-categorias-filter-check"
                  type="checkbox"
                  :id="`input-check-${index}`"
                />
                <label
                  class="form-check-label funko-li-title-item"
                  :for="`input-check-${index}`"
                >
                  {{ categoria }}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-md-8 col-lg-8">
        <CardCategorias :categorias="funkos" />
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
      categorias: ["Television", "Anime", "Rock", "Book", "Disney", "Heroe"],
    };
  },
  computed: {
    ...mapState("Funkos", ["funkos"]),
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
