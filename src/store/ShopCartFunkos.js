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
 * @description Modulo ShopCartFunkos, contiene state, mutations, actions y getters
 */
const ShopCartFunkos = {
    namespaced: true,
    state: {
        shopCartFunkos: [],
        showCart: false,
    },
    mutations: {
        SET_SHOP_CART_FUNKOS(state, payload) {
            state.shopCartFunkos = payload;
        }
    },
    actions: {
        addFunkoCart({ commit, state }, funko) {
            const { shopCartFunkos } = state;
            const existFunkoInCart = shopCartFunkos.findIndex((funkoIteracion) => funkoIteracion.id === funko.id);
            if (existFunkoInCart === -1) {
                shopCartFunkos.push(funko);
                this._vm.$toast.success("Se ha agregado al carrito!");
                commit('SET_SHOP_CART_FUNKOS', shopCartFunkos);
            } else {
                shopCartFunkos[existFunkoInCart] = {
                    ...shopCartFunkos[existFunkoInCart],
                    cantidad: shopCartFunkos[existFunkoInCart].cantidad + funko.cantidad,
                }
                commit('SET_SHOP_CART_FUNKOS', shopCartFunkos);
                this._vm.$toast.success("Se ha agregado al carrito!");
            }
        },
    },
    getters: {
        getCountFunkosItemsInCart({ shopCartFunkos }) {
            return shopCartFunkos.length;
        }
    }
};

export default ShopCartFunkos;