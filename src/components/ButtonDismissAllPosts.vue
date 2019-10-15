<template>
  <el-button
    type="danger"
    @click="handleDismissAllClick"
    :disabled="disabled"
    class="dismiss-all-button"
  >DISMISS ALL</el-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    disabled: Boolean
  },
  methods: {
    ...mapActions("postsStore", ["dismissAllPosts"]),
    handleDismissAllClick() {
      this.dismissAllPosts();
      this.$router.push({
        name: "no-post-selected"
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
.dismiss-all-button {
  width: 100%;
}
</style>