<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <em v-if="userLogin != null" class="funko-label-name">{{ getLabelName }}</em>
        <em v-else class="funko-label-name"> Sin Sesion </em>
      </template>
      <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
      <b-dropdown-item v-if="userLogin != null" class="funko-label-logout" @click="salir">
        Salir
        <b-icon
          class="float-end funko-label-icon"
          icon="box-arrow-right"
          scale="1"
          variant="white"
        ></b-icon>
      </b-dropdown-item>
      <b-dropdown-item v-else class="funko-label-logout" @click="ingresar">
        Ingresar
        <b-icon
          class="float-end funko-label-icon"
          icon="box-arrow-in-left"
          scale="1"
          variant="white"
        ></b-icon>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import { mapActions } from "vuex";

import { getNameLocalFromEmail } from "@/utils/functions";

export default {
  name: "NavbarLogin",
  props: {
    userLogin: null,
  },
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
    getLabelName() {
      return this?.userLogin?.email ? getNameLocalFromEmail(this.userLogin.email) : "";
    },
  },
};
</script>

<style lang="scss">
.funko-label-name {
  font-family: $dosis !important;
  font-size: $font-size-md;
  color: $blanco !important;
}
.funko-label-logout {
  font-family: $dosis !important;
  font-size: $font-size-md;
  color: $blanco !important;
}

.funko-label-icon {
  color: $negro !important;
}
</style>
