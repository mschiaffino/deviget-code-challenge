<template>
  <el-card class="full-post">
    <div slot="header">
      <span
        v-if="post"
        v-text="post.title"
      ></span>
    </div>
    <div class="flex flex-column justify-space-between">
      <post-info-details :post-id="postId"></post-info-details>
      <div>
        <img
          v-if="post.url"
          :src="post.url"
          alt=""
          height="40%"
          width="40%"
        >
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapState } from "vuex";
import PostInfoDetails from "./PostInfoDetails.vue";

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
    PostInfoDetails
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