<template>
  <div class="funko-body">
    <Navbar />
    <main>
      <router-view />
    </main>
<!--     <ShopCart />
 -->    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Akshar", sans-serif;
  accent-color: #00a4cd;
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
