<template>
  <el-card class="post-listing-item-card">
    <div class="flex justify-space-between">
      <div class="post-listing-item-title-author flex flex-column justify-space-between">
        <div>
          <span
            v-if="!postAlreadyVisited"
            class="unvisited-dot"
          ></span>
          <span
            v-text="post.title"
            @click="showFullPost"
            class="post-listing-item-title"
          ></span>
        </div>
        <div class="post-listing-item-author">
          <i class="el-icon-user-solid"></i>
          <span v-text="post.author"></span>
        </div>
      </div>
      <div class="flex flex-column">
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
  </el-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

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
  }
};
</script>

<style lang="scss" scoped>
.post-listing-item-card {
  margin-bottom: 6px;
}

.post-listing-item-title-author {
  text-align: left;
}

.post-listing-item-title {
  cursor: pointer;
}

.post-listing-item-author {
  margin-top: 10px;
}

.post-listing-item-thumbnail {
  cursor: pointer;
  margin: 3px 0;
}

.el-icon-user-solid {
  margin-right: 3px;
}

.el-icon-circle-close {
  cursor: pointer;
}

.unvisited-dot {
  height: 10px;
  width: 10px;
  margin-right: 4px;
  background-color: #409eff;
  border-radius: 50%;
  display: inline-block;
}
</style>