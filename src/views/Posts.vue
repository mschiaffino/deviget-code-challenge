<template>
  <div>
    <full-post post-id="2hozly"></full-post>
  </div>
</template>

<script>
import FullPost from "../components/FullPost.vue";

export default {
  name: "posts",
  components: {
    FullPost
  },
  created() {
    this.$store.dispatch("postsStore/fetchPosts");
  }
};
</script>

<style>
</style>