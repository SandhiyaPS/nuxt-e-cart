<template>
  <div class="
        w-11/12
        py-5
        mx-auto">
    <h2 class="font-bold">{{ title }}</h2>
    <div id="carouselExampleSlidesOnly" class="relative  h-1/6" data-te-carousel-init data-te-ride="carousel">
      <!--Carousel items-->
      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <!--First item-->
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item data-te-carousel-active>
          a
        </div>
        <!--Second item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          b
        </div>
        <!--Third item-->
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item>
          c
        </div>
        <template v-for="item in newCategoryList" :key="item">
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item>
            {{ item }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import {
  Carousel,
  initTE,
} from "tw-elements";

onMounted(() => {
  initTE({ Carousel });
})
const { title, categoryList } = defineProps(['title', 'categoryList'])
const newCategoryList = [
  "furniture",
  "books",
  "shoe",
  "a",
  "b",
  "c",
  "afurniture",
  "aabooks",
  "ashoe",
  "ax",
  "by",
  "ch",

]
</script>

<style scoped></style>