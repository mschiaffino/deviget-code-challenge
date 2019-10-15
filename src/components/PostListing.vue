<template>
  <div class="post-listing">
    <el-button
      type="danger"
      @click="dismissAllPosts"
      :disabled="dismissAllDisabled"
      class="dismiss-all-button"
    >DISMISS ALL</el-button>
    <div
      v-for="post in postsNotDismissed"
      :key="post.id"
    >
      <post-listing-item :post-id="post.id"></post-listing-item>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostListingItem from "./PostListingItem.vue";

export default {
  name: "post-listing",
  computed: {
    ...mapGetters("postsStore", ["postsNotDismissed"]),
    dismissAllDisabled() {
      return this.postsNotDismissed.length === 0;
    }
  },
  methods: {
    ...mapActions("postsStore", ["dismissAllPosts"])
  },
  components: {
    PostListingItem
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
.dismiss-all-button {
  width: 100%;
  margin-bottom: 10px;
}
</style>