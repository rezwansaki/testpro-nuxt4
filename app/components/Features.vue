<script setup>
const { data: products } = await useFetch(
  "https://dummyjson.com/products?limit=4",
);
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
          Feature Products
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 lg:w-1/4 md:w-1/2"
          v-for="product in products.products"
          :key="product.id"
        >
          <NuxtLink :to="`/product/${product.id}`">
            <div class="h-full flex flex-col items-center text-center">
              <img
                :alt="product.title"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                :src="product.thumbnail"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  {{ product.title }}
                </h2>
                <h3 class="text-gray-500 mb-3">{{ product.category }}</h3>
                <p class="mb-4">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
