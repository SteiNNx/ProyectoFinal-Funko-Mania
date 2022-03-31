import Vue from 'vue';
import Vuex from 'vuex';

import Products from '@/store/Products';
import User from '@/store/User';

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
    Products,
    User,
  }
});
