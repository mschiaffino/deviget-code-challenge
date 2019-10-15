<template>
  <el-card class="post-listing-item-card">
    <div class="flex justify-space-between">
      <div class="flex flex-column justify-space-between text-align-left">
        <div>
          <visited-status-mark :visited="postAlreadyVisited"></visited-status-mark>
          <span
            v-text="post.title"
            @click="showFullPost"
            class="post-listing-item-title"
          ></span>
        </div>
      </div>
      <div class="flex flex-column justify-space-between">
        <div class="flex justify-end">
          <i
            class="el-icon-circle-close"
            @click="handleDismissClick"
          ></i>
        </div>
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
    </div>
    <post-footer :post-id="postId"></post-footer>
  </el-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PostFooter from "./PostFooter.vue";
import VisitedStatusMark from "./VisitedStatusMark.vue";

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
    postAlreadyVisited() {
      return this.visited[this.postId] || false;
    }
  },
  methods: {
    ...mapMutations("postsStore", ["markVisited", "dismissPost"]),
    showFullPost() {
      this.$router.push({
        name: "full-post",
        params: {
          postId: this.postId
        }
      });
      this.markVisited(this.postId);
    },
    handleDismissClick() {
      this.dismissPost(this.postId);
    }
  },
  components: {
    PostFooter,
    VisitedStatusMark
  }
};
</script>

<style lang="scss" scoped>
.post-listing-item-card {
  margin-bottom: 6px;
}

.text-align-left {
  text-align: left;
}

.post-listing-item-title {
  cursor: pointer;
  text-align: left;
}

.post-listing-item-thumbnail {
  cursor: pointer;
  margin: 3px 0;
}

.el-icon-circle-close {
  cursor: pointer;
}
</style>