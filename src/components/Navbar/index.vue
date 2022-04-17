<template>
  <div>
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
    <WhatsAppIcon />
  </div>
</template>

<script>
import { mapState } from "vuex";

import NavbarItems from "@/components/Navbar/NavbarItems";
import NavbarLogin from "@/components/Navbar/NavbarLogin";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default {
  name: "Navbar",
  components: {
    NavbarLogin,
    NavbarItems,
    WhatsAppIcon,
  },
  data() {
    return {
      items: [
        {
          NavbarHref: "/",
          NavbarItem: "INICIO",
          checkLogin: false,
        },
        {
          NavbarHref: "/categorias",
          NavbarItem: "CATEGORIAS",
          checkLogin: false,
        },
        {
          NavbarHref: "/favoritos",
          NavbarItem: "FAVORITOS",
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
    font-family: $akshar !important;
    font-size: $font-size-md;
    color: $blanco !important;
    &:hover {
      color: $celeste-oscuro !important;
    }
  }
}
.funko-toggle-btn {
  background-color: $negro-claro !important;
}
</style>
