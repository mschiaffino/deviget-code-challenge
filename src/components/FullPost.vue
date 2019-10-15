<template>
  <el-card
    class="full-post"
    v-if="post"
  >
    <div slot="header">
      <span v-text="post.title"></span>
    </div>
    <div>
      <img
        v-if="post.url"
        :src="post.url"
        alt=""
        height="40%"
        width="40%"
      >
    </div>
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

<style lang="scss" scoped>
.full-post {
  margin-left: 20px;
  width: 60%;
}
</style>