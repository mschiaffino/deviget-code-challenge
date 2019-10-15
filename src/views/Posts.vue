<template>
  <div>
    <post-listing></post-listing>
    <full-post post-id="2hozly"></full-post>
  </div>
</template>

<script>
import PostListing from "../components/PostListing.vue";
import FullPost from "../components/FullPost.vue";

export default {
  name: "posts",
  created() {
    this.$store.dispatch("postsStore/fetchPosts");
  },
  components: {
    FullPost,
    PostListing
  }
};
</script>

<style>
</style>