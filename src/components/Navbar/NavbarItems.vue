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
    <b-nav-item class="funko-nav-item" v-if="isAdmin" href="/administracion">
      ADMINISTRACIÓN
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    items: [],
    userLogin: null,
  },
  computed: {
    isAdmin() {
      const { userLogin } = this;
      return userLogin?.infoUser?.isAdmin || false;
    },
  },
};
</script>
