<template>
  <NuxtLink :to="node.link"
    class="border border-white rounded-xl flex item relative justify-center overflow-hidden snap-mandatory snap-x">
    <!-- <NuxtImg v-if="node.image" width="220" height="280" class="h-full object-cover w-full inset-0 absolute"
      :src="albumsBanner" :alt="node.name" loading="lazy" fit="outside" /> -->
    <img :src="node.image.sourceUrl" alt="Brand 6" width="220" height="280" class="h-full object-cover w-full inset-0 absolute"/>
    <div class="bg-gradient-to-t from-black to-transparent h-1/2 opacity-50 inset-x-0 bottom-0 absolute"></div>
    <span class="font-semibold mt-auto text-sm text-white mb-2 relative capitalize md:text-base md:mb-4">{{ node.name
    }}</span>
  </NuxtLink>
</template>

<script setup>
import albumsBanner from "assets/images/albumsBanner.png";
const props = defineProps({
  node: { type: Object, required: true },
});
</script>

<style lang="postcss" scoped>
.item {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  aspect-ratio: 4 / 5;
}
</style>
