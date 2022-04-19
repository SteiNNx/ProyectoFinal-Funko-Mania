<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col-12">
        <h1 class="funko-favoritos-title">Favoritos</h1>
      </div>
      <div class="col-12">
        <CardFavoritos :favoritos="funkosFavoritos" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CardFavoritos from "@/components/Cards/CardFavoritos";

export default {
  name: "Favoritos",
  components: {
    CardFavoritos,
  },
  computed: {
    ...mapState("Funkos", ["funkosFavoritos"]),
  },
};
</script>

<style lang="scss">
* {
  font-family: $akshar;
}
.funko-favoritos-title {
  color: $celeste-oscuro;
  font-size: $font-size-xl;
}
</style>
