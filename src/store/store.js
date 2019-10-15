import Vue from 'vue';
import Vuex from 'vuex';
import postsStore from './modules/posts.store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    postsStore
  }
});
