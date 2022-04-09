<template>
  <div class="container py-5">
    <!-- <div class="funko-header">
      <router-link to="/home">Home /</router-link>
      <router-link to="/Categorias"> Categorias /</router-link>
      <router-link to="/Categorias"> Categoria Especifica</router-link>
    </div>

    <b-container class="producto">
      <b-row>
        <b-col>
          <b-card variant="info">
            <b><h2>Funko POP Harry Potter nº8</h2></b>
            <h3>$11.990</h3>
          </b-card>
          <b-card
            img-src="https://m.media-amazon.com/images/I/61q5FhBairL._AC_UX679_.jpg"
            class="Card-image"
          ></b-card>
          <b-button variant="info">Agregar a favoritos</b-button>
        </b-col>

        <b-col>
          <b-card-group deck>
            <b-card
              border-variant="info"
              header="Contacto"
              header-bg-variant="info"
              header-text-variant="white"
              align="center"
            >
              <b-card-text>Roberto Raggio</b-card-text>
              <hr />
              <b-card-text>Ñuñoa, Región Metropolitana</b-card-text>
              <hr />
              <b-card-text>+56962458214</b-card-text>
            </b-card>
          </b-card-group>

          <b-form deck class="mensaje">
            <b-card
              border-variant="info"
              header="Deja tu mensaje"
              header-bg-variant="info"
              header-text-variant="white"
              align="center"
            >
              <b-form-input placeholder="Tu Nombre"></b-form-input><br />
              <b-form-input placeholder="Tu E-mail"></b-form-input><br />
              <b-form-input placeholder="Tu Telefono"></b-form-input><br />
              <b-form-textarea
                id="textarea-default"
                placeholder="Deja tu mensaje"
              ></b-form-textarea>
              <b-button variant="info">Enviar tu mensaje</b-button>
            </b-card>
          </b-form>
        </b-col>
      </b-row>
    </b-container> -->

    <div class="row">
      <div
        class="col-sm-12 col-md-7 col-lg-7 justify-content-center align-content-center"
      >
        <div class="card border-0">
          <div class="funko-detalle-card-header">
            <h1>
              {{ funkoDetalle?.title }}
            </h1>
            <h3>
              {{ getLabelPrice(funkoDetalle?.price) }}
            </h3>
          </div>
          <img
            :src="funkoDetalle?.image_url"
            class="card-img-top funko-categoria-img"
            alt="..."
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "Detalle",
  methods: {
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
  },
  computed: {
    ...mapState("Funkos", ["funkoDetalle"]),
  },
};
</script>

<style lang="scss">
.funko-detalle-card-header {
  h1 {
    font-size: $font-size-xl;
    font-weight: 700;
    text-align: left;
    @include breakpoint("Celular") {
      text-align: center;
    }
  }
  h3 {
    font-family: fantasy;
    font-size: $font-size-md;
    text-align: left;
    @include breakpoint("Celular") {
      text-align: center;
    }
  }
}

/* .producto {
  margin-top: 80px;
  font-family: "Nunito";
}
.Card-image {
  width: 700px;
  padding: 40px;
}
.funko-header {
  margin-top: 50px;
  margin-left: 30px;
  font-family: "Nunito";
}
.mensaje {
  margin-top: 20px;
} */
</style>
