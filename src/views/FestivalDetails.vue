<script lang="ts">
import festivalDataService from "../services/FestivalDataService";
import type Festival from "../types/Festival";

export default {
  data: () => ({
    festival: [] as Festival[],
  }),

  created() {
    this.getFestival(this.$route.params.id);
  },

  methods: {
    async getFestival(festivalId: string | string[]) {
      const [error, festival] = await festivalDataService().get(festivalId);
      console.log("festival >>>>>>", festival);

      if (error) {
        return console.log("error >>>>>>", error);
      }

      this.festival = festival;
    },
  },
};
</script>

<template>
  <div
    v-for="({ id, title, image, page, where }, index) in festival"
    :key="`${index}-${id}`"
  >
    <h2>{{ title }} | {{ where }}</h2>
    <img :src="image" class="festival-image" />
    <a href="page" target="_blank" rel="noreferrer" class="festival-link">
      {{ page }}
    </a>
  </div>
</template>

<style scoped>
.festival-image {
  width: 100%;
  object-fit: contain;
}

.festival-link {
  cursor: pointer;
}
</style>
