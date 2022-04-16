<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 my-3">
      <p class="funko-categoria-count">
        Resultados:
        <span>{{ categorias.length }}</span>
      </p>
    </div>
    <div
      v-for="(categoria, index) in categorias"
      :key="index"
      class="col-sm-12 col-md-4 col-lg-3 col-xl-3 my-3"
    >
      <CardViewFunko :funko="categoria" />
    </div>
  </div>
</template>
<script>
import CardViewFunko from "@/components/Cards/CardViewFunko";

export default {
  name: "CardCategorias",
  props: {
    categorias: {
      type: Array,
      default: [],
    },
  },
  components: {
    CardViewFunko,
  },
};
</script>

<style lang="scss">
.funko-categoria-count {
  color: $celeste;
  font-family: $dosis;
  font-style: italic;
  text-align: right;
  span {
    font-family: $akshar;
    font-weight: 700;
  }
  @include breakpoint("Celular") {
    text-align: center;
  }
}
</style>
