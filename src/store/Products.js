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
 * @description Modulo Productos, contiene state, mutations, actions y getters
 */
const Products = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
};

export default Products;