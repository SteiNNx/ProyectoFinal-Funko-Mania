<template>
  <b-navbar class="funko-nav py-md-4" toggleable="lg">
    <b-navbar-brand href="/"
      ><img src="@/assets/img/funkomania1.png" width="50" alt="FUNKO POP MANIA"
    /></b-navbar-brand>
    <b-navbar-toggle class="funko-toggle-btn" target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="funko-nav-item" href="/">Inicio</b-nav-item>
        <b-nav-item class="funko-nav-item" href="/categorias">Categorias</b-nav-item>
        <b-nav-item class="funko-nav-item" href="/favoritos">Favoritos</b-nav-item>
        <b-nav-item class="funko-nav-item" href="#">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <NavbarLogin />
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavbarLogin from "@/components/NavbarLogin";

export default {
  name: "Navbar",
  components: {
    NavbarLogin,
  },
};
</script>

<style lang="scss">
.funko-nav {
  background-color: $negro;
}
.funko-nav-item {
  a {
    font-family: $bouncy !important;
    font-size: $font-size-md;
    color: $blanco !important;
  }
}
.funko-toggle-btn {
  background-color: $negro-claro;
}
</style>
