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
  <a href="https://api.whatsapp.com/send?phone=56996005943&text=Hola!%20necesito%20ayuda%20con%20mi%20pedido" class="whatsapp" target="_blank"> <b-icon icon="chat-left-text-fill" class="whatsapp-icon"></b-icon></a>
</div>
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
.whatsapp {
  position:fixed;
  width:60px;
  height:60px;
  bottom:60px;
  right:60px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  z-index:100;
}

.whatsapp-icon {
  margin-top:13px;
}
</style>
