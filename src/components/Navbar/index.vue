<template>
  <b-navbar class="funko-nav py-md-4" toggleable="lg">
    <b-navbar-brand href="/"
      ><img src="@/assets/img/funkomania1.png" width="50" alt="FUNKO POP MANIA"
    /></b-navbar-brand>
    <b-navbar-toggle class="funko-toggle-btn" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <NavbarItems :items="items" :userLogin="userLogin" />
      <!-- Right aligned nav items -->
      <NavbarLogin :userLogin="userLogin" />
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";

import NavbarItems from "@/components/Navbar/NavbarItems";
import NavbarLogin from "@/components/Navbar/NavbarLogin";

export default {
  name: "Navbar",
  components: {
    NavbarLogin,
    NavbarItems,
  },
  data() {
    return {
      items: [
        {
          NavbarHref: "/",
          NavbarItem: "Inicio",
          checkLogin: false,
        },
        {
          NavbarHref: "/categorias",
          NavbarItem: "Categorias",
          checkLogin: false,
        },
        {
          NavbarHref: "/favoritos",
          NavbarItem: "Favoritos",
          checkLogin: true,
        },
      ],
    };
  },
  computed: {
    ...mapState("User", ["userLogin"]),
  },
};
</script>

<style lang="scss">
.funko-nav {
  background-color: $negro;
}
.funko-nav-item {
  a {
    font-family: $dosis !important;
    font-size: $font-size-md;
    color: $blanco !important;
  }
}
.funko-toggle-btn {
    background-color: $negro-claro !important;
  
}
</style>
