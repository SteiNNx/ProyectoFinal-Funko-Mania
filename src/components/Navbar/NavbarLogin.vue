<template>
  <b-navbar-nav class="ml-auto">
    <template>
      <ShopIconNavbar />
    </template>
    <b-nav-item-dropdown class="funko-dropdown-menu" right>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <em v-if="userLogin != null" class="funko-label-name">{{ getLabelName }}</em>
        <em v-else class="funko-label-name"> SIN SESIÓN </em>
      </template>
      <!--<b-dropdown-item href="#">Profile</b-dropdown-item>-->
      <template v-if="userLogin != null">
        <b-dropdown-item class="funko-label-logout" @click="salir">
          <span>Mis Compras</span>
          <b-icon
            class="float-end funko-label-icon"
            icon="cart-check-fill"
            scale="1"
            variant="black"
          ></b-icon>
        </b-dropdown-item>
        <b-dropdown-item class="funko-label-logout" @click="salir">
          <span>Salir</span>
          <b-icon
            class="float-end funko-label-icon"
            icon="box-arrow-right"
            scale="1"
            variant="black"
          ></b-icon>
        </b-dropdown-item>
      </template>
      <b-dropdown-item v-else class="funko-label-logout" @click="ingresar">
        <span>Ingresar</span>
        <b-icon
          class="float-end funko-label-icon"
          icon="box-arrow-in-left"
          scale="1"
          variant="black"
        ></b-icon>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import { mapActions } from "vuex";

import { getNameLocalFromEmail } from "@/utils/functions";
import ShopIconNavbar from "@/components/Shop/ShopIconNavbar.vue";

export default {
  name: "NavbarLogin",
  components: { ShopIconNavbar },
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
      return this?.userLogin?.infoUser?.nombre
        ? this?.userLogin?.infoUser?.nombre
        : "Sin Nombre";
    },
  },
};
</script>

<style lang="scss">
.funko-label-name {
  font-family: $akshar !important;
  font-size: $font-size-md;
  color: $blanco !important;
}
.funko-label-logout {
  font-family: $akshar !important;
  font-size: $font-size-md;
  color: $blanco !important;
  a {
    display: flex;
    justify-content: space-between;
  }
}
.funko-dropdown-menu {
  ul {
    width: 15rem;
  }
}

.funko-label-icon {
  color: $negro !important;
}
</style>
