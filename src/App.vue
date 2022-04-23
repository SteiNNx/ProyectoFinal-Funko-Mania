<template>
  <div class="funko-body">
    <Navbar v-if="!showCheckout" />
    <main>
      <router-view />
    </main>
    <Footer v-if="!showCheckout" />
    <ShopCart v-if="!showCheckout" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import Navbar from "@/components/Navbar";
import ShopCart from "@/components/Shop/ShopCart";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    ShopCart,
  },
  mounted() {
    this.getInitCallApiFunkos();
  },
  methods: {
    ...mapActions("Funkos", ["getInitCallApiFunkos"]),
  },
  computed: {
    ...mapState("ShopCartFunkos", ["showCheckout"]),
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: $dosis;
  accent-color: #00a4cd;
}

h1,
h2,
h3,
h4,
h5,
a,
em {
  font-family: $akshar;
}

main {
  flex: 1;
}

.funko-body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
