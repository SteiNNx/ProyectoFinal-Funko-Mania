<template>
  <div class="container py-5">
    <div class="row">
      <div
        class="col-sm-12 col-md-7 col-lg-7 justify-content-center align-content-center"
      >
        <div class="card border-0">
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
            <div class="card border-0">
              <div class="funko-detalle-card-header">
                <h1>
                  {{ funkoDetalle?.title }}
                </h1>
                <div>
                  <template v-if="userLogin != null">
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
                  </template>
                  <h3 class="my-auto">
                    {{ getLabelPrice(funkoDetalle?.price) }}
                  </h3>
                </div>
                <div class="row" >
                  <div class="col-sm-12 col-md-4 col-lg-4" v-if="userLogin != null">
                    <b-icon
                      class="funko-detalle-icon-like"
                      icon="truck"
                      scale="1.4"
                    ></b-icon>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4" v-if="userLogin != null">
                    <p id="popover-3" class="my-auto funko-detalle-fecha-entrega">
                      Llegaría entre el
                      <span> {{ fechaEntrega?.desde }}</span>
                      y
                      <span>{{ fechaEntrega?.hasta }}</span>
                    </p>
                    <b-popover target="popover-3" triggers="hover focus">
                      Calculamos los tiempos para esta dirección: {{ getDireccion }}
                    </b-popover>
                  </div>
                  <div class="col-12 pt-5 d-flex justify-content-center">
                    <button
                      class="btn btn-primary rounded-pill btn-funko-primary funko-categoria-btn w-100"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12 pt-3">
                    <div class="d-inline-block m-auto">
                      <span>Comparte en: </span>
                      <SocialShared :sharing="getObjectSocialShared('facebook')" />
                      <SocialShared :sharing="getObjectSocialShared('whatsapp')" />
                    </div>
                  </div>
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

import SocialShared from "@/components/SocialShared";
import { getPriceInCLP } from "@/utils/functions";
import { getDayEnvio } from "@/utils/functionsDate";

export default {
  name: "Detalle",
  data() {
    return {
      isSendMessage: false,
      fechaEntrega: "",
    };
  },
  components: {
    SocialShared,
  },
  mounted() {
    const { id } = this.$route.params;
    if (this.funkoDetalle.id != id) {
      this.$router.push("/categorias");
    }
    this.fechaEntrega = getDayEnvio(this.userLogin);
    this.getUrlDetalle();
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
    getObjectSocialShared(social) {
      const url = this.getUrlDetalle();
      switch (social) {
        case "facebook":
          return {
            network: "facebook",
            title: "facebook",
            url,
            name: "Facebook",
            color: "#00a4cd",
            icon: "facebook",
          };
        case "whatsapp":
          return {
            network: "whatsapp",
            title: "whatsapp",
            url,
            name: "whatsapp",
            color: "#25d366",
            icon: "phone-fill",
          };
      }
    },
    getUrlDetalle() {
      return window.location.href;
    },
  },
  computed: {
    ...mapState("Funkos", ["funkos", "funkoDetalle", "funkosFavoritos"]),
    ...mapState("User", ["userLogin"]),
    isInFavoritos() {
      const { funkoDetalle, funkosFavoritos } = this;
      const existFunkoInFav = funkosFavoritos.findIndex(
        (funkoIteracion) => funkoIteracion.id === funkoDetalle.id
      );
      return existFunkoInFav > -1;
    },
    getDireccion() {
      const { infoUser } = this.userLogin;
      const {
        comuna = "Puente Alto",
        region = "Metropolitana",
        direccion = "Miraflores 123",
      } = infoUser;
      return `${direccion}, Comuna ${comuna.label}, Region ${region.label} `;
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
  div {
    display: flex;
    justify-content: space-between;

    @include breakpoint("Celular") {
      flex-direction: column;
    }
    h3 {
      display: flex;
      font-family: fantasy;
      font-size: $font-size-md;
      text-align: right;
      @include breakpoint("Celular") {
        text-align: center;
        margin: auto;
      }
    }
    svg {
      display: flex;
    }
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
  font-family: $dosis;
  font-size: $font-size-md;
}

.funko-detalle-fecha-entrega {
  font-size: $font-size-xs;
  font-style: italic;
  @include breakpoint("Celular") {
    text-align: center;
  }
  span {
    color: $celeste-oscuro;
  }
}
</style>
