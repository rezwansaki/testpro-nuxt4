<script setup>
const url = useRequestURL();
const pathname = url.pathname;
const removeSlash = pathname.slice(1);
const categories = removeSlash.split("/");
const product = ref(null);
</script>

<template>
  <div class="container mx-auto mt-10 px-5">
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center gap-1 text-sm text-gray-700">
        <li>
          <a href="#" class="block transition-colors hover:text-gray-900">
            Home
          </a>
        </li>

        <li class="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

        <template v-for="(category, index) in categories" :key="index">
          <li>
            <a
              href="#"
              class="block transition-colors hover:text-gray-900 capitalize"
            >
              {{ category }}
            </a>
          </li>

          <li v-if="index !== categories.length - 1" class="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </li>
        </template>

        <li class="rtl:rotate-180" v-if="product">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>

        <li v-if="product">
          <a href="#" class="block transition-colors hover:text-gray-900">
            Product
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>
