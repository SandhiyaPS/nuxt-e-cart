<template>
  <Head>
    <Title>{{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="thumb" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <Icon name="mdi:cart-plus" class="text-xl" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const { id } = useRoute().params
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id })
if (!product.value) {
  throw createError({ statusCode: 400, statusMessage: "Product Not Found" });
}
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>