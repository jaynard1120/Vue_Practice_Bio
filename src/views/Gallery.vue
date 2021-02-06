<template>
  <v-app>
    <v-toolbar-title class="grey--text text--darken-4">
      <v-icon>mdi-image</v-icon> My Photos
    </v-toolbar-title>
    <v-divider></v-divider>
    <v-row>
      <v-col
        v-for="(image, i) in images"
        :key="i"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img :src="require('../assets/' + image)" class="grey lighten-2 border">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      images: ["img1.jpg", "img3.jpg", "img2.jpg", "img4.jpg", "prof.jpg","logo.svg"],
    };
  },
};
</script>