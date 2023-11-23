<template>
  <main>
    <HeroBanner />
    <div class="w-11/12 mx-auto">
      <div class="flex flex-wrap items-center justify-center gap-8 my-16 text-center brand lg:justify-between">
        <img :src="brandlogo1" alt="Brand 1" width="132" height="35" />
        <img :src="brandlogo2" alt="Brand 2" width="119" height="30" />
        <img :src="brandlogo3" alt="Brand 3" width="49" height="48" />
        <img :src="brandlogo4" alt="Brand 4" width="78" height="30" />
        <img :src="brandlogo5" alt="Brand 5" width="70" height="44" />
        <img :src="brandlogo6" alt="Brand 6" width="132" height="40" />
      </div>

      <section class="my-16">
        <div class="flex items-end justify-between">
          <h2 class="text-lg font-semibold md:text-2xl">Shop by Category</h2>
          <NuxtLink class="text-primary" to="/categories">View All</NuxtLink>
        </div>
        <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
          <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
        </div>
      </section>

      <section class="grid gap-4 my-24 lg:grid-cols-4">
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
          <img :src="box" width="60" height="60" alt="Free Shipping" loading="lazy" />
          <div>
            <h3 class="text-xl font-semibold">Free Shipping</h3>
            <p class="text-sm">Free shipping on order over €50</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
          <img :src="moneyback" width="60" height="60" alt="Money Back" loading="lazy" />
          <div>
            <h3 class="text-xl font-semibold">Peace of Mind</h3>
            <p class="text-sm">30 days money back guarantee</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
          <img :src="secure" width="60" height="60" alt="Secure Payment" loading="lazy" />
          <div>
            <h3 class="text-xl font-semibold">100% Payment Secure</h3>
            <p class="text-sm">Your payment are safe with us.</p>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
          <img :src="support" width="60" height="60" alt="Support 24/7" loading="lazy" />
          <div>
            <h3 class="text-xl font-semibold">Support 24/7</h3>
            <p class="text-sm">24/7 Online support</p>
          </div>
        </div>
      </section>
    </div>
  </main>
  <!-- <ClientOnly>
    <SliderComp title="Shop our top categories" :categoryList="categoryList"/>
  </ClientOnly> -->
</template>

<script setup>
import brandlogo1 from "assets/images/brandlogo1.svg";
import brandlogo2 from "assets/images/brandlogo2.svg";
import brandlogo3 from "assets/images/brandlogo3.svg";
import brandlogo4 from "assets/images/brandlogo4.svg";
import brandlogo5 from "assets/images/brandlogo5.svg";
import brandlogo6 from "assets/images/brandlogo6.svg";
import box from "assets/images/box.svg";
import moneyback from "assets/images/moneyback.svg";
import secure from "assets/images/secure.svg";
import support from "assets/images/support.svg";
import albumsBanner from "assets/images/albumsBanner.png";
import clothingBanner from "assets/images/clothingBanner.png";
import hoodiesBanner from "assets/images/hoodiesBanner.png";
import musicBanner from "assets/images/musicBanner.png";
import postersBanner from "assets/images/postersBanner.png";
import tshirtBanner from "assets/images/tshirtBanner.png";
const productCategories = [
  {
    link: `product-category/clothings`,
    name: 'Clothings',
    image: {
      sourceUrl: clothingBanner,
    }
  },
  {
    link: `product-category/tshirts`,
    name: 'T-Shirts',
    image: {
      sourceUrl: tshirtBanner,
    }
  },
  {
    link: `product-category/hoodies`,
    name: 'Hoodies',
    image: {
      sourceUrl: hoodiesBanner,
    }
  },
  {
    link: `product-category/albums`,
    name: 'Albums',
    image: {
      sourceUrl: albumsBanner,
    }
  },
  {
    link: `product-category/music`,
    name: 'Music',
    image: {
      sourceUrl: musicBanner,
    }
  },
  {
    link: `product-category/posters`,
    name: 'Posters',
    image: {
      sourceUrl: postersBanner,
    }
  },
]
const categoryList = [
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