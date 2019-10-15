<template>
  <span
    class="visited-status"
    :class="{unvisited: !visited}"
  ></span>
</template>

<script>
export default {
  props: {
    visited: Boolean
  }
};
</script>

<style lang="scss" scoped>
.visited-status {
  height: 10px;
  width: 10px;
  margin-right: 4px;
  background-color: #909399;
  border-radius: 50%;
  display: inline-block;

  &.unvisited {
    background-color: #409eff;
  }
}
</style>