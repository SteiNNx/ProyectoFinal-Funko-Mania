<template>
  <div>
    <nav class="bg-black">
      <img
        @click="redirectHome"
        src="@/assets/img/funkomania1.png"
        width="50"
        alt="FUNKO POP MANIA"
      />
    </nav>
    <div class="container py-4">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <div class="row">
            <div class="col-12 py-1">
              <div class="card">
                <h5 :class="getCssClassName(showCard.showCardDataPersonal)">
                  1 Datos Personales
                </h5>
                <b-collapse
                  id="collapse-form-data-personal"
                  v-model="showCard.showCardDataPersonal"
                >
                  <div class="card-body">
                    <div class="form-row">
                      <div class="form-group col-sm-12 col-md-12 col-lg-12">
                        <label for="txt_nombre">Nombre Completo</label>
                        <input
                          type="text"
                          class="form-control"
                          id="txt_nombre"
                          v-model="user.nombre"
                        />
                      </div>
                      <div class="form-group col-sm-12 col-md-12 col-lg-12">
                        <label for="txt_correo">Correo</label>
                        <input
                          type="email"
                          class="form-control"
                          id="txt_correo"
                          v-model="user.email"
                        />
                      </div>
                      <div class="form-group col-sm-12 col-md-6 col-lg-6">
                        <label for="txt_telefono">Telefono</label>
                        <input
                          type="text"
                          class="form-control"
                          id="txt_telefono"
                          v-model="user.telefono"
                        />
                      </div>
                      <div class="form-group col-sm-12 col-md-6 col-lg-6">
                        <label for="txt_rut">Rut</label>
                        <input
                          type="text"
                          class="form-control"
                          id="txt_rut"
                          v-model="user.rut"
                        />
                      </div>
                      <div
                        class="form-group col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center"
                      >
                        <b-button
                          class="btn-funko-primary funko-categoria-btn w-50"
                          @click="handleOnClickContinue('personal')"
                        >
                          Continuar
                        </b-button>
                      </div>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
            <div class="col-12 py-1">
              <div class="card">
                <h5 :class="getCssClassName(showCard.showCardEnvio)">2 Envio</h5>
                <b-collapse
                  id="collapse-form-data-personal"
                  v-model="showCard.showCardEnvio"
                >
                  <div class="card-body">
                    <div class="form-row">
                      <div class="form-group col-sm-12 col-md-6 col-lg-6">
                        <label for="select_region">Region</label>
                        <v-select
                          id="select_region"
                          v-model="user.region"
                          :options="optionsRegion"
                          :loading="loadingRegion"
                          @input="handleClickSelectRegion($event)"
                        ></v-select>
                      </div>
                      <div class="form-group col-sm-12 col-md-6 col-lg-6">
                        <label for="select_comuna">Comuna</label>
                        <v-select
                          id="select_comuna"
                          v-model="user.comuna"
                          :options="optionsComuna"
                          :disabled="disabledComuna"
                        ></v-select>
                      </div>
                      <div class="form-group col-sm-12 col-md-12 col-lg-12">
                        <label for="txt_direccion">Dirección</label>
                        <input
                          id="txt_direccion"
                          type="text"
                          class="form-control"
                          v-model="user.direccion"
                        />
                      </div>
                      <div
                        class="form-group col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center"
                      >
                        <b-button
                          class="btn-funko-primary funko-categoria-btn w-50"
                          @click="handleOnClickContinue('envio')"
                        >
                          Continuar
                        </b-button>
                      </div>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
            <div class="col-12 py-1">
              <div class="card">
                <h5 :class="getCssClassName(showCard.showCardPago)">3 Pago</h5>
                <b-collapse
                  id="collapse-form-data-personal"
                  v-model="showCard.showCardPago"
                >
                  <div class="card-body">
                    <div class="form-row">
                      <div class="form-group col-sm-12 col-md-12 col-lg-12">
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="checkout-radio-pago"
                            id="checkout-radio-pago-option-1"
                            value="khipu"
                            v-model="user.pago"
                          />
                          <img
                            src="@/assets/img/checkout/khipu.png"
                            class="checkout-img-pago img-thumbnail"
                            alt="pago-khipu"
                          />
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="checkout-radio-pago"
                            id="checkout-radio-pago-option-2"
                            value="webpay"
                            v-model="user.pago"
                          />
                          <img
                            src="@/assets/img/checkout/webpay-debito.jpg"
                            class="checkout-img-pago img-thumbnail"
                            alt="pago-debito"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6">
          <div class="row d-flex justify-content-end">
            <div class="col-12 my-1 my-sm-4">
              <h2>Carrito</h2>
            </div>
            <div class="col-12 my-1 my-sm-4" style="max-height: 25rem">
              <ShopItemFunkoCart :shopCartFunkos="shopCartFunkos" />
            </div>
            <div class="col-12 my-1 my-sm-4">
              <h2 class="total-price">Total: {{ getLabelPrice(getTotalPriceCart) }}</h2>
              <b-button
                :disabled="disabledButtonPay"
                class="mb-2 btn-funko-primary funko-categoria-btn w-100"
                @click="handleOnClickComprar"
              >
                <b-spinner v-if="loading" small></b-spinner>
                <template v-else>
                  <b-icon icon="wallet2" aria-hidden="true"></b-icon>
                  Pagar
                </template>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters, mapState } from "vuex";

