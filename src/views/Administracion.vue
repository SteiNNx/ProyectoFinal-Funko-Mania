<template>
<<<<<<< HEAD
  <div class="container-fluid">
    <div class="row p-5">
      <div class="col-12 p-1">
        <h1 class="funko-favoritos-title">Administracion</h1>
      </div>
      <div class="col-12 p-1">
        <button @click="modalShow = !modalShow" class="btn btn-primary px-4">
          Agregar
=======
  <div id="app">
    <div class="container py-5">
    <div class="row justify-content-center text-center">
      <div class="col-sm-12 col-md-6 col-lg-3">
    <div class="card">
    <div class="card-header ingresar-title">ADMINISTRACIÓN</div>
      Foto Funko
      <input class="btn-funko-white w-100 p-1 " v-model="usuario.fotoFunko" />
      Nombre Funko:
      <input class="btn-funko-white w-100 p-1" v-model="usuario.nombreFunko" />
      Cliente Funko:
      <input class="btn-funko-white w-100 p-1" v-model="usuario.usuarioFunko" />
      Email:
      <input class="btn-funko-white w-100 p-1" v-model="usuario.email" />

      <button class="btn btn-primary btn-funko-primary w-100 mt-4 mb-4" @click="agregaFunko">agregar</button>
    </div>
    </div>
    </div>
    </div>

    <table border="solid" bac class="table w-75 m-auto mt-5">
      <thead>
        <tr>
          <th class="btn-funko-primary">Foto Funko</th>
          <th class="btn-funko-primary">Nombre Funko</th>
          <th class="btn-funko-primary">Usuario Funko</th>
          <th class="btn-funko-primary">Email</th>
          <th class="btn-funko-primary"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, i) in usuarios" :key="i">
          <td>{{ usuario.data.fotoFunko }}</td>
          <td>{{ usuario.data.nombreFunko }}</td>
          <td>{{ usuario.data.usuarioFunko }}</td>
          <td>{{ usuario.data.email }}</td>
          <td>
            <button @click="editarUsuario(usuario.id)" class="btn">
              🖊
            </button>
            <button class="btn" @click="deleteDoc(usuario.id)">
              ❌
            </button>
          </td>
        </tr>
      </tbody >
    </table>

    <b-modal v-model="modalShow" title="BootstrapVue">
      <div class="formulario">
        Foto Funko:
        <input v-model="usuarioModificando.data.fotoFunko" />
        Nombre Funko:
        <input v-model="usuarioModificando.data.nombreFunko"/>
       Cliente Funko:
        <input v-model="usuarioModificando.data.usuarioFunko" />
        Email:
        <input v-model="usuarioModificando.data.email" />

        <button class="btn-funko-primary mt-3" @click="actualizarUsuario">
          Actualizar
>>>>>>> origin/master
        </button>
      </div>
      <div class="col-12 p-1">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="input-group mb-1">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Filtro:</span>
              </div>
              <input type="text" class="form-control" v-model="filter" />
              <div class="input-group-append">
                <span class="input-group-text"
                  >{{ getFunkosFilteredCount }} resultados</span
                >
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6"></div>
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="table-responsive pt-0 table-admin">
              <table class="table table-sm table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(funko, index) in getFunkosFiltered" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="text-left">{{ funko?.title }}</td>
                    <td>{{ funko?.category }}</td>
                    <td>{{ funko?.stock }}</td>
                    <td>{{ getLabelPrice(funko?.price) }}</td>
                    <td>
                      <b-button
                        class="mx-1"
                        variant="warning"
                        @click="editFunkoTable(funko)"
                      >
                        <b-icon icon="pencil-square"></b-icon>
                        Editar
                      </b-button>
                      <b-button
                        class="mx-1"
                        variant="danger"
                        @click="deleteFunkoTable(funko)"
                      >
                        <b-icon icon="x-circle-fill"></b-icon>
                        Eliminar
                      </b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <b-modal v-model="modalShow" :title="getTitleModal">
                <div class="form-group">
                  <label for="txt_titulo">Titulo</label>
                  <input
                    id="txt_titulo"
                    type="text"
                    class="form-control"
                    v-model="funko.title"
                  />
                </div>
                <div class="form-group">
                  <label for="txt_img_url">Img Url</label>
                  <input
                    id="txt_img_url"
                    type="text"
                    class="form-control"
                    v-model="funko.image_url"
                  />
                </div>
                <div class="form-group">
                  <label for="txt_password">Categoria</label>
                  <v-select
                    v-model="funko.category"
                    :options="
                      category?.map((iteracion) => {
                        return {
                          key: iteracion,
                          label: iteracion,
                        };
                      })
                    "
                  ></v-select>
                </div>
                <div class="form-group">
                  <label for="txt_precio">Precio</label>
                  <input
                    id="txt_precio"
                    type="number"
                    class="form-control"
                    v-model="funko.price"
                    placeholder=""
                  />
                </div>
                <label for="txt_stock">Stock</label>
                <input
                  id="txt_stock"
                  type="number"
                  class="form-control"
                  v-model="funko.stock"
                  placeholder=""
                />
                <template #modal-footer>
                  <button class="btn btn-danger px-4" @click="cancelButtonModal">
                    Cancelar
                  </button>
                  <button class="btn btn-success px-4" @click="okButtonModal">
                    {{ getTextBtnModal }}
                  </button>
                </template>
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

