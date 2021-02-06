<template>
  <div class="main-post">
    <h4>Posts: </h4>
      <posts />
  </div>
</template>
<style scoped>
  .main-post{
    min-height: 50%;
    max-height: 100%;
  }
</style>
<script>
import posts from "./posts.vue";
export default {
  components: { posts },
};
</script>