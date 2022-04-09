<template>
  <div class="container py-5">
    <div class="row justify-content-center text-center">
      <div class="col-sm-12 col-md-5 col-lg-5">
        <div class="card">
          <div class="card-header registrar-title">Registrarse</div>
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
              Registrarse
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
import { mapActions, mapState } from "vuex";

export default {
  name: "Registrar",
  data() {
    return { user: { email: "", password: "" } };
  },
  methods: {
    ...mapActions("User", ["registerUser"]),
    async loginUsuario() {
      const { user } = this;
      await this.registerUser(user);
      const { userMsjError } = this.$store.state.User;
      if (userMsjError === null || userMsjError === undefined) {
        this.$toast.success("Usuario Registrado");
        this.$router.push("/ingresar");
      } else {
        this.$toast.error(userMsjError);
      }
    },
    redirectToLogin() {
      this.$router.push("/ingresar");
    },
  },
  computed: {
    ...mapState(["userMsjError"]),
  },
};
</script>

<style lang="scss">
.registrar-title {
  font-family: $bouncy;
  font-size: $font-size-md;
}
.span-here {
  &:hover {
    text-decoration: underline;
    color: $celeste;
  }
}
</style>
