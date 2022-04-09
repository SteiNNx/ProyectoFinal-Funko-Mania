import Vue from 'vue';
import Vuex from 'vuex';

import Funkos from '@/store/Funkos';
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
    Funkos,
    User: User,
  }
});
