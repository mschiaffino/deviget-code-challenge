import Vue from 'vue';
import redditService from '../../services/reddit.service';

const VISITED_POSTS_LOCAL_STORAGE_KEY = 'VISITED_POSTS';
const DISMISSED_POSTS_LOCAL_STORAGE_KEY = 'DISMISSED_POSTS';

export const postStore = {
  namespaced: true,
  state: {
    posts: {},
    visited: restoredVisitedPostFromLocalStorage() || {},
    dismissed: restoredDismissedPostFromLocalStorage() || {}
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
        Vue.set(state.posts, post.id, post);
      });
    },
    markVisited(state, postId) {
      Vue.set(state.visited, postId, true);

      updatedVisitedPostsInLocalStorage(state.visited);
    },
    dismissPost(state, postId) {
      Vue.set(state.dismissed, postId, true);

      updatedDismissedPostsInLocalStorage(state.dismissed);
    }
  },
  actions: {
    fetchPosts({ commit }) {
      return redditService
        .fetchPosts()
        .then(posts => commit('setPosts', posts));
    },
    dismissAllPosts({ getters, commit }) {
      getters.postsNotDismissed.forEach(post => {
        commit('dismissPost', post.id);
      });
    }
  }
};

function restoredVisitedPostFromLocalStorage() {
  return JSON.parse(localStorage.getItem(VISITED_POSTS_LOCAL_STORAGE_KEY));
}

function updatedVisitedPostsInLocalStorage(visitedPosts) {
  localStorage.setItem(
    VISITED_POSTS_LOCAL_STORAGE_KEY,
    JSON.stringify(visitedPosts)
  );
}

function restoredDismissedPostFromLocalStorage() {
  return JSON.parse(localStorage.getItem(DISMISSED_POSTS_LOCAL_STORAGE_KEY));
}

function updatedDismissedPostsInLocalStorage(dismissedPosts) {
  localStorage.setItem(
    DISMISSED_POSTS_LOCAL_STORAGE_KEY,
    JSON.stringify(dismissedPosts)
  );
}

export default postStore;