import ShopItemFunkoCart from "@/components/Shop/ShopItemFunkoCart";
import { GET_ALL_REGIONES, GET_COMUNAS_BY_CODIGO_REGION } from "@/api/constants";
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "CheckoutCompra",
  components: {
    ShopItemFunkoCart,
  },
  data() {
    return {
      user: {
        nombre: "",
        email: "",
        telefono: "",
        rut: "",
        region: {
          label: "",
          codigo: "",
        },
        comuna: {
          label: "",
          codigo: "",
        },
        direccion: "",
        pago: "webpay",
      },
      optionsRegion: [],
      optionsComuna: [],
      disabledButtonPay: true,
      loading: false,
      loadingRegion: true,
      loadingComuna: true,
      disabledComuna: true,
      showCard: {
        showCardDataPersonal: true,
        showCardEnvio: false,
        showCardPago: false,
      },
    };
  },
  mounted() {
    this.changeStateShowCart(false);
    this.changeStateShowCheckout(true);
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
    ...mapActions("Compras", ["addCompra"]),
    ...mapActions("ShopCartFunkos", [
      "changeStateShowCart",
      "changeStateShowCheckout",
      "changeStateShopCartFunkos",
    ]),
    redirectHome() {
      this.changeStateShowCart(false);
      this.changeStateShowCheckout(false);
      this.$router.push("/");
    },
    async handleOnClickComprar() {
      const { shopCartFunkos, user } = this;
      const isValid = !this.validateFormByTypeCard("pago");
      if (isValid) {
        const compra = {
          user,
          compras: [...shopCartFunkos],
        };
        console.log({ compra });
        this.loading = true;
        await this.addCompra(compra);
        this.loading = false;
        this.$router.push("/checkout-post-compra");
      }
    },
    handleOnClickContinue(buttonType) {
      const isValid = this.validateFormByTypeCard(buttonType);
      switch (buttonType) {
        case "personal":
          if (isValid) {
            this.showCard.showCardDataPersonal = false;
            this.showCard.showCardEnvio = true;
            this.$toast.success("Datos Personales Correctos");
          } else {
            this.$toast.error("Datos Personales Incorrectos");
          }
          break;
        case "envio":
          if (isValid) {
            this.showCard.showCardEnvio = false;
            this.showCard.showCardPago = true;
            this.disabledButtonPay = false;
            this.$toast.success("Datos Envio Correctos");
          } else {
            this.$toast.error("Datos Envio Incorrectos");
          }
          break;
        case "pago":
          break;
        default:
          console.log("default");
          break;
      }
    },
    validateFormByTypeCard(typeCard) {
      const { user } = this;
      let isValid;
      switch (typeCard) {
        case "personal":
          const { nombre, email, telefono, rut } = user;
          isValid = nombre != "" && email != "" && telefono != "" && rut != "";
          return isValid;
        case "envio":
          const { region, comuna, direccion } = user;
          isValid = region.codigo != "" && comuna.codigo != "" && direccion != "";
          return isValid;
        case "pago":
          const { shopCartFunkos } = this;
          const isEmptyFunkos = shopCartFunkos.length == 0;
          return isEmptyFunkos;
        default:
          return;
      }
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
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    getCssClassName(showCardState) {
      return showCardState ? "card-header" : "card-header text-muted";
    },
  },
  computed: {
    ...mapState("ShopCartFunkos", ["shopCartFunkos"]),
    ...mapGetters("ShopCartFunkos", ["getTotalPriceCart"]),
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 5rem;
  background-color: $negro;
  img {
    margin: 1rem;
  }
  @include breakpoint("Celular") {
    height: 2rem;
  }
}
h5 {
  font-size: $font-size-xl;
}
.checkout-img-pago {
  width: 5rem;
  height: 5rem;
}
.total-price {
  text-align: end;
}
</style>
