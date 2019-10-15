<template>
  <div class="post-listing">
    <div
      v-for="post in postsNotDismissed"
      :key="post.id"
    >
      <post-listing-item :post-id="post.id"></post-listing-item>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostListingItem from "./PostListingItem.vue";

export default {
  name: "post-listing",
  computed: {
    ...mapGetters("postsStore", ["postsNotDismissed"])
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
</style>