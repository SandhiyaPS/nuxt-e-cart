<template>
  <Head>
    <Title>Products</Title>
    <Meta name="description" content="Products List" />
  </Head>
  <div class="gap-16">

    <div class="w-full component-margin">
      <div class="flex items-center justify-end w-full gap-8 mb-5">
        <FilteringFilters />
      </div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="prod in products" :key="prod.id">
          <ProductCard :product="prod" />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
.component-margin {
  padding: 20px;
  background: #f4f4f4;
}
</style>