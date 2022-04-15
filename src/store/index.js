import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import Funkos from '@/store/Funkos';
import User from '@/store/User';
import ShopCartFunkos from '@/store/ShopCartFunkos';

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
    Funkos,
    User,
    ShopCartFunkos,
  },
  plugins: [vuexLocal.plugin]
});
