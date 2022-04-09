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
    },
    mutations: {
        SET_FUNKOS(state, payload) {
            state.funkos = payload;
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
    },
    getters: {}
};

export default Funkos;