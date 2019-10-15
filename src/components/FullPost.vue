<template>
  <el-card>
    <span v-text="post.title"></span>
  </el-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "full-post",
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
  }
};
</script>

<style>
</style>