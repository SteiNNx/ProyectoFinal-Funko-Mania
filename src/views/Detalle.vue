<template>
  <div class="container py-5">
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
            <b-icon
              v-if="isInFavoritos"
              class="funko-detalle-icon-like"
              icon="heart-fill"
              scale="1.4"
              @click="eliminarFunkoFavoritos"
            ></b-icon>
            <b-icon
              v-else
              class="funko-detalle-icon-like"
              icon="heart"
              scale="1.4"
              @click="agregarFunkoFavoritos"
            ></b-icon>
          </div>
          <img
            :src="funkoDetalle?.image_url"
            class="card-img-top funko-funko-img"
            alt="..."
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-5">
        <div class="row">
          <div class="col-12 py-3">
            <div class="card text-center">
              <ul class="list-group list-group-flush">
                <li class="list-group-item funko-card-header-seller">Vendedor</li>
                <li class="list-group-item">Roberto Raggio</li>
                <li class="list-group-item">San Miguel, Santiago</li>
              </ul>
            </div>
          </div>
          <div class="col-12 py-3">
            <div class="card text-center">
              <ul class="list-group list-group-flush">
                <li class="list-group-item funko-card-header-seller">Tu Información</li>
              </ul>
              <div class="row text-left p-3">
                <div class="col-12">
                  <div class="form-group">
                    <label for="txt_detalle_nombre">Nombre</label>
                    <input
                      type="email"
                      class="form-control"
                      id="txt_detalle_nombre"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="txt_detalle_email">Correo Electrónico</label>
                    <input
                      type="email"
                      class="form-control"
                      id="txt_detalle_email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="txt_detalle_telefono">Telefono</label>
                    <input
                      type="email"
                      class="form-control"
                      id="txt_detalle_telefono"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="txt_detalle_mensaje">Mensaje</label>
                    <textarea
                      class="form-control"
                      id="txt_detalle_mensaje"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <button
                    class="btn btn-primary rounded-pill btn-funko-primary funko-categoria-btn w-75"
                  >
                    Enviar Mensaje
                  </button>
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
import { mapActions, mapState } from "vuex";

import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "Detalle",
  mounted() {
    const { id } = this.$route.params;
    if (this.funkoDetalle.id != id) {
      this.$router.push("/categorias");
    }
  },
  methods: {
    ...mapActions("Funkos", ["addFunkoFavorito", "deleteFunkoFavorito"]),
    agregarFunkoFavoritos() {
      const { funkoDetalle } = this;
      this.addFunkoFavorito(funkoDetalle);
    },
    eliminarFunkoFavoritos() {
      const { funkoDetalle } = this;
      this.deleteFunkoFavorito(funkoDetalle);
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
  },
  computed: {
    ...mapState("Funkos", ["funkos", "funkoDetalle", "funkosFavoritos"]),
    isInFavoritos() {
      const { funkoDetalle, funkosFavoritos } = this;
      const existFunkoInFav = funkosFavoritos.findIndex(
        (funkoIteracion) => funkoIteracion.id === funkoDetalle.id
      );
      return existFunkoInFav > -1;
    },
  },
};
</script>

<style lang="scss">
.funko-detalle-card-header {
  display: flex;
  flex-direction: column;
  h1 {
    display: block;
    text-transform: uppercase;
    font-size: $font-size-xl;
    font-weight: 700;
    text-align: left;
    @include breakpoint("Celular") {
      text-align: center;
    }
  }
  h3 {
    display: block;
    font-family: fantasy;
    font-size: $font-size-md;
    text-align: left;
    @include breakpoint("Celular") {
      text-align: center;
    }
  }
  svg {
    justify-content: end;
  }
}
.funko-detalle-icon-like {
  color: $celeste-oscuro;
  float: right;
  margin: 1rem 0rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(2);
  }
  @include breakpoint("Celular") {
    width: 100%;
  }
}

.funko-card-header-seller {
  font-family: $bouncy;
  font-size: $font-size-md;
}
</style>
