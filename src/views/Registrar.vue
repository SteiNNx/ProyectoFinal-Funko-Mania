<template>
  <div class="container py-5">
    <div class="row justify-content-center text-center">
      <div class="col-sm-12 col-md-5 col-lg-5">
        <div class="card">
          <div class="card-header registrar-title">Registrarse</div>
          <div class="card-body">
            <div class="form-group">
              <label for="txt_nombre">Nombre</label>
              <input
                id="txt_nombre"
                type="text"
                class="form-control"
                placeholder="John Doe"
                v-model="user.nombre"
              />
            </div>
            <div class="form-group">
              <label for="txt_email">Correo Electrónico</label>
              <input
                id="txt_email"
                type="text"
                class="form-control"
                placeholder="nombre@dominio.com"
                v-model="user.email"
              />
            </div>
            <div class="form-group">
              <label for="txt_password">Contraseña</label>
              <input
                id="txt_password"
                type="password"
                class="form-control"
                v-model="user.password"
                placeholder=""
              />
            </div>
            <div class="form-group">
              <label for="txt_password">Region</label>
              <v-select
                v-model="user.region"
                :options="optionsRegion"
                :loading="loadingRegion"
                @input="handleClickSelectRegion($event)"
              ></v-select>
            </div>
            <div class="form-group">
              <label for="txt_password">Comuna</label>
              <v-select
                v-model="user.comuna"
                :options="optionsComuna"
                :disabled="disabledComuna"
              ></v-select>
            </div>
            <div class="form-group">
              <label for="txt_password">Dirección</label>
              <input
                id="txt_password"
                type="password"
                class="form-control"
                v-model="user.direccion"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-funko-primary w-100"
              @click="registrarUsuario"
            >
              <b-spinner v-if="loading" small></b-spinner>
              <span v-else>Registrarse</span>
            </button>
          </div>
          <div class="card-footer text-muted">
            <p class="font-italic">
              ¿Ya tienes cuenta?, inicia sesion
              <span class="span-here" @click="redirectToLogin">aquí</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";

import { GET_ALL_REGIONES, GET_COMUNAS_BY_CODIGO_REGION } from "@/api/constants";

export default {
  name: "Registrar",
  data() {
    return {
      user: {
        nombre: "",
        email: "",
        password: "",
        region: {
          label: "",
          codigo: "",
        },
        comuna: {
          label: "",
          codigo: "",
        },
        direccion: "",
      },
      optionsRegion: [],
      optionsComuna: [],
      loading: false,
      loadingRegion: true,
      loadingComuna: true,
      disabledComuna: true,
    };
  },
  mounted() {
    axios
      .get(GET_ALL_REGIONES)
      .then((succesResponse) => {
        this.loadingRegion = false;
        this.optionsRegion = succesResponse?.data?.map(({ codigo, nombre }) => {
          return {
            key: codigo,
            label: nombre,
          };
        });
      })
      .catch((errorResponse) => {
        console.log(errorResponse);
      });
  },
  methods: {
    ...mapActions("User", ["registerUser"]),
    async registrarUsuario() {
      const { user } = this;
      const { region, comuna, direccion } = user;
      if ((region.label != "") & (comuna.label != "") & (direccion != "")) {
        this.loading = true;
        await this.registerUser(user);
        this.loading = false;
        const { userMsjError } = this.$store.state.User;
        if (userMsjError === null || userMsjError === undefined) {
          this.$toast.success("Usuario Registrado");
          this.$router.push("/ingresar");
        } else {
          this.$toast.error(userMsjError);
        }
      } else {
        this.$toast.error("Favor, completar formulario");
      }
    },
    redirectToLogin() {
      this.$router.push("/ingresar");
    },
    handleClickSelectRegion($event) {
      console.log($event);
      if ($event !== null) {
        this.loadComunaOptionsByCodigoRegion($event.key);
      }
    },
    loadComunaOptionsByCodigoRegion(codigoRegion) {
      this.loadingComuna = true;
      this.disabledComuna = false;
      axios
        .get(GET_COMUNAS_BY_CODIGO_REGION(codigoRegion))
        .then((succesResponse) => {
          this.loadingComuna = false;
          this.optionsComuna = succesResponse?.data?.map(({ codigo, nombre }) => {
            return {
              key: codigo,
              label: nombre,
            };
          });
        })
        .catch((errorResponse) => {
          console.log(errorResponse);
        });
    },
  },
  computed: {
    ...mapState(["userMsjError"]),
  },
};
</script>

<style lang="scss">
.registrar-title {
  font-family: $dosis;
  font-size: $font-size-md;
}
.span-here {
  &:hover {
    text-decoration: underline;
    color: $celeste;
  }
}
</style>
