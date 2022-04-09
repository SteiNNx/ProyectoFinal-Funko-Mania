<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <em class="funko-label-name">{{ getLabelName }}</em>
      </template>
      <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
      <b-dropdown-item class="funko-label-logout" @click="salir">
        Salir
        <b-icon
          class="float-end funko-label-icon"
          icon="box-arrow-right"
          scale="1"
          variant="white"
        ></b-icon>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { getNameLocalFromEmail } from "@/utils/functions";

export default {
  name: "NavbarLogin",
  mounted() {
    this.getUserLogin();
  },
  methods: {
    ...mapActions("User", ["getUserLogin", "logoutUser"]),
    async salir() {
      await this.logoutUser();
      this.$toast.warning("Sesion Cerrada");
      this.$router.push("/ingresar");
    },
    ingresar() {
      this.$router.push("/ingresar");
    },
  },
  computed: {
    ...mapState("User", ["userLogin"]),
    getLabelName() {
      return this?.userLogin?.email ? getNameLocalFromEmail(this.userLogin.email) : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.funko-label-name {
  font-family: $bouncy !important;
  font-size: $font-size-md;
  color: $blanco !important;
}
.funko-label-logout {
  font-family: $bouncy !important;
  font-size: $font-size-md;
  color: $blanco !important;
}

.funko-label-icon {
  color: $negro !important;
}
</style>
