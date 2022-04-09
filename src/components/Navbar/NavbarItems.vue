<template>
  <b-navbar-nav>
    <b-nav-item
      v-for="(item, index) in items"
      :key="index"
      class="funko-nav-item"
      :href="item?.NavbarHref"
    >
      {{ item?.NavbarItem }}
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    items: [],
  },
};
</script>

<style></style>
