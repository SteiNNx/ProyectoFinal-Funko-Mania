import axios from "axios";
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc
} from "firebase/firestore";

import { db } from "@/plugins/firebase";
import { GET_ALL_FUNKOS } from "@/api/constants"


/**
 * @description Modulo Funkos, contiene state, mutations, actions y getters
 */
const Funkos = {
    namespaced: true,
    state: {
        funkos: [],
        funkoDetalle: {},
        funkosFavoritos: [],
    },
    mutations: {
        SET_FUNKOS(state, payload) {
            state.funkos = payload;
        },
        SET_FUNKO_DETALLE(state, payload) {
            state.funkoDetalle = payload;
        },
        SET_FUNKOS_FAVORITOS(state, payload) {
            state.funkosFavoritos = payload;
        }
    },
    actions: {
        getInitCallApiFunkos({ commit }) {
            const queryRequest = query(collection(db, "funkos"));
            onSnapshot(queryRequest, (querySnapshot) => {
                const funkos = [];
                querySnapshot.forEach((doc) => {
                    const funko = {
                        ...doc.data(),
                        id: doc.id,
                    };
                    funkos.push(funko);
                });
                commit("SET_FUNKOS", funkos);
            });
        },
        /* getInitCallApiFunkos({ commit }) {
            axios.get(GET_ALL_FUNKOS)
                .then((response) => {
                    */
        /** Initial Data Firestore */
        /* response?.data?.forEach(async (element) => {
        *    const docRef = await addDoc(collection(db, "funkos"), {
        *        ...element,
        *        stock: 20,
        *    });
        * }); 
        */
        /*
                commit('SET_FUNKOS', response?.data);
            })
                        .catch((error) => {
                console.error(error);
            })
        },*/
        async addFunko(context, funkoObj) {
            console.log(funkoObj);
            const docRef = await addDoc(collection(db, "funkos"), funkoObj);
            console.log("Document written with ID: ", docRef.id);
        },
        async updateFunko(context, { id, funkoData }) {
            const funkoRefDoc = doc(db, "funkos", id);
            await updateDoc(funkoRefDoc, funkoData);
        },
        async deleteFunko({ commit }, idDocFunko) {
            await deleteDoc(doc(db, "funkos", idDocFunko));
        },
        setFunkoDetalle({ commit }, funko) {
            commit('SET_FUNKO_DETALLE', funko);
        },
        addFunkoFavorito({ commit, state }, funko) {
            const { funkosFavoritos } = state;
            const existFunkoInFav = funkosFavoritos.findIndex((funkoIteracion) => funkoIteracion.id === funko.id);
            if (existFunkoInFav === -1) {
                funkosFavoritos.push(funko);
                this._vm.$toast.success("Se ha agregado a favoritos!");
                commit('SET_FUNKOS_FAVORITOS', funkosFavoritos);
            } else {
                this._vm.$toast.error("Ha ocurrido un problema!");
            }
        },
        deleteFunkoFavorito({ commit, state }, funko) {
            const { funkosFavoritos } = state;
            const existFunkoInFav = funkosFavoritos.findIndex((funkoIteracion) => funkoIteracion.id === funko.id);

            if (existFunkoInFav === -1) {
                this._vm.$toast.success("Error al eliminar un favorito!");
            } else {
                const newFunkosFavoritos = [
                    ...funkosFavoritos.slice(0, existFunkoInFav),
                    ...funkosFavoritos.slice(existFunkoInFav + 1)
                ]
                commit('SET_FUNKOS_FAVORITOS', newFunkosFavoritos);
                this._vm.$toast.success("Se ha eliminado de favoritos!");
            }
        },
    },
    getters: {}
};

export default Funkos;