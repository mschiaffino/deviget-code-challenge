<template>
  <div class="post-footer flex justify-space-between align-center flex-wrap">
    <div class=" flex align-center flex-wrap">
      <i class="el-icon-user-solid"></i>
      <span
        v-text="`${post.author},`"
        class="post-author"
      ></span>
      <span v-text="timeSinceCreation"></span>
    </div>
    <div class="flex align-center justify-end">
      <span v-text="post.commentsQuantity"></span>
      <i class="el-icon-chat-square"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState("postsStore", ["posts", "visited"]),
    post() {
      return this.posts[this.postId];
    },
    timeSinceCreation() {
      return moment.utc(this.post.creationDate).fromNow();
    }
  }
};
</script>

<style lang="scss" scoped>
.post-footer {
  margin-top: 10px;
}

.el-icon-user-solid {
  margin-right: 3px;
}

.el-icon-chat-square {
  margin-left: 3px;
}
.post-author {
  margin-right: 0.3em;
}
</style>