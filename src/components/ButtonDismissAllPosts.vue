<template>
  <el-button
    type="danger"
    @click="dismissAllPosts"
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
    ...mapActions("postsStore", ["dismissAllPosts"])
  }
};
</script>

<style  lang="scss" scoped>
.dismiss-all-button {
  width: 100%;
}
</style>