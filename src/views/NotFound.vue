<template>
  <div class="container py-5">
    <div class="jumbotron jumbotron-fluid bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="funko-not-found-title">Page Not Found</h1>
            <p class="funko-not-found-text">No pudimos encontrar la página que buscas.</p>
          </div>
          <div class="col-12 d-flex justify-content-center">
            <img src="@/assets/img/not-found.gif" alt="john-travolta-meme" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.funko-not-found-title {
  color: $celeste-oscuro;
  font-family: $bouncy;
  font-size: $font-size-xl;
  font-weight: 500;
  line-height: 1.2;
}
.funko-not-found-text {
  font-family: $bouncy;
  font-size: $font-size-sm;
  font-weight: 500;
  line-height: 1.2;
}

img {
  @include breakpoint("Celular") {
    height: 224px;
    width: 216px;
  }
}
</style>
