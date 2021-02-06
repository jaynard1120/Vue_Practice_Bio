<template>

  <v-app>
    <v-card class="mx-auto" max-width="500" max-height="400">
      <v-card-title>Jaynard</v-card-title>
      <v-img width="100%" src="../assets/prof.jpg"></v-img>
    </v-card>
  </v-app>

  <!-- <div class="home">
    <div class="row ml-2 mt-5">
      <div class="col">
        <div class="row">
          <div class="col headPost bg-warning mb-3"><post-header /></div>
          <div class="w-100"></div>
          <div class="col mpost">
            <main-posts />
          </div>
        </div>
      </div>
      <div class="col prof">
        <side />
      </div>
    </div>
  </div> -->
</template>
<style>
/* .home {
  height: 90vh;
}
.row {
  width: 99%;
}
.mpost {
  min-height: 40vh;
  max-height: 100%;
  background-color: #e09a3f;
}
.headPost {
  height: 10vh;
}
.prof {
  min-height: 40%;
  max-height: 100%;
  background: #11a0ed;
} */
</style>
<script>
// import MainPosts from "../components/mainPosts.vue";
// import PostHeader from "../components/postHeader.vue";
// import Side from "../components/side.vue";
// @ is an alias to /src

export default {
  name: "Home",
  // components: {
  //   PostHeader,
  //   MainPosts,
  //   Side,
  // },
};
</script>
