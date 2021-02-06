<template>
  <!-- <nav class="navbar navbar-light header">
    <div class="inNav">
      <img
        src="https://avatarfiles.alphacoders.com/131/thumb-131494.jpg"
        class="rounded-circle"
        alt="Profile Pic"
      />
      <h1 class="mt-3">Asta Labista</h1>
    
    <form class="mt-4 ml-3">
      <router-link to="/"
        ><button class="btn btn-outline-success" type="button">
          Home
        </button></router-link
      >
      <br />
      <router-link to="/about"
        ><button class="btn btn-outline-success mt-2" type="button">
          About
        </button></router-link
      >
    </form>
    </div>
  </nav> -->
  <nav>
    <v-toolbar flat app>
      <v-btn outlined dark color="black" @click="drawer = !drawer"><v-icon>mdi-menu</v-icon></v-btn>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light"> Biography</span>
        <span>Jaynard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey"
        ><span>Sign Out</span><v-icon>mdi-exit-to-app</v-icon></v-btn
      >
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>
<style lang="css">
</style>
<script>
export default {
  data(){
    return{
      drawer: false
    }
  }
};
</script>