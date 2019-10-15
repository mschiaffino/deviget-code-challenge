<template>
  <div class="flex justify-space-around flex-wrap-reverse">
    <post-listing></post-listing>
    <router-view />
  </div>
</template>

<script>
import PostListing from "../components/PostListing.vue";

export default {
  name: "posts",
  created() {
    this.$store.dispatch("postsStore/fetchPosts");
  },
  components: {
    PostListing
  }
};
</script>

<style>
</style>