import { getPriceInCLP } from "@/utils/functions";
import { CATEGORIES } from "@/utils/constants";

export default {
  name: "Administracion",
  data() {
    return {
      isEditing: false,
      funkoDoc: null,
      funko: {
        title: "",
        image_url: "",
        price: 0,
        stock: 0,
        category: "",
      },
      category: CATEGORIES,
      filter: "",
      modalShow: false,
    };
  },
  methods: {
    ...mapActions("Funkos", ["addFunko", "updateFunko", "deleteFunko"]),
    handleOnCheck(index) {
      this.categorias[index].isCheched = !this.categorias[index]?.isCheched;
    },
    getLabelPrice(price) {
      return getPriceInCLP(price);
    },
    okButtonModal() {
      const { isEditing, funko, funkoDoc } = this;
      if (this.validateForm()) {
        if (!isEditing) {
          this.addFunko({
            ...funko,
            category: funko.category.key,
          });
          this.$toast.success("Funko Agregado");
        } else {
          this.updateFunko({ id: funkoDoc.id, funkoData: funko });
          this.$toast.success("Funko Actualizado");
        }
      }
      this.modalShow = false;
    },
    cancelButtonModal() {
      this.modalShow = false;
      this.isEditing = false;
      this.funkoDoc = null;
      this.funko = {
        title: "",
        image_url: "",
        price: 0,
        stock: 0,
        category: "",
      };
    },
    editFunkoTable(funko) {
      this.modalShow = true;
      this.isEditing = true;
      this.funkoDoc = funko;
      this.funko = funko;
    },
    deleteFunkoTable(funko) {
      this.deleteFunko(funko.id);
    },
    validateForm() {
      const { title, image_url, price, stock, category } = this.funko;
      const isValidate =
        title != "" && image_url != "" && category != "" && price != 0 && stock != 0;
      if (!isValidate) {
        this.$toast.error("Formulario Incompleto");
      }
      return isValidate;
    },
  },
  computed: {
    ...mapState("Funkos", ["funkos"]),
    getTitleModal() {
      return this.isEditing ? "Editando" : "Agregando Funko";
    },
    getTextBtnModal() {
      return this.isEditing ? "Editar" : "Agregar";
    },
    getFunkosFiltered() {
      const { filter, funkos } = this;
      const funkosFiltered = funkos.filter((iteracion) => {
        return (
          iteracion.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          iteracion.category.toLowerCase().indexOf(filter.toLowerCase()) > -1 ||
          iteracion.price.toLowerCase().indexOf(filter.toLowerCase()) > -1
        );
      });

      return funkosFiltered;
    },
    getFunkosFilteredCount() {
      return this.getFunkosFiltered.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.table-admin {
  text-align: center;
  max-height: 30vw;
  @include breakpoint("Celular") {
    max-height: 100vw;
  }
}
</style>
