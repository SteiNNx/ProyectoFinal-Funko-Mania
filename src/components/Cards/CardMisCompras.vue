<template>
  <div class="row">
    <div
      v-for="(compra, index) in compras"
      :key="index"
      class="col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2"
    >
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-6">
              <h3>Total: {{ getLabelPrice(getTotalPriceCompra(compra.compra)) }}</h3>
            </div>
            <div class="col-6 d-flex justify-content-end">
              <b-button
                :id="'btn-collapse-' + index"
                v-b-toggle="'collapse-' + index"
                class="m-1 btn-funko-primary funko-categoria-btn btn-detalle-compra"
              >
                <b-icon
                  class="float-end funko-label-icon"
                  icon="cart-plus-fill"
                  scale="1"
                  variant="black"
                ></b-icon>
              </b-button>
              <b-tooltip
                :target="'btn-collapse-' + index"
                triggers="hover"
                placement="end"
              >
                Detalle
              </b-tooltip>
            </div>
            <div class="col-12">
              <p>{{ compra.fecha_compra }}</p>
            </div>
          </div>
        </div>
        <b-collapse :id="'collapse-' + index">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12 col-md-3 col-lg-3 pt-2 pb-4">
                <h3>Detalle Compra</h3>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3 pt-2 pb-4">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Codigo Compra</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.id"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 pt-2">
                <h4>Datos Personales</h4>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Nombre</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.nombre"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Rut</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.rut"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Correo</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.email"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Telefono</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.telefono"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 pt-2">
                <h4>Envio</h4>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Direccion</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.direccion"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Comuna</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.comuna.label"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Region</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.region.label"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 pt-2">
                <h4>Pago</h4>
              </div>
              <div class="col-sm-12 col-md-3 col-lg-3">
                <div class="input-group input-group-sm mb-3 text-center">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Metodo</span>
                  </div>
                  <input
                    type="text"
                    class="form-control text-center"
                    disabled
                    :value="compra.compra.user.pago"
                  />
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12">
                <div id="table-items" class="table-responsive">
                  <table class="table table-hove table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(funko, index) in compra.compra.compras" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>
                          <router-link class="" tag="a" :to="'/detalle/' + funko.id">
                            {{ funko.title }}
                          </router-link>
                        </td>
                        <td>{{ funko.category }}</td>
                        <td>{{ getLabelPrice(funko.price) }}</td>
                        <td>{{ funko.cantidad }}</td>
                        <td>
                          {{
                            getLabelPrice(getTotalPriceItem(funko.price, funko.cantidad))
                          }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { getPriceInCLP } from "@/utils/functions";

export default {
  name: "CardFavoritos",
  props: {
    compras: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getTotalPriceItem(price, cantidad) {
      return parseInt(price) * parseInt(cantidad);
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    getTotalPriceCompra(compra) {
      return compra.compras.reduce(
        (previusValue, currentValue) =>
          previusValue + parseInt(currentValue.price) * currentValue.cantidad,
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header-compra {
  display: flex;
  justify-content: space-between;
}
h3 {
  text-transform: capitalize;
}
</style>
