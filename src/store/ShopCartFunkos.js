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
        },
        SET_SHOW_CART(state, payload) {
            state.showCart = payload;
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
        deleteFunkoCart({ commit, state }, funko) {
            const { shopCartFunkos } = state;
            const existFunkoInShop = shopCartFunkos.findIndex((funkoIteracion) => funkoIteracion.id === funko.id);

            if (existFunkoInShop === -1) {
                this._vm.$toast.success("Error al eliminar del carrito!");
            } else {
                const newFunkosShop = [
                    ...shopCartFunkos.slice(0, existFunkoInShop),
                    ...shopCartFunkos.slice(existFunkoInShop + 1)
                ]
                commit('SET_SHOP_CART_FUNKOS', newFunkosShop);
                this._vm.$toast.success("Se ha eliminado del carrito!");
            }
        },
        changeStateShowCart({ commit, state }, newState) {
            if (newState) {
                document.body.style = 'overflow: hidden;'
            } else {
                document.body.style = 'overflow: auto;'
            }
            commit('SET_SHOW_CART', newState);
        }
    },
    getters: {
        getCountFunkosItemsInCart({ shopCartFunkos }) {
            return shopCartFunkos.length;
        },
        getTotalPriceCart({ shopCartFunkos }) {
            return shopCartFunkos.reduce(((previusValue, currentValue) => previusValue + (parseInt(currentValue.price) * currentValue.cantidad)), 0);
        }
    }
};

export default ShopCartFunkos;