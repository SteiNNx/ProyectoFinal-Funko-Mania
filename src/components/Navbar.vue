<template>
  <div>
    <b-navbar class="nav p-2" toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="/">FUNKO-MANIA</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/administracion">Administracion</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/registrar">Registrar</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
      <div v-if="userLogin != null">
        <span @click="logout" v-b-tooltip.hover title="Exit"
          ><b-avatar icon="door-closed"></b-avatar
        ></span>
        <span>{{ userLogin }}</span>
      </div>
      <span v-else @click="ingresar">Ingresar</span>
    </b-navbar>
  </div>
</template>

<script>
</script>

<style>
.nav {
  background-color: #00A4CD;
}
span {
  color: #fff;
}
</style>