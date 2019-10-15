import Vue from 'vue';
import redditService from '../../services/reddit.service';

export const postStore = {
  namespaced: true,
  state: {
    posts: {}
  },
  getters: {},
  mutations: {
    setPosts(state, posts) {
      posts.forEach(post => {
        Vue.set(state.posts, post.data.id, post.data);
      });
    }
  },
  actions: {
    fetchPosts({ commit }) {
      return redditService
        .fetchPosts()
        .then(response => commit('setPosts', response.data.children));
    }
  }
};

export default postStore;
