<template>
  <div id="app">
    <!-- Create Read Update Delete  -->
    <h1>Administración</h1>
    <hr />

    <div class="formulario">
      foto Funko
    <input v-model="usuario.fotoFunko" />
      nombre Funko:
      <input v-model="usuario.nombreFunko" />
      cliente Funko:
      <input v-model="usuario.usuarioFunko" />
      email:
      <input v-model="usuario.email" />

      <button @click="agregaFunko">agregar</button>
    </div>

    <table border="solid" class="table w-75 m-auto mt-5">
      <thead>
        <tr>
          <th>fotoFunko</th>
          <th>nombreFunko</th>
          <th>usuarioFunko</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, i) in usuarios" :key="i">
          <td>{{ usuario.data.fotoFunko }}</td>
          <td>{{ usuario.data.nombreFunko }}</td>
          <td>{{ usuario.data.usuarioFunko }}</td>
          <td>{{ usuario.data.email }}</td>
          <td>
            <button @click="editarUsuario(usuario.id)" class="btn btn-warning">
              editar 🖊
            </button>
            <button class="btn btn-danger" @click="deleteDoc(usuario.id)">
              eliminar ❌
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal v-model="modalShow" title="BootstrapVue">
      <div class="formulario">
        fotoFunko:
        <input v-model="usuarioModificando.data.fotoFunko" />
        nombreFunko:
        <input v-model="usuarioModificando.data.nombreFunko" />
       clienteFunko:
        <input v-model="usuarioModificando.data.usuarioFunko" />
        email:
        <input v-model="usuarioModificando.data.email" />

        <button class="btn btn-warning" @click="actualizarUsuario">
          actualizar
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

input {
  width: 150px;
}
</style>