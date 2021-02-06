<template>
  <div class=" post mt-2">
      <div class="mb-2 bg-warning" v-for="(post,i) in posts" :key="i" v-text="post.message">
          
      </div>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPost;
    },
  },
};
</script>