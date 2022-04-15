<template>
  <div class="row">
    <div
      v-for="(favorito, index) in favoritos"
      :key="index"
      class="col-sm-12 col-md-4 col-lg-3 col-xl-2"
    >
      <CardViewFunko :funko="favorito" showLike />
    </div>
  </div>
</template>

<script>
import CardViewFunko from "@/components/Cards/CardViewFunko";

export default {
  name: "CardFavoritos",
  props: {
    favoritos: {
      type: Array,
      default: [],
    },
  },
  components: {
    CardViewFunko,
  },
};
</script>
