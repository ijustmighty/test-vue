// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: null,
  },
  mutations: {
    setFormData(state, data) {
      state.formData = data;
    },
  },
  actions: {
    saveFormData({ commit }, data) {
      commit('setFormData', data);
    },
  },
  getters: {
    getFormData: (state) => state.formData,
  },
});
