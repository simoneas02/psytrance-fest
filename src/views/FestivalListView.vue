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
  <h2>The best Festivals in the world</h2>

  <div v-if="!festivals">Loading...</div>
  <ul v-else>
    <li v-for="({ title, id }, index) in festivals" :key="`${index}-${id}`">
      {{ title }}
      <a :href="`/${id}`"> Ver detalhes </a>
    </li>
  </ul>
</template>

<style></style>
