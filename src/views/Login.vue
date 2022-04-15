<template>
  <div class="container py-5">
    <div class="row justify-content-center text-center">
      <div class="col-sm-12 col-md-5 col-lg-5">
        <div class="card">
          <div class="card-header ingresar-title">Ingresar</div>
          <div class="card-body">
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
            <button
              type="submit"
              class="btn btn-primary btn-funko-primary w-100"
              @click="loginUsuario"
            >
              <b-spinner v-if="loading" small></b-spinner>
              <span v-else>Ingresar</span>
            </button>
          </div>
          <div class="card-footer text-muted">
            <p class="font-italic">
              ¿No tienes cuenta?, registrate
              <span class="span-here" @click="redirectToRegister">aquí</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    ...mapActions("User", ["loginUser"]),
    async loginUsuario() {
      const { user } = this;
      this.loading = true;
      await this.loginUser(user);
      this.loading = false;
      const { userMsjError } = this.$store.state.User;
      if (userMsjError === null || userMsjError === undefined) {
        this.$toast.success("Sesion Iniciada");
        this.$router.push("/");
      } else {
        this.$toast.error(userMsjError ?? "Error");
      }
    },
    redirectToRegister() {
      this.$router.push("/registrar");
    },
  },
  computed: {
    ...mapState(["userMsjError"]),
  },
};
</script>

<style lang="scss">
.ingresar-title {
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
