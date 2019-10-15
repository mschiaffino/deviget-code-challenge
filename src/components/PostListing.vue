<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <span v-text="post.title"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "post-listing",
  computed: {
    ...mapGetters("postsStore", ["posts"])
  }
};
</script>

<style>
</style>