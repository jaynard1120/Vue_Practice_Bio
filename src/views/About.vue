<template>
  <v-app>
    <!-- <v-card width="700" flat class="mx-auto mb-16"> -->
    <v-container class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 150px">
        <v-col>
          <v-card class="pa-2" outlined tile>
            <v-card-title>Web Developer</v-card-title>
            <v-text>
              A paragraph is a series of sentences that are organized and coherent, and are all related to a 
              single topic. Almost every piece of writing you do that is longer than a few sentences should be
               organized into paragraphs.
            </v-text>
          </v-card>
        </v-col>
        <v-col cols="6" md="1">
          <v-card class="pa-2" outlined tile>
            <v-img width="100" src="../assets/logo.svg"></v-img>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="pa-2" outlined tile>
            <v-card-title>Joker</v-card-title>
            <v-text>
              Because there are four paragraph types — narrative, descriptive, expository, and persuasive—the 
              paragraph can be used to describe or explain an endless variety of things. It's important to know
               how to use each paragraph type for the right purpose, though.
            </v-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-card> -->
    <v-divider></v-divider>
    <v-toolbar-title> My Hobbies </v-toolbar-title><br />
    <v-card max-width="500" outlined shaped elevation="1">
      <v-img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAJnpE5Z_oNoqNmZYznS7fXbrcNU4_MIACw&usqp=CAU"
      ></v-img>
      <v-card-title> Volleyball</v-card-title>
      <v-card-text>Hooray!</v-card-text>
    </v-card>
  </v-app>
</template>
<style>
</style>
<script>
export default {};
</script>
