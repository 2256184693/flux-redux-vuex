
import Vue from 'vue';

import Vuex from 'vuex';

import actions from './actions.js';

import mutations from './mutations.js';

import getters from './getters.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    number: 3,
    list: [
      {content: '计划1', id: 1, done: false},
      {content: '计划2', id: 2, done: true},
      {content: '计划3', id: 3, done: false},
    ],
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
});

export default store;