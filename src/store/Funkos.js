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

/**
 * @description Modulo Funkos, contiene state, mutations, actions y getters
 */
const Funkos = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
};

export default Funkos;