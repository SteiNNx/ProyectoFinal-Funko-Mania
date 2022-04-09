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
    },
    mutations: {
        SET_FUNKOS(state, payload) {
            state.funkos = payload;
        },
        SET_FUNKO_DETALLE(state, payload) {
            state.funkoDetalle = payload;
        }
    },
    actions: {
        getInitCallApiFunkos({ commit }) {
            axios.get(GET_ALL_FUNKOS)
                .then((response) => {
                    commit('SET_FUNKOS', response?.data);
                })
                .catch((error) => {
                    console.error(error);
                })
        },
        setFunkoDetalle({ commit }, funko) {
            commit('SET_FUNKO_DETALLE', funko);
        },
    },
    getters: {}
};

export default Funkos;