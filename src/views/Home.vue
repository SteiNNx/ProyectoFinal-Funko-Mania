<template>
  <div>
    <Carousel />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 pt-5 pb-3">
          <h1 class="funko-home-title">NO TE QUEDES SIN TU COLECCIÓN DE FUNKO POP!!</h1>
          <hr />
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <p class="funko-home-bienvenida mb-5 pl-5 ml-5 mr-5 pr-5">
                Bienvenidos al mundo de Funko Pop, te contaremos la historia, datos
                curiosos, podras intercambiar tus funkos y comprar para completar tu
                colección de uno de los mayores fenómenos de coleccionistas modernos.
              </p>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 d-flex">
              <div class="container">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://www.youtube.com/embed/hSdWLNm3Xo0"
                ></b-embed>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 py-5">
          <h1 class="funko-home-title">LA HISTORIA DE LOS FUNKO POP</h1>
          <hr />
        </div>
        <div class="col-10 texto-imagen">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <p class="funko-home-historia mb-5">
                En 1998, Mike Becker, diseñador de camisetas y buscador de juguetes raros,
                tenía entre ceja y ceja el muñeco-hucha con el famoso Big Boy de la cadena
                de 'fast food' americana. El problema es que todo aquel que se la quería
                vender pedía una millonada por ella. Ante tal panorama decidió fabricar su
                propia versión en China por mucho menos dinero. Al poco tiempo nacía
                Funko. Becker empezó con 35.000 dólares de su propio bolsillo trabajando
                desde su casa y su primer muñequito, como no podía ser de otra manera, fue
                el Big Boy que había estado buscando durante tanto tiempo, esta vez en
                versión muñeco sin hucha. Acto seguido fue a por su primera línea
                bautizada con el nombre de Wacky Wobblers (algo así como los “locos que se
                tambalean”) cuyos protagonistas eran figuras animadas como Popeye, Dick
                Tracy o personajes de las marcas de cereales de General Mills. Becker
                empezó con 35.000 dólares de su propio bolsillo trabajando desde su casa y
                su primer muñequito, como no podía ser de otra manera, fue el Big Boy que
                había estado buscando durante tanto tiempo, esta vez en versión muñeco sin
                hucha. Acto seguido fue a por su primera línea bautizada con el nombre de
                Wacky Wobblers (algo así como los “locos que se tambalean”) cuyos
                protagonistas eran figuras animadas como Popeye, Dick Tracy o personajes
                de las marcas de cereales de General Mills.
              </p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 mb-5">
              <img class="img-fluid" src="@/assets/img/BOY.png" />
            </div>
          </div>
        </div>
        <div class="col-12 py-5">
          <h1 class="funko-home-title">LOS 5 FUNKOS MÁS VENDIDOS</h1>
          <hr />
        </div>
        <div container class="vendidos">
          <div class="row exclusivos">
            <div class="col-sm-12 col-md-6 col-lg-2">
              <b-card
                title="Spiderman"
                img-src="@/assets/img/spiderman.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text> $12.990 </b-card-text>

                <b-button href="#" variant="primary" class="btn-funko-primary w-100"
                  >Comprar</b-button
                >
              </b-card>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2">
              <b-card
                title="Harry Potter"
                img-src="@/assets/img/harry.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text> $12.990 </b-card-text>

                <b-button href="#" variant="primary" class="btn-funko-primary w-100"
                  >Comprar</b-button
                >
              </b-card>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2">
              <b-card
                title="F. Mercury"
                img-src="@/assets/img/freddy.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text> $12.990 </b-card-text>

                <b-button href="#" variant="primary" class="btn-funko-primary w-100"
                  >Comprar</b-button
                >
              </b-card>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2">
              <b-card
                title="Dr. Strange"
                img-src="@/assets/img/drstrange.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text> $12.990 </b-card-text>

                <b-button href="#" variant="primary" class="btn-funko-primary w-100"
                  >Comprar</b-button
                >
              </b-card>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2">
              <b-card
                title="T. Lannister"
                img-src="@/assets/img/got.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-2"
              >
                <b-card-text> $12.990 </b-card-text>

                <b-button href="#" variant="primary" class="btn-funko-primary w-100"
                  >Comprar</b-button
                >
              </b-card>
            </div>
          </div>
          <br />
          <hr />
          <br />
        </div>
        <div class="col-12 ml-5 pl-5 pr-5 mr-5">
          <div class="row">
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="row">
                <div class="col-9">
                  <img class="img-fluid funko-home-sub-img" src="@/assets/img/lupa.png" />
                </div>
                <div class="col-9">
                  <h2 class="mt-4 funko-home-sub-title" >Funkos mas buscados</h2>
                </div>
                <div class="col-9">
                  <p>
                    Quisque faucibus sem at justo consectetur, a dictum ante rutrum. Proin
                    in ipsum tempor, pharetra quam vitae, tristique ex. Sed molestie eget
                    tellus eu scelerisque. Ut pretium arcu ac augue egestas, ut
                    pellentesque lectus hendrerit. Vivamus interdum lorem sed facilisis
                    volutpat. Donec varius arcu ac condimentum elementum.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="row">
                <div class="col-9">
                  <img
                    class="img-fluid funko-home-sub-img"
                    src="@/assets/img/curiosidades.png"
                  />
                </div>
                <div class="col-9">
                  <h2 class="mt-4 funko-home-sub-title">Curiosidades</h2>
                </div>
                <div class="col-9">
                  <p>
                    Quisque faucibus sem at justo consectetur, a dictum ante rutrum. Proin
                    in ipsum tempor, pharetra quam vitae, tristique ex. Sed molestie eget
                    tellus eu scelerisque. Ut pretium arcu ac augue egestas, ut
                    pellentesque lectus hendrerit. Vivamus interdum lorem sed facilisis
                    volutpat. Donec varius arcu ac condimentum elementum.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4">
              <div class="row">
                <div class="col-9">
                  <img
                    class="img-fluid funko-home-sub-img"
                    src="@/assets/img/promociones.png"
                  />
                </div>
                <div class="col-9">
                  <h2 class="mt-4 funko-home-sub-title">Promociones</h2>
                </div>
                <div class="col-9">
                  <p>
                    Quisque faucibus sem at justo consectetur, a dictum ante rutrum. Proin
                    in ipsum tempor, pharetra quam vitae, tristique ex. Sed molestie eget
                    tellus eu scelerisque. Ut pretium arcu ac augue egestas, ut
                    pellentesque lectus hendrerit. Vivamus interdum lorem sed facilisis
                    volutpat. Donec varius arcu ac condimentum elementum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap");
* {
  background: $blanco;
  color: $negro;
}

.funko-home-title {
  text-transform: uppercase;
  text-align: center;
  color: $celeste;
  font-family: $akshar;
  font-size: 600;
}
.exclusivos {
  justify-content: center;
   margin: auto;
}
.vendidos {
  justify-content: center;
   margin: auto;
}
.funko-home-sub-title {
  color: $celeste;
  font-family: "Akshar", sans-serif;
  font-size: 700;
  text-align: center;
  text-transform: uppercase;
  min-height: 4rem;
}

.funko-home-sub-img {
  align-items: center;
  display: flex;
  margin: auto;
  max-height: 10rem;
}

p {
  text-align: justify;
  font-size: 800;
}

.funko-home-historia {
  margin-left: 70px;
  margin-right: 40px;
}

.funko-home-bienvenida {
  text-align: center;
}

hr {
  width: 80%;
  height: 2px;
  background-color: $negro;
}

.texto-imagen {
  justify-content: center;
  margin: auto;
}
</style>
