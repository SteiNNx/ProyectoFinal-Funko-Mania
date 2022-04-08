<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#logo"
      ><img src="@/assets/img/funkomania.png" width="50" alt="FUNKO POP MANIA"
    /></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Inicio</b-nav-item>
        <b-nav-item href="/Categorias">Categorias</b-nav-item>
        <b-nav-item href="#">Favoritos</b-nav-item>
        <b-nav-item href="#">Blog</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
//import UserLogin from "@/components/UserLogin";

export default {
  name: "Navbar",
  components: {
    // UserLogin,
  },
};
</script>

<style></style>
