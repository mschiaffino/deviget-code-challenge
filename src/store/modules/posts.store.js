import Vue from 'vue';
import redditService from '../../services/reddit.service';

export const postStore = {
  namespaced: true,
  state: {
    posts: {},
    visited: {},
    dismissed: {}
  },
  getters: {
    posts(state) {
      return Object.values(state.posts);
    },
    postsNotDismissed(state, getters) {
      return getters.posts.filter(post => !state.dismissed[post.id]);
    }
  },
  mutations: {
    setPosts(state, posts) {
      posts.forEach(post => {
        Vue.set(state.posts, post.data.id, post.data);
      });
    },
    markVisited(state, postId) {
      Vue.set(state.visited, postId, true);
    },
    dismissPost(state, postId) {
      Vue.set(state.dismissed, postId, true);
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
