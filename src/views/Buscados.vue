<template>
  <div class="container-fluid">
    <div>
      <h1 class="funko-home-title mt-5">FUNKOS MAS BUSCADOS</h1>
    </div>
    <hr />
    <p class="mt-4 mb-4 sub-text">
      Sin duda alguna, los Funko Pop más buscados no se limitan a estos pocos,
      pero si podemos decir que estos en concreto se han ganado a pulso el
      corazón de todos los fanáticos y fanáticas de los Funko Pop y de las
      series y películas más conocidas. Echa un vistazo a todos los Funko Pop
      que puedas encontrarte y escoge por ti mismo cual debería ser el que
      adorne tu estantería, y nada mejor para encontrarlo que haciendo uso de la
      nuestra tienda online referente de Funkos.
    </p>
    <div class="row m-5">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          title="Harry Potter"
          img-src="@/assets/img/harry.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <div>
            <!-- Using modifiers -->
            <b-button class="btn-funko-primary" v-b-modal.my-modal
              >Más detalles</b-button
            >
            <!-- The modal -->
            <b-modal id="my-modal"
              >Es protagonista de una serie de novelas fantásticas escrita por
              la autora británica J. K. Rowling, en la que se describen las
              aventuras del joven aprendiz de magia y hechicería Harry Potter y
              sus amigos</b-modal
            >
          </div>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          title="Iron Man"
          img-src="@/assets/img/star.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <div>
            <!-- Using modifiers -->
            <b-button class="btn-funko-primary" v-b-modal.my-modal2
              >Más detalles</b-button
            >
            <!-- The modal -->
            <b-modal id="my-modal2"
              >Iron Man es un superhéroe que aparece en los cómics
              estadounidenses publicados por Marvel Comics. El personaje fue
              cocreado por el escritor y editor Stan Lee</b-modal
            >
          </div>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          title="Batman"
          img-src="@/assets/img/batman.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <div>
            <!-- Using modifiers -->
            <b-button class="btn-funko-primary" v-b-modal.my-modal3
              >Más detalles</b-button
            >
            <!-- The modal -->
            <b-modal id="my-modal3"
              >Conocido inicialmente como Bat-Man y en español como el Hombre
              Murciélago, es un personaje de cómic lucha por la justicia y es
              propiedad de DC Comics.</b-modal
            >
          </div>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          title="Daenerys y Drogon"
          img-src="@/assets/img/tron.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <div>
            <!-- Using modifiers -->
            <b-button class="btn-funko-primary" v-b-modal.my-modal4
              >Más detalles</b-button
            >
            <!-- The modal -->
            <b-modal id="my-modal4"
              >La reina Daenerys Targaryen, también llamada Daenerys de la
              Tormenta, Rompedora de Cadenas, Madre de Dragones, acompañada de
              Drogon que es uno de sus leales dragones.</b-modal
            >
          </div>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <b-card
          title="Ned Flanders Demonio"
          img-src="@/assets/img/flanders.png"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2"
        >
          <div>
            <!-- Using modifiers -->
            <b-button class="btn-funko-primary" v-b-modal.my-modal5
              >Más detalles</b-button
            >
            <!-- The modal -->
            <b-modal id="my-modal5"
              >Nedward Flanders, más conocido como Ned, es un personaje ficticio
              de la serie de televisión de dibujos animados Los Simpson. Es
              reconocido por ser el buen vecino de Homero.</b-modal
            >
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  width: 80%;
  height: 2px;
  background-color: $negro;
}
.funko-home-title {
  text-transform: uppercase;
  color: $celeste;
  font-family: $akshar;
  font-size: 600;
  text-align: center;
}

* {
  font-family: $akshar;
  text-align: justify;
}

.sub-text {
  margin-left: 30px;
  margin-right: 30px;
}

Img {
  width: 100%;
  height: 300px;
}
</style>
