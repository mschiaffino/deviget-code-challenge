<template>
  <div class="post-listing">
    <button-dismiss-all-posts :disabled="allPostsAreDismissed"></button-dismiss-all-posts>
    <div class="post-listing-items-container">
      <el-alert
        v-if="allPostsAreDismissed"
        title="All posts have been dismissed"
        type="info"
        :closable="false"
        show-icon
      >
      </el-alert>
      <post-listing-item
        :post-id="post.id"
        v-for="post in postsNotDismissed"
        :key="post.id"
      ></post-listing-item>
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
    allPostsAreDismissed() {
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