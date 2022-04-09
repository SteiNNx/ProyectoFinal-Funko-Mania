<template>
  <div class="funko-carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      indicators
      background="#ccc"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="funko-carousel__img" img-src="@/assets/img/BANNER1.png">
      </b-carousel-slide>

      <b-carousel-slide class="funko-carousel__img" img-src="@/assets/img/BANNER2.png">
      </b-carousel-slide>

      <b-carousel-slide
        class="funko-carousel__img"
        img-src="../assets/img/BANNER3.png"
      ></b-carousel-slide>

      <b-carousel-slide class="funko-carousel__img" img-src="../assets/img/BANNER4.png">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.funko-carousel {
  height: 100%;
  &__img {
    width: 100%;
    height: 30vw;
    object-fit: cover;
  }
}
</style>
