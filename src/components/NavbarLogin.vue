<template>
  <b-navbar-nav class="ml-auto">
    <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template #button-content>
        <em class="funko-label-name">User</em>
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "NavbarLogin",
};
</script>

<style lang="scss" scoped>
.funko-label-name {
  font-family: $bouncy !important;
  font-size: $font-size-md;
  color: $blanco !important;
}
</style>
