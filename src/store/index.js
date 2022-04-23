import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import Compras from '@/store/Compras';
import Funkos from '@/store/Funkos';
import ShopCartFunkos from '@/store/ShopCartFunkos';
import User from '@/store/User';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Compras,
    Funkos,
    ShopCartFunkos,
    User,
  },
  plugins: [vuexLocal.plugin]
});
