<template>
  <footer>
    <div class="container text-center">
      <div class="row py-1 py-sm-5">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <ul>
            <li>Terminos y Condiciones</li>
            <li>Politicas de Privacidad</li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <p class="footer-siguenos">Siguenos en:</p>
          <b-icon class="m-3" icon="facebook" scale="2" variant="white"></b-icon>
          <b-icon class="m-3" icon="twitter" scale="2" variant="white"></b-icon>
          <b-icon class="m-3" icon="github" scale="2" variant="white"></b-icon>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12">
          <p class="footer-copyrigh">Funko Pop Mania!</p>
          <p class="footer-copyrigh-symbol">©</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/** HTML Elementos */
footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: $negro;
  color: $blanco;

  @include breakpoint("Celular") {
    font-size: $font-size-sm;
  }
}
ul {
  list-style: none;
  padding: 0;
}

/** Clases */
.footer-siguenos {
  padding: 0px;
  margin: 0px;
}
.footer-copyrigh {
  font-family: $bouncy;
  font-size: $font-size-xl;
  display: inline-block;

  @include breakpoint("Celular") {
    font-size: $font-size-md;
  }
}
.footer-copyrigh-symbol {
  font-size: $font-size-xl;
  display: inline-block;

  @include breakpoint("Celular") {
    font-size: $font-size-md;
  }
}
</style>
