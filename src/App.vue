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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Nunito", sans-serif;
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
