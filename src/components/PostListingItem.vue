<template>
  <el-card>
    <span
      v-text="post.title"
      @click="showFullPost"
      class="post-listing-item-title"
    ></span>
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
.post-listing-item-title {
  cursor: pointer;
}
</style>