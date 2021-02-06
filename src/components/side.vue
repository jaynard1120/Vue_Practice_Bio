<template>
  <div class="side">
    <input type="text" v-model="user.name" />
    <input
      type="button"
      class="btn btn-secondary"
      @click="addUser()"
      value="add"
    />
    <p v-for="(tawo, i) in users" :key="i" v-text="tawo.name">
     
    </p>
  </div>
</template>

<style scoped>
</style>
<script>
export default {
  data: function() {
    return {
      user: {
        name: "",
      },
    };
  },
  methods: {
    addUser() {
      this.$store.state.users.push(Object.assign({}, this.user));
    },
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
};
</script>