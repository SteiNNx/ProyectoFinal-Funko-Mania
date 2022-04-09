<template>
  <div class="funko-body">
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
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
  font-family: "Nunito", sans-serif;
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
