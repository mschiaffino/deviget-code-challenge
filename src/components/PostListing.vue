<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <post-listing-item :post-id="post.id"></post-listing-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListingItem from "./PostListingItem.vue";

export default {
  name: "post-listing",
  computed: {
    ...mapGetters("postsStore", ["posts"])
  },
  components: {
    PostListingItem
  }
};
</script>

<style>
</style>