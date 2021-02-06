<template>
  <div class="headerPost">
    <input type="text" class="input-text" v-model="post.message" />
    <input
      type="button"
      class="btn btn-primary ml-2"
      value="Post"
      @click="postMessage()"
    />
  </div>
</template>
<style scoped>
.headerPost {
  height: 100%;
}
.input-text {
  margin-top: 2%;
  border: 2px solid black;
  height: 70%;
  width: 80%;
  font-size: 20px;
}
.btn {
  margin-top: -1%;
}
</style>
<script>
export default {
  data: () => {
    return {
      post: {
        message: "",
      },
    };
  },
  methods: {
    postMessage() {
      this.$store.state.posts.push(Object.assign({}, this.post));
    },
  },
};
</script>