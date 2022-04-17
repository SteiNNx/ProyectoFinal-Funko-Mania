<template>
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
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

export default {
  name: "App",
  data() {
    return {
      usuario: {
        fotoFunko:"",
        nombreFunko: "",
       clienteFunko: "",
        email: "",
      },

      usuarioModificando: {
        id: "",
        data: { fotoFunko:"", nombreFunko: "",clienteFunko: "", email: "" },
      },
      usuarios: [],
      modalShow: false,
    };
  },
  methods: {
    async agregaFunko() {
      // Referencia de la base de datos
      const db = getFirestore();
      // Referencia de la colección
      const coleccion = collection(db, "usuarios");
      // Creación del documento
      const documento = this.usuario;
      // Agrega un nuevo documento
      await addDoc(coleccion, documento);
    },
    async getUsers() {
      // Referencia de la base de datos
      const db = getFirestore();
      // Referencia de la colección
      const coleccion = collection(db, "usuarios");
      // Referencia de la consulta
      const q = query(coleccion);
      // Se realiza la consulta con el método onSnapshot
      onSnapshot(q, (querySnapshot) => {
        const usuarios = [];
        querySnapshot.forEach((doc) => {
          const usuario = { id: doc.id, data: doc.data() };
          usuarios.push(usuario);
        });
        this.usuarios = usuarios;
      });
    },
    async deleteDoc(id) {
      // Referencia de la base de datos
      const db = getFirestore();
      const coleccion = "usuarios";
      await deleteDoc(doc(db, coleccion, id));
      alert("documento eliminado");
    },
    editarUsuario(id) {
      const { usuarios } = this;
      let usuarioModificando = { ...usuarios.find((u) => u.id === id) };
      usuarioModificando.data = { ...usuarioModificando.data };
      this.modalShow = true;
      this.usuarioModificando = usuarioModificando;
    },
    async actualizarUsuario() {
      // Referencia de la base de datos
      const db = getFirestore();
      const { usuarioModificando } = this;
      const { id, data } = usuarioModificando;
      await setDoc(doc(db, "usuarios", id), data);
      this.modalShow = false;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
