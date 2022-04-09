<template>
  <b-navbar-nav>
    <template v-for="(item, index) in items">
      <b-nav-item
        :key="index"
        class="funko-nav-item"
        :href="item?.NavbarHref"
        v-if="!item?.checkLogin || userLogin"
      >
        {{ item?.NavbarItem }}
      </b-nav-item>
    </template>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    items: [],
    userLogin: null,
  },
};
</script>

<style></style>
