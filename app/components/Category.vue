<script setup>
const { data: categories } = await useFetch(
  "https://dummyjson.com/products/categories",
);

// const limitedCategories = computed(() => categories.value?.slice(0, 4) || []);
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
          Product Category
        </h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 lg:w-1/4 md:w-1/2"
          v-for="(category, index) in categories"
          :key="category.slug"
        >
          <NuxtLink :to="`/category/${category.slug}`">
            <div class="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                :src="`https://picsum.photos/200/300?random=${index}`"
              />
              <div class="w-full">
                <h2 class="title-font font-medium text-lg text-gray-900">
                  {{ category.name }}
                </h2>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
