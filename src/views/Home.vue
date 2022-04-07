<template id="Home">
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="../assets/img/banner1.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="../assets/img/banner2.jpg">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/img/banner3.jpg"></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="../assets/img/banner4.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>
</template>