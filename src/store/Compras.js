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
import { getDateCompra } from "@/utils/functionsDate";


/**
 * @description Modulo Compras, contiene state, mutations, actions y getters
 */
const Compras = {
    namespaced: true,
    state: {
        compras: []
    },
    mutations: {
        SET_COMPRAS(state, payload) {
            state.compras = payload;
        },
    },
    actions: {
        getCompras({ commit, state }) {
            const usersRef = collection(db, "compras");
            const queryRequest = query(usersRef, where("email", "==", user.email));
            onSnapshot(queryRequest, (querySnapshot) => {
                const compras = [];
                querySnapshot.forEach((doc) => {
                    const compra = {
                        ...doc.data(),
                        id: doc.id,
                    };
                    compras.push(compra);
                });
                commit("SET_COMPRAS", funkos);
            });
        },
        async addCompra({ commit, state }, compra) {
            const compraRef = await addDoc(collection(db, "compras"), {
                compra,
                fecha_compra: getDateCompra(),
            });
            console.log("Document written with ID: ", compraRef.id);
        },
    },
    getters: {

    }
};

export default Compras;