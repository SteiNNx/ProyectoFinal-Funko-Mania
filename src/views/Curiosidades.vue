<template>
  <div class="accordion" role="tablist">
    <div class="container mt-5 mb-5">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Sabias que...</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card
        class="mt-5"
        img-src="@/assets/img/funkoverse.png"
        img-alt="funkoverse"
        img-right
      >
        <b-card-text>
          Tantas son las licencias que dispone que Funko ya se ha montado su
          propio universo con un curioso juego de mesa llamado FunkoVerse,
          reuniendo una variedad de personajes tales como Batman, Harry Potter o
          incluso Rick y Morty.
        </b-card-text>
      </b-card>

      <b-card
        class="mt-5"
        img-src="@/assets/img/caros.png"
        img-alt="funkoverse"
        img-right
      >
        <b-card-text>
          El éxito de los Funko Pops fue tal que hoy día hay ciertas figuras que
          valen una fortuna, ya sea porque se lanzaron pocas tiradas en su
          momento o porque directamente se realizó una edición especial de la
          misma. Dentro de los Funko Pops más exclusivos que son casi imposibles
          de conseguir encontramos figuras como Loki, con un valor de más de
          1.000 dólares, un Green Lantern que brilla en la oscuridad por un
          valor de hasta 2.400 dólares o la joya de la corona, una figura del
          personaje de La naranja mecánica Alex DeLarge que brilla en la
          oscuridad, cuyo precio llega a los 13.300 dólares.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `
          Un 23 de octubre de 1998 se lanzó en Estados Unidos las figuras conocidas como Funko Pops y desde entonces nada sería lo mismo en todo el mundo. Estas pequeñas figuras cabezonas se caracterizan por representar personajes de todo tipo, desde personajes de cine y series hasta celebridades reales. Se estima que existen mas de 17 mil Figuras Pop en todo el mundo. La popularidad de estos muñecos va creciendo a medida que las series, películas o videojuegos se van poniendo de moda con sus nuevos estrenos..
        `,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: $akshar;
}
.principal {
  background-image: "../assets/img/banner8.png";
  background-repeat: no-repeat;
}
.banner8 {
  width: 100%;
  height: 600px;
}
.funko-home-title {
  text-transform: uppercase;
  text-align: center;
  color: $celeste;
  font-family: $akshar;
  font-size: 600;
}
</style>
