import Vue from 'vue';
import Router from 'vue-router';
import Posts from './views/Posts.vue';
import FullPost from './components/FullPost.vue';
import NoPostSelectedPlaceholder from './components/NoPostSelectedPlaceholder.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      children: [
        {
          path: '/posts/:postId',
          name: 'full-post',
          component: FullPost,
          props: true
        },
        {
          path: '/*',
          name: 'no-post-selected',
          component: NoPostSelectedPlaceholder
        }
      ]
    },
    { path: '/*', redirect: { name: 'no-post-selected' } }
  ]
});
