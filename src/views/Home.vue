<template>
  <div>
  <Carousel />
  <HomeParte1/>
  <InformacionExtra/>
  </div>
</template>


<script>
import Carousel from "@/components/Carousel";
import HomeParte1 from '@/views/HomeParte1';
import InformacionExtra from '@/views/InformacionExtra';


export default {
  name: "Home",
  components: {
    Carousel,
    HomeParte1,
    InformacionExtra,

  },
};
</script>
