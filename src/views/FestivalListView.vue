<script lang="ts">
import festivalDataService from "../services/FestivalDataService";
import type Festival from "../types/Festival";

export default {
  data: () => ({
    festivals: [] as Festival[],
  }),

  created() {
    this.retrieveFestivals();
  },

  methods: {
    async retrieveFestivals() {
      const [error, festivals] = await festivalDataService().getAll();
      console.log("festivals >>>>>>", festivals);

      if (error) {
        return console.log("error >>>>>>", error);
      }

      this.festivals = festivals;
    },
  },
};
</script>

<template>
  <h1>The best Festivals in the world</h1>

  <div v-if="!festivals">Loading...</div>
  <ul v-else>
    <li v-for="({ title }, index) in festivals" :key="index">
      {{ title }}
    </li>
  </ul>
</template>

<style></style>
