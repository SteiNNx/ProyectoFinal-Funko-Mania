<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-12">
        <h1 class="funko-favoritos-title">Mis Compras</h1>
      </div>
      <div class="col-12">
        <CardMisCompras :compras="compras" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import CardMisCompras from "@/components/Cards/CardMisCompras";

export default {
  name: "MisCompras",
  components: {
    CardMisCompras,
  },
  mounted() {
    const { userLogin } = this;
    if (userLogin) {
      const { email } = userLogin?.infoUser;
      if (email) {
        this.getCompras(email);
      }
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    ...mapActions("Compras", ["getCompras"]),
  },
  computed: {
    ...mapState("User", ["userLogin"]),
    ...mapState("Compras", ["compras"]),
  },
};
</script>

<style></style>
