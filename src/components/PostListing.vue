<template>
  <div class="post-listing">
    <button-dismiss-all-posts :disabled="dismissAllDisabled"></button-dismiss-all-posts>
    <div
      v-for="post in postsNotDismissed"
      :key="post.id"
      class="post-listing-items-container"
    >
      <post-listing-item :post-id="post.id"></post-listing-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListingItem from "./PostListingItem.vue";
import ButtonDismissAllPosts from "./ButtonDismissAllPosts.vue";

export default {
  name: "post-listing",
  computed: {
    ...mapGetters("postsStore", ["postsNotDismissed"]),
    dismissAllDisabled() {
      return this.postsNotDismissed.length === 0;
    }
  },
  components: {
    PostListingItem,
    ButtonDismissAllPosts
  }
};
</script>

<style lang="scss" scoped>
.post-listing {
  width: 30%;
  min-width: 300px;
  max-height: 100vh;
  overflow: scroll;
  margin-top: 20px;
}

.post-listing-items-container {
  margin-top: 10px;
}
</style>