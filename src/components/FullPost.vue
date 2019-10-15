<template>
  <el-card
    class="full-post"
    v-if="post"
  >
    <div slot="header">
      <span v-text="post.title"></span>
    </div>
    <div class="flex flex-column justify-space-between">
      <div>
        <img
          v-if="post.url"
          :src="post.url"
          alt=""
          height="40%"
          width="40%"
        >
      </div>
      <post-footer :post-id="postId"></post-footer>
    </div>
  </el-card>
</template>

<script>
import { mapState } from "vuex";
import PostFooter from "./PostFooter.vue";

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
  },
  components: {
    PostFooter
  }
};
</script>

<style lang="scss" scoped>
.full-post {
  width: 60%;
  min-width: 300px;
  margin-top: 20px;
}
</style>