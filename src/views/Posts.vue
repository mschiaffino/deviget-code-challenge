<template>
  <div class="flex">
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