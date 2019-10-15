<template>
  <el-card class="post-listing-item-card">
    <div class="flex justify-space-between">
      <span
        v-text="post.title"
        @click="showFullPost"
        class="post-listing-item-title"
      ></span>
      <img
        v-if="post.thumbnail"
        @click="showFullPost"
        :src="post.thumbnail"
        alt=""
        height="140"
        width="140"
        class="post-listing-item-thumbnail"
      >
    </div>
  </el-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState("postsStore", ["posts"]),
    post() {
      return this.posts[this.postId];
    }
  },
  methods: {
    showFullPost() {
      this.$router.push({
        name: "full-post",
        params: {
          postId: this.postId
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-listing-item-card {
  margin-bottom: 6px;
}
.post-listing-item-title {
  cursor: pointer;
}
.post-listing-item-thumbnail {
  cursor: pointer;
}
</style>