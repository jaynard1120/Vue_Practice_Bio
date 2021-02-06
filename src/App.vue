<template>
  <v-app>
    <v-sheet class="overflow-hidden">
      <v-app-bar
        app
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title style="font-weight: bold"
          ><span style="opacity: 0.5">Jaynard </span
          ><span>Senilla</span></v-toolbar-title
        >

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <router-link to="/images">
          <v-btn icon>
            <v-icon>mdi-image</v-icon>
          </v-btn>
        </router-link>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- <v-toolbar>
        <v-app-bar-nav-icon
          outlined
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="px-2 py-16 rounded" style="font-weight:bold; background:black"><span style="color:white">Jaynard's </span><span class="px-2 py-2 rounded" style="background:orange;">Borikatan</span></v-toolbar-title>
      </v-toolbar> -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list-item>
          <v-list-item-avatar width="100" height="100">
            <v-img
              src="https://avatarfiles.alphacoders.com/131/thumb-131494.jpg"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title> Asta Labiesta</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            style="text-decoration: none"
          >
            <v-list-item-action
              ><v-icon>mdi-{{ link.icon }}</v-icon></v-list-item-action
            >
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title
              ><br />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
  <!-- <div>
    <v-app> -->

  <!-- <v-card flat class="mx-auto" color="grey" height="20vh" width="50%">
        <div class="body1">
          the fadsklfsad fasdhfkj
        </div>
        <v-btn color="success">hello</v-btn>
      </v-card> -->
  <!-- <br><br> -->

  <!-- <v-navigation-drawer
        clipped
        width="200"
        v-model="sideNav"
        color="primary"
        transition="slide-x-transition"
        app
        dark
      >
       <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-img
          width="150"
          src="https://avatarfiles.alphacoders.com/131/thumb-131494.jpg"
          class=" mx-auto rounded-circle"
        ></v-img> -->

  <!-- <img width="150" 
          src="https://avatarfiles.alphacoders.com/131/thumb-131494.jpg"
          class="rounded-circle mt-5 ml-5 border"
          alt="Profile Pic"
        /> -->

  <!--         
        <h4 style="word-break: break-word" class="text-center">Asta Labista</h4>
        <hr> -->

  <!-- <v-btn outlined color="warning" class="mt-16"
          >Hello <v-icon dark right>mdi-check-circle</v-icon></v-btn
        ><br />
        <v-btn color="success"
          >like <v-icon dark right>mdi-thumb-up</v-icon></v-btn
        > -->

  <!-- <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            style="text-decoration: none"
          >
            <v-list-item-action
              ><v-icon>mdi-{{ link.icon }}</v-icon></v-list-item-action
            >
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title
              ><br />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->

  <!--       
      <div class="bg-info">
        <v-btn outlined dark color="black" @click="sideNav = !sideNav"
          ><v-icon>mdi-menu</v-icon></v-btn
        > -->

  <!-- <navigation class="bg-warning nav" /> -->

  <!-- <div>
    <router-view />
  </div> -->

  <!-- <Footer class="footerApp" /> -->

  <!-- </div>
    </v-app>
  </div> -->

  <!-- <nav> -->

  <!-- </nav>-->
</template>
<style scoped>
</style>
<script>
// import Footer from "./components/footer.vue";
// import navigation from "./components/navigation.vue";

export default {
  // components: { navigation,
  //  Footer },
  // name: "App",

  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "folder", text: "Projects", route: "/login" },
        { icon: "information-outline", text: "About", route: "/about" },
      ],
    };
  },
  // methods: {
  //   showNav(){
  //     return {
  //       sideNav: true,
  //     }
  //   }
  // }
};
</script>